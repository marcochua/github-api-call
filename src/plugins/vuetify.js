import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VCard,
  VGrid,
  VDialog,
  VDivider,
  VToolbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VCard,
    VBtn,
    VIcon,
    VGrid,
    VDivider,
    VToolbar,
    VDialog,
    transitions
  },
  iconfont: 'md'
})
