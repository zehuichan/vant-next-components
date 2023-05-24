<template>
  <div class="autocomplete">
    <van-popover v-model:show="suggestionVisible" placement="bottom-end">
      <div class="autocomplete--suggestion__popover">
        <div class="autocomplete--suggestion__list">
          <div
            v-for="(item, index) in suggestions"
            class="autocomplete--suggestion__item"
            :class="{highlighted: highlightedIndex === index}"
            @click="handleSelect(item)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <template #reference>
        <van-field
          v-bind="$attrs"
          :model-value="modelValue"
          @update:model-value="handleInput"
          @focus="handleFocus"
        />
      </template>
    </van-popover>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { debounce } from 'lodash-es'

import { isArray } from '../utils/is.js'

export default defineComponent({
  name: 'VAutocomplete',
  props: {
    modelValue: String,
    debounce: {
      type: Number,
      default: 300,
    },
    placement: {
      type: String,
      default: 'bottom-end'
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    fetchSuggestions: Function,
    triggerOnFocus: {
      type: Boolean,
      default: true
    },
    highlightFirstItem: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    let readonly = false
    let ignoreFocusEvent = false
    const activated = ref(false)
    const suggestions = ref([])
    const loading = ref(false)
    const highlightedIndex = ref(-1)
    const suggestionDisabled = ref(false)

    const suggestionVisible = computed(() => {
      const isValidData = suggestions.value.length > 0
      return (isValidData || loading.value) && activated.value
    })

    async function getData(queryString) {
      if (suggestionDisabled.value) return

      const cb = (suggestionList) => {
        loading.value = false
        if (suggestionDisabled.value) return

        if (isArray(suggestionList)) {
          suggestions.value = suggestionList
          highlightedIndex.value = props.highlightFirstItem ? 0 : -1
        } else {
          console.error('[VantComponents Error][Autocomplete]autocomplete suggestions must be an array')
        }
      }

      loading.value = true
      if (isArray(props.fetchSuggestions)) {
        cb(props.fetchSuggestions)
      } else {
        const result = await props.fetchSuggestions(queryString, cb)
        if (isArray(result)) cb(result)
      }
    }

    const debouncedGetData = debounce(getData, props.debounce)

    function handleInput(value) {
      const valuePresented = !!value

      emit('input', value)
      emit('update:modelValue', value)

      suggestionDisabled.value = false
      activated.value ||= valuePresented

      if (!props.triggerOnFocus && !value) {
        suggestionDisabled.value = true
        suggestions.value = []
        return
      }

      debouncedGetData(value)
    }

    function handleFocus(evt) {
      if (!ignoreFocusEvent) {
        activated.value = true
        emit('focus', evt)

        if (props.triggerOnFocus && !readonly) {
          debouncedGetData(String(props.modelValue))
        }
      } else {
        ignoreFocusEvent = false
      }
    }

    function handleSelect(item) {
      emit('update:modelValue', item[props.valueKey])
      emit('select', item)
      activated.value = false
      suggestions.value = []
      highlightedIndex.value = -1
    }

    return {
      suggestions,
      loading,
      highlightedIndex,
      suggestionVisible,
      handleInput,
      handleFocus,
      handleSelect
    }
  }
})
</script>

<style lang="less">
.autocomplete {
  .van-popover__wrapper {
    display: block;
  }
}

.autocomplete--suggestion__popover {
  padding: 16px 0;
  width: 300px;
  max-height: 280px;
  overflow-y: scroll;
}

.autocomplete--suggestion__list {
}

.autocomplete--suggestion__item {
  padding: 0 24px;
  line-height: 36px;
  cursor: pointer;
  color: #606266;
  font-size: 14px;
  list-style: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #f5f7fa;
  }
}

.autocomplete--suggestion__loading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
}

.autocomplete--suggestion__empty {
  padding: 0 24px;
  line-height: 36px;
  font-size: 14px;
  color: #969799;
  text-align: center;
}
</style>