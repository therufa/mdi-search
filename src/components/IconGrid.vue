<template>

  <div class="space-y-8 sm:space-y-12">
    <ul
      role="list"
      class="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-x-6 lg:grid-cols-7 xl:gap-x-8"
    >
    <IconControl
      v-for="icon in icons"
      :key="icon.name"
      :icon="icon"
    />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconControl from './IconControl.vue'

export default defineComponent({
  components: {
    IconControl
  },
  props: {
    icons: {
      type: Array,
      default: () => []
    }
  }
})
</script>
