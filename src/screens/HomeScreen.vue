<template>
  <!-- Wrapper with background image -->
  <div class="w-full min-h-full bg-[url('@/assets/wood-pattern2.jpg')] bg-cover bg-center">
    <!-- Content -->
    <div class="flex flex-col items-center justify-center gap-8 h-dvh">
      <div class="relative h-[clamp(16rem,calc(16rem+12vw),28rem)] w-[clamp(16rem,calc(16rem+12vw),28rem)] rounded-full overflow-hidden glass-mask">
        <!-- Glass Layer -->
        <div class="absolute inset-0 glass z-0"></div>
        <!-- Image on top -->
        <img
          src="@/assets/ReySampoll-Logo-Editado.png"
          alt="Barbershop Logo"
          class="absolute inset-0 w-full h-full object-cover z-10"
          draggable="false"
        />
      </div>
      <h1 class="text-3xl text-center">
        <span class="block md:inline">Barbersuite</span>
        <span class="block md:inline"> In Naples</span>
      </h1>
      <!-- Button -->
      <a class="block text-center text-xl
               bg-[var(--color-accent)] text-black rounded-3xl px-6 py-2
               hover:bg-transparent hover:text-[var(--color-accent)]
               border hover:border-white
               transition-colors duration-300
               sm:inline-block sm:w-auto sm:px-6 sm:py-3 cursor-pointer"
      >
        Book Your Appointment
      </a>
      <span class="font-bold text-lg">1575 Pine Ridge Rd, Naples, FL 34109</span>
    </div>
  </div>
</template>
