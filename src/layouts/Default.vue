<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="min-h-screen bg-gray-100">
    <Disclosure
      as="nav"
      class="bg-white shadow-sm"
      v-slot="{ open }"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              Faster MDI Search
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <!-- <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a> -->
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">Open main menu</span>
              <mdicon
                name="menu"
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <mdicon
                name="close"
                v-else
                class="block h-6 w-6"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>
    </Disclosure>

    <div class="py-10">
      <RouterView />
    </div>

    <div class="max-w-7xl mx-auto py-6 pt-1 px-4 text-center text-sm sm:px-6 lg:px-8 lg:py-12 lg:pt-1">
      Inspired by <a
        href="https://materialdesignicons.com"
        class="underline"
      >materialdesignicons.com</a> |
      This app is created <a
        href="https:/github.com/therufa"
        class="underline"
      >@therufa</a> |
      For the sole purpose to quickly find material design icons from in the
      <a href="https://github.com/Templarian/MaterialDesign-JS">@mdi/js</a> collection.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'

import {
  Disclosure,
  DisclosureButton
} from '@headlessui/vue'

type Setup = {
  open: Ref<boolean>
}

export default defineComponent({
  components: {
    Disclosure,
    DisclosureButton
  },
  setup (): Setup {
    const open = ref(false)

    return {
      open
    }
  }
})
</script>
