<template>
  <!-- Wrapper -->
  <div class="w-full min-h-screen wood-background flex flex-col">
    <!-- Spacer to push content -->
    <div class="flex-grow flex flex-col items-center justify-center gap-8 px-4 py-8 min-h-screen">
      <h1 class="text-4xl md:text-6xl text-center font-semibold text-shadow-md text-shadow-amber-800">
        <span class="block lg:inline">Barbersuite</span>
        <span class="block lg:inline"> In Naples</span>
      </h1>

      <div class="relative h-[clamp(16rem,calc(16rem+12vw),28rem)] w-[clamp(16rem,calc(16rem+12vw),28rem)] rounded-full overflow-hidden">
        <div class="absolute inset-0 glass z-0"></div>
        <img
          src="@/assets/ReySampoll-Logo-Editado.png"
          alt="Barbershop Logo"
          class="absolute inset-0 w-full h-full object-cover z-10"
          draggable="false"
        />
      </div>

      <a
        class="block text-center text-xl
                 bg-[var(--color-accent)] text-black rounded-3xl px-6 py-2
                 hover:bg-transparent hover:text-[var(--color-accent)]
                 border hover:border-white
                 transition-colors duration-300
                 sm:inline-block sm:w-auto sm:px-6 sm:py-3 cursor-pointer"
      >
        Book Your Appointment
      </a>

      <div class="flex gap-1 flex-wrap items-center justify-center text-center">
        <map-pin-icon class="w-6 h-6" />
        <span class="font-bold text-sm md:text-lg lg:text-xl">
          1575 Pine Ridge Rd, Naples, FL 34109
        </span>
      </div>
      <span class="italic text-sm font-semibold">
        Since 2024
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import MapPinIcon from '@heroicons/vue/24/outline/MapPinIcon'
</script>