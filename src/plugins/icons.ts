import mdiVue from 'mdi-vue/v3'
import {
  mdiMenu,
  mdiClose,
  mdiMagnify,
  mdiLoading,
  mdiEmoticonSadOutline
} from '@mdi/js'

export const iconPlugin = (app: unknown): void =>
  mdiVue.install(app, {
    icons: {
      mdiMenu,
      mdiClose,
      mdiMagnify,
      mdiLoading,
      mdiEmoticonSadOutline
    }
  })
