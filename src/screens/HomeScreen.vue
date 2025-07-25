<template>
  <div class="w-full min-h-screen flex items-center justify-center bg-[url('@/assets/scissors-combs-copy-space.jpg')] bg-cover bg-center">
    <div class="flex flex-col items-center justify-center gap-4">
      <div>
        <h1 class="text-4xl font-bold italic text-[var(--color-primary)] text-center">
          <span class="block md:inline">Barbersuite</span>
          <span class="block md:inline"> In Naples</span>
        </h1>
      </div>
      <div class="">
        <img
          src="/src/assets/Barbershop-Logo-New.png"
          alt="logo back"
          class="w-full h-full object-contain"
          draggable="false"
        />
      </div>
      <div class="mt-8">
        <div class="flex flex-col gap-4 transition-opacity duration-700">
          <button
            class="md:text-xl font-bold px-2 md:px-4 py-2.5 md:py-4 rounded-lg italic bg-[var(--color-primary)] bg-cover text-[var(--color-on-surface)] hover:scale-110 duration-150 shadow-lg"
          >
            Book Your Appointment
          </button>
          <div class="flex items-center space-x-2 text-[var(--color-on-surface)]">
            <map-pin-icon class="w-5 h-5" />
            <span>1575 Pine Ridge Rd, Naples, FL, 34109</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline'
</script>
