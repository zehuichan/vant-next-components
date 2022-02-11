import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import pkg from '/package.json'

const { version } = pkg

export default defineComponent({
  name: 'NavMenu',
  props: {
    config: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const config = props.config
    const route = useRoute()

    return () => (
      <div class="v-doc-nav">
        {
          config.map((group, index) => (
            <div class="v-doc-nav__group" key={index}>
              <div class="v-doc-nav__title">
                {group.title} {index === 0 ? <span class="tag">v {version}</span> : null}
              </div>
              {
                group.items.map((item, groupIndex) => (
                  <div class="v-doc-nav__item" key={groupIndex}>
                    <router-link class={{ active: route.name === item.path }} to={item.path}>
                      {item.title}
                    </router-link>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    )
  }
})