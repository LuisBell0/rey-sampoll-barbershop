<template>
  <div class="flex items-center justify-center gap-4 py-4 mb-4 w-full">
    <hr class="max-w-1/4 w-1/4 border-t border-gray-300" />
    <span class="uppercase tracking-wider color-accent text-2xl md:text-4xl text-center text-shadow-sm text-shadow-yellow-700">{{ title }}</span>
    <hr class="max-w-1/4 w-1/4 border-t border-gray-300" />
  </div>
</template>

<script setup lang="ts">
  defineProps({
    title: {
      required: true,
      type: String,
    }
  })
</script>