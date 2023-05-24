<template>
  <div class="autocomplete">
    <van-popover ref="popperRef" :show="show" placement="bottom-end">
      <div class="autocomplete--suggestion__popover">
        <div class="autocomplete--suggestion__list">
          <div
            v-for="(item, index) in getOptions"
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
          v-model="state"
          autocomplete="off"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </template>
    </van-popover>
  </div>
</template>

<script>
import { computed, defineComponent, nextTick, onMounted, ref, unref, watch } from 'vue'
import { get, omit } from 'lodash-es'
import { useVModel } from '@vueuse/core'

import { isFunction } from '../utils/is.js'

export default defineComponent({
  name: 'VAutocomplete',
  props: {
    modelValue: null,
    columns: Array,
    numberToString: Boolean,
    api: {
      type: Function,
      default: null
    },
    // api params
    params: null,
    // support xxx.xxx.xx
    resultField: {
      type: String,
      default: ''
    },
    labelField: {
      type: String,
      default: 'label'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    immediate: {
      type: Boolean,
      default: true
    },
    alwaysLoad: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottom-end'
    }
  },
  setup(props, { emit }) {
    let ignoreFocusEvent = false

    const popperRef = ref(null)
    const show = ref(true)
    const options = ref([])
    const loading = ref(false)
    const isFirstLoad = ref(true)

    const state = useVModel(props, 'modelValue', emit)

    const getOptions = computed(() => {
      const {
        labelField,
        valueField,
        numberToString,
        columns: defaultOptions
      } = props

      return (defaultOptions ?? unref(options)).reduce((prev, next) => {
        if (next) {
          const value = next[valueField]
          prev.push({
            ...omit(next, [labelField, valueField]),
            label: next[labelField],
            value: numberToString ? `${value}` : value
          })
        }
        return prev
      }, [])
    })

    watch(
      () => props.params,
      () => {
        !unref(isFirstLoad) && fetch()
      },
      { deep: true }
    )

    function handleFocus(evt) {
      if (!ignoreFocusEvent) {
        show.value = true
        emit('focus', evt)
      } else {
        ignoreFocusEvent = false
      }
    }

    async function handleBlur(evt) {
      await nextTick()
      console.log(popperRef.value, document.activeElement)
      if (popperRef.value.$el.contains(document.activeElement)) {
        ignoreFocusEvent = true
        return
      }
    }

    async function fetch() {
      const { api, options: defaultOptions = [] } = props
      if (defaultOptions.length || !api || !isFunction(api)) return
      options.value = []
      try {
        loading.value = true
        const res = await api(props.params)
        if (Array.isArray(res)) {
          options.value = res
          emitChange()
          return
        }
        if (props.resultField) {
          options.value = get(res, props.resultField) || []
        }
        emitChange()
      } catch (error) {
        console.warn(error)
      } finally {
        loading.value = false
      }
    }

    async function handleFetch(visible) {
      if (visible) {
        if (props.alwaysLoad) {
          await fetch()
        } else if (!props.immediate && unref(isFirstLoad)) {
          await fetch()
          isFirstLoad.value = false
        }
      }
    }

    function emitChange() {
      emit('options-change', unref(getOptions))
    }

    onMounted(() => {
      props.immediate && !props.alwaysLoad && fetch()
    })

    return {
      popperRef,
      show,
      state,
      getOptions,
      loading,
      handleFocus,
      handleBlur,
      handleFetch
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