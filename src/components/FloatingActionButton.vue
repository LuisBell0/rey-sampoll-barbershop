<template>
  <div class="fixed right-4 bottom-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex flex-col-reverse gap-4 z-50">
    <button
      ref="fabButton"
      class="rounded-xl
        glass
        flex items-center justify-center
        text-xs
        p-3
        hover:scale-105 transition-all

        sm:p-4
        sm:text-sm
        md:text-base
      "
        aria-label="Choose Language"
    >
      <LanguageIcon class="w-6 h-6 md:w-8 md:h-8" />
    </button>
    <button
      v-for="(value, key) in languages"
      :key="key"
      class="glass !rounded-full
        flex items-center justify-center
        text-lg
        p-3
        sm:p-5
        sm:text-sm
        md:text-base
        z-50
        transition-all duration-300"
      :aria-label="`Change language to ${key}`"
    >
      <img :src="value" :alt="`${key} logo`" class=""/>
    </button>
  </div>
</template>

<script setup lang="ts">
import usFlagIcon from '@/assets/us.svg'
import esFlagIcon from '@/assets/es.svg'
import { LanguageIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted } from 'vue';

const fabButton = ref<HTMLButtonElement | null>(null)

const languages: Record<string, string> = {
  en: usFlagIcon,
  es: esFlagIcon
}

</script>
