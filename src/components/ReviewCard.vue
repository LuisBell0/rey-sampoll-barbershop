<template>
  <div class="flex flex-col gap-4 items-start justify-start p-5 border rounded-lg bg-white">
    <div class="flex flex-col text-black">
      <div class="flex flex-row">
        <CheckIcon v-for="(stars, index) in rate" :key="index" class="w-6 h-6 text-yellow-600" />
      </div>
      <h3>{{ description }}</h3>
    </div>
    <div class="text-black flex flex-col">
      <span>{{ name }}</span>
      <span class="">{{ date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CheckIcon} from "@heroicons/vue/24/solid";

defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped>

</style>