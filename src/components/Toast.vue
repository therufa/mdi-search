<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    aria-live="assertive"
    class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:justify-end"
  >
    <transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="mt-1 text-sm text-gray-500">
                <span class="font-medium">{{ toast.title }}</span> {{ toast.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const toast = computed(() => store.state.toast)

    return {
      show: computed(() => toast.value !== null),
      toast
    }
  }
}
</script>
