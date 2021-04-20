<template>

  <div class="space-y-8 sm:space-y-12">
    <ul role="list" class="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-x-6 lg:grid-cols-7 xl:gap-x-8">
      <li
        v-for="icon in people"
        :key="icon.name"
      >
        <div class="space-y-4">
          <img
            class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
            :src="icon.imageUrl"
            alt=""
          />
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

const people = Array.from(new Array(30)).map(() =>
  ({
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
  }))

export default defineComponent({
  setup () {
    return {
      people
    }
  }
})
</script>
