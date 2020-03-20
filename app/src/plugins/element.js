import Vue from 'vue'
import {
  Table,
  TableColumn
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/pt-br'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Table)
Vue.use(TableColumn)
