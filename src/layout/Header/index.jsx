import { defineComponent } from 'vue'
import pkg from '/package.json'
import config from '@/config'
// components
import ThemeTabs from '@/components/ThemeTabs.vue'

const { version } = pkg

export default defineComponent({
  name: 'Header',
  setup() {
    const { github } = config
    return () => (
      <div class="v-doc-header">
        <div class="v-doc-row">
          <div class="v-doc-header__top">
            <div href={github} class="van-doc-header__logo">
              <span class="van-doc-header__title">v{version}</span>
              <span class="van-doc-header__subtitle">（适用于 Vue 3）</span>
            </div>
            <ul class="v-doc-header__top-nav">
              <li class="v-doc-header__top-nav-item github">
                <a href={github} target="_blank">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2.23999C6.475 2.23999 2 6.71499 2 12.24C2 16.665 4.8625 20.4025 8.8375 21.7275C9.3375 21.815 9.525 21.515 9.525 21.2525C9.525 21.015 9.5125 20.2275 9.5125 19.39C7 19.8525 6.35 18.7775 6.15 18.215C6.0375 17.9275 5.55 17.04 5.125 16.8025C4.775 16.615 4.275 16.1525 5.1125 16.14C5.9 16.1275 6.4625 16.865 6.65 17.165C7.55 18.6775 8.9875 18.2525 9.5625 17.99C9.65 17.34 9.9125 16.9025 10.2 16.6525C7.975 16.4025 5.65 15.54 5.65 11.715C5.65 10.6275 6.0375 9.72749 6.675 9.02749C6.575 8.77749 6.225 7.75249 6.775 6.37749C6.775 6.37749 7.6125 6.11499 9.525 7.40249C10.325 7.17749 11.175 7.06499 12.025 7.06499C12.875 7.06499 13.725 7.17749 14.525 7.40249C16.4375 6.10249 17.275 6.37749 17.275 6.37749C17.825 7.75249 17.475 8.77749 17.375 9.02749C18.0125 9.72749 18.4 10.615 18.4 11.715C18.4 15.5525 16.0625 16.4025 13.8375 16.6525C14.2 16.965 14.5125 17.565 14.5125 18.5025C14.5125 19.84 14.5 20.915 14.5 21.2525C14.5 21.515 14.6875 21.8275 15.1875 21.7275C17.1727 21.0573 18.8977 19.7815 20.1198 18.0795C21.3419 16.3776 21.9995 14.3352 22 12.24C22 6.71499 17.525 2.23999 12 2.23999Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li class="v-doc-header__top-nav-item">
                <ThemeTabs/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})