<template>
  <div class="bg-surface border border-[var(--color-border)] p-6 max-w-xs rounded-xl shadow-md">
    <div class="flex items-center justify-between mb-2 gap-2">
      <h4 class="text-lg font-semibold text-gray-100">{{ name }}</h4>
      <span class="text-sm text-gray-400">{{ date }}</span>
    </div>

    <div class="flex mb-3">
      <template v-for="i in 5" :key="i">
        <svg
          class="w-5 h-5"
          fill="currentColor"
          :class="i <= (rate ?? 0) ? 'text-yellow-400' : 'text-neutral-600'"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.784.57-1.838-.196-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118l-3.37-2.45c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      </template>
    </div>

    <p class="text-gray-700 dark:text-gray-300 italic">“{{ description }}”</p>
    <div class="flex justify-end mt-2">
      <img src="@/assets/Booksy-Logo.png" alt="Booksy Logo" class="w-16">
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  description: String,
  date: String,
  rate: Number
})
</script>
