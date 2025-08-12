<template>
  <button
      class="fixed bottom-4 right-4
     rounded-xl
      glass
      flex items-center justify-center
      text-xs
      p-3
      hover:scale-105 transition-all

      sm:bottom-6 sm:right-6
      sm:p-4
      sm:text-sm

      md:bottom-8 md:right-8
      md:text-base
      z-50
    "
      aria-label="Choose Language"
  >
    <LanguageIcon class="w-6 h-6 md:w-8 md:h-8" />
  </button>
</template>

<script setup lang="ts">
import { LanguageIcon } from '@heroicons/vue/24/outline';
</script>
