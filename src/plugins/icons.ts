import mdiVue from 'mdi-vue/v3'
import * as icons from '@mdi/js'

export const iconPlugin = (app: unknown) =>
  mdiVue.install(app, { icons })
