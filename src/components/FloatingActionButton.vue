<template>
  <button
    class="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-surface text-white shadow-lg flex items-center justify-center text-sm md:text-base hover:scale-105 transition-transform"
    aria-label="Book appointment"
  >
    <LanguageIcon class="w-6 h-6 text-white" />
  </button>
</template>

<script setup lang="ts">
import { LanguageIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped>
</style>