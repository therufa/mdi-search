<template>
  <component :is="layoutComponent">
    <router-view/>
  </component>
  <Toast />
</template>

<script lang="ts">
import DefaultLayout from '@/layouts/Default.vue'
import Toast from '@/components/Toast.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Toast
  },
  setup () {
    const layoutComponent = DefaultLayout

    return {
      layoutComponent
    }
  }
})
</script>
