<template>
  <div class="max-w-xs bg-surface rounded-lg shadow-lg overflow-hidden">
    <img
      :src="image"
      alt="Premium Cut"
      class="w-full h-40 object-contain"
    />
    <div class="p-4 flex flex-col h-40">
      <div class="flex items-center gap-2 mb-2">
        <ScissorsIcon class="w-4 h-4"/>
        <h3 class="text-xl font-semibold">{{ title }}</h3>
        <ScissorsIcon class="w-4 h-4 transform -scale-x-100"/>
      </div>

      <p class="color-accent text-sm min-h-[3.5rem]">
        {{ description }}
      </p>

      <div class="mt-auto text-lg font-bold">
        ${{ price }}
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ScissorsIcon } from '@heroicons/vue/24/solid';
defineProps({
    title: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: String,
    },
    description: {
        required: false,
        type: String,
    },
    image: {
        required: true,
        type: String,
    },
})
</script>