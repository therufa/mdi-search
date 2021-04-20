<template>

  <div class="space-y-8 sm:space-y-12">
    <ul
      role="list"
      class="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-x-6 lg:grid-cols-7 xl:gap-x-8"
    >
      <li
        v-for="icon in icons"
        :key="icon.name"
      >
        <div class="space-y-4">
          <span class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24">
            <span
              role="img"
              class="mdi"
            ><svg
                fill="currentColor"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!---->
                <path :d="icon.path"></path>
              </svg></span>
          </span>
          <div class="space-y-2">
            <div class="text-xs font-medium lg:text-sm">
              <span>{{ icon.name }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icons: {
      type: Array,
      default: () => []
    }
  }
})
</script>
