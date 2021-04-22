<template>
  <li
    class="space-y-4 group
          hover:border-purple-600
          hover:bg-gray-50
          border-2 border-transparent border-solid
          overflow-hidden relative cursor-pointer
          rounded-md
        "
        @click="handleClick"
  >
    <div
      class="mdi mx-auto inline-block text-center pt-4 mb-12"
      role="img"
    >
      <svg
        fill="currentColor"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        :title="icon.name"
      >
        <path :d="icon.path"></path>
      </svg>
    </div>
    <div class="space-y-2 absolute bottom-0 left-0 right-0">
      <div class="text-xs lg:text-sm p-2 group-hover:bg-purple-500 group-hover:text-white">
        <span>{{ icon.name }}</span>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import copy from 'copy-to-clipboard'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    icon: { type: Object, required: true }
  },
  setup (props) {
    const store = useStore()

    function handleClick () {
      copy(props.icon.name)

      store.dispatch('toast', {
        title: props.icon.name,
        text: 'copied to clipboard'
      })
    }

    return {
      handleClick
    }
  }
})
</script>

<style scoped>
</style>
