import { defineComponent } from 'vue'
import { createNamespace } from '../utils'

const [name] = createNamespace('table')

import './index.less'

export default defineComponent({
  name,
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => [],
      required: true
    },
    data: {
      type: Array,
      default: () => []
    },
    showSummary: {
      type: Boolean,
      default: false
    },
    summary: String,
    striped: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {

    const cellClasses = (item) => ({
      'v-table__main__head__tr--border': props.bordered,
      [`v-table__main__head__tr--align${item.align ? item.align : ''}`]: true
    })

    const getColumnItem = (value) => props.columns.filter((item) => item.key === value)[0]

    const renderMainHead = () => (
      <div class="v-table__main__head">
        <div class="v-table__main__head__tr">
          {
            props.columns.map((item) => (
              <div class={['v-table__main__head__tr__th', cellClasses(item)]}>
                <div class="cell">{item.label}</div>
              </div>
            ))
          }
        </div>
      </div>
    )

    const renderMainBody = () => (
      <div class="v-table__main__body">
        {
          props.data.map((item) => (
            <div class="v-table__main__body__tr">
              {
                Object.keys(item).map((value) => (
                  <div class={['v-table__main__body__tr__td', cellClasses(getColumnItem(value))]}>
                    <div class="cell">
                      {
                        slots[getColumnItem(value).key]
                          ? slots[getColumnItem(value).key]({ scope: item })
                          : item[value]
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    )

    const renderSummary = () => (
      <div class="v-table__summary">
        {
          slots.summary
            ? slots.summary()
            : <span class="v-table__summary__text">{props.summary}</span>
        }
      </div>
    )

    const renderNodata = () => (
      <div class="v-table__nodata">
        <div class={['v-table__nodata', { 'v-table__nodata--border': props.bordered }]}>
          {
            slots.nodata
              ? slots.nodata()
              : <div class="v-table__nodata__text">暂无数据</div>
          }
        </div>
      </div>
    )

    return () => (
      <div class="v-table">
        <div class={['v-table__main', { 'v-table__main--striped': props.striped }]}>
          {renderMainHead()}
          {renderMainBody()}
        </div>
        {!props.data.length && renderNodata()}
        {props.showSummary && renderSummary()}
      </div>
    )
  }
})