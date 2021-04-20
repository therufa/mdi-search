<template>
  <component :is="layoutComponent">
    <router-view/>
  </component>
</template>

<script lang="ts">
import DefaultLayout from '@/layouts/Default.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const layoutComponent = DefaultLayout

    return {
      layoutComponent
    }
  }
})
</script>
