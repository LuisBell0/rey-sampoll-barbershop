<template>
  <div class="min-h-screen px-4 py-8 flex flex-col">
    <div class="flex items-center justify-center gap-4 py-8">
      <hr class="w-1/4 border-t border-gray-300" />
      <span class="uppercase tracking-wider color-accent text-sm md:text-xl">Meet Our Barbers</span>
      <hr class="w-1/4 border-t border-gray-300" />
    </div>
    <BarberCard />
  </div>
</template>

<script setup lang="ts">
import BarberCard from "@/components/BarberCard.vue"
</script>