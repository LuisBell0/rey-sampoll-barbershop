<template>
  <!-- Wrapper with background image -->
  <div class="w-full min-h-full bg-[url('@/assets/yousef-samuil-B07s5OJUDx0-unsplash.jpg')] bg-cover bg-center">
    <!-- Content -->
    <div
        class="flex flex-col items-center justify-center
             gap-4 px-4 pt-8 text-white text-center max-w-xl mx-auto
             sm:gap-6 sm:px-6 sm:max-w-2xl
             md:gap-8 md:px-0 md:max-w-4xl"
    >

      <!-- Logo -->
      <div>
        <img
            src="@/assets/ReySampoll-Logo.png"
            alt="Barbershop Logo"
            class="h-[clamp(16rem,calc(16rem+12vw),28rem)] w-[clamp(16rem,calc(16rem+12vw),28rem)] bg-secondary rounded-full p-1"
            draggable="false"
        />
      </div>

      <!-- Headline & subhead -->
      <div class="px-2">
        <h1
            class="text-3xl font-semibold mb-2 text-[var(--color-accent)]
                 sm:text-4xl sm:mb-4
                 md:text-6xl md:mb-6"
        >
          Precision. Style. Confidence.
        </h1>
        <h3 class="text-base leading-relaxed
                   sm:text-lg
                   md:text-xl">
          Step into a place where classic grooming meets modern craftsmanship.
          At <strong>Rey Sampoll Barbersuite</strong>, every cut is tailored, every
          detail sharp, and every client leaves feeling their best.
          <br /><br />
          <strong>Book your chair. Walk out transformed.</strong>
        </h3>
      </div>

      <!-- Button -->
      <a
          class="block w-full max-w-3xs text-center
               bg-[var(--color-accent)] text-black rounded-3xl px-4 py-2
               hover:bg-transparent hover:text-[var(--color-accent)]
               border hover:border-white
               transition-colors duration-300
               sm:inline-block sm:w-auto sm:px-6 sm:py-3 cursor-pointer"
      >
        Book Your Appointment
      </a>
    </div>
  </div>
</template>
