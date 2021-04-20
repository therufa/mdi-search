<template>
  <main>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

      <div class="mt-3 mb-12 relative rounded-md shadow-sm">
        <input
          type="text"
          :class="[
            'focus:ring-indigo-500 focus:border-indigo-500',
            'block w-full pr-14 p-3 sm:text-sm border-gray-300 rounded-md',
            'md:text-lg leading-8'
          ]"
          placeholder="Search 5500+ icons for ..."
        />
        <div class="absolute inset-y-0 right-0 p-3 pr-5 pl-3 flex items-center pointer-events-none">
          <mdicon name="magnify" />
        </div>
      </div>

      <div class="bg-white block w-full pr-14 p-3 sm:text-sm border-gray-300 rounded-md shadow-sm">
        <div class="max-w-7xl mx-auto py-6 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
          <IconGrid />
        </div>
      </div>

    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconGrid from '@/components/IconGrid.vue'

export default defineComponent({
  components: {
    IconGrid
  }
})
</script>
