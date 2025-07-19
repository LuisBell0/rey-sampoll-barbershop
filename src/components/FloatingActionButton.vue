<template>
  <button
      class="
      fixed bottom-4 right-4
      w-12 h-12 rounded-xl
      secondary-transparent text-white shadow-lg
      flex items-center justify-center
      text-xs
      hover:scale-105 transition-transform

      sm:bottom-6 sm:right-6
      sm:w-16 sm:h-16
      sm:text-sm

      md:bottom-8 md:right-8
      md:w-20 md:h-20
      md:text-base
      z-50
    "
      aria-label="Book appointment"
  >
    <LanguageIcon class="w-6 h-6" />
  </button>
</template>

<script setup lang="ts">
import { LanguageIcon } from '@heroicons/vue/24/outline';
</script>
