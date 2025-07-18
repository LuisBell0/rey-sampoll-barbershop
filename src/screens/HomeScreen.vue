<template>
  <!-- Wrapper with background image -->
  <div class="relative w-full h-[100dvh] overflow-hidden">

    <!-- Background image -->
    <div
      class="absolute inset-0 bg-[url('@/assets/yousef-samuil-B07s5OJUDx0-unsplash.jpg')] bg-cover bg-center brightness-75"
    ></div>

    <!-- Optional extra dark overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content -->
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center
           gap-6 px-4 text-white text-center max-w-2xl mx-auto">
      
      <div>
        <img
          src="@/assets/ReySampoll-Logo.png"
          alt="Barbershop Logo"
          class="w-xs h-xs bg-secondary rounded-full p-1"
          draggable="false"
        />
      </div>

      <div class="max-w-2xl">
        <h1 class="text-5xl md:text-6xl font-semibold mb-4 text-[var(--color-accent)]">
          Precision. Style. Confidence.
        </h1>
        <h3 class="text-lg leading-relaxed">
          Step into a place where classic grooming meets modern craftsmanship.
          At <strong>Rey Sampoll Barbersuite</strong>, every cut is tailored, every detail sharp,
          and every client leaves feeling their best.
          Whether you're here for a fresh fade, a clean shave, or just a moment to relax —
          you're in good hands.
          <br /><br />
          <strong>Book your chair. Walk out transformed.</strong>
        </h3>
      </div>

      <a
        class="bg-[var(--color-accent)] text-black rounded-3xl px-4 py-2 
               hover:bg-black/50 hover:text-[var(--color-accent)] 
               border hover:border-white 
               transition-colors duration-300"
      >
        Book Your Appointment
      </a>
    </div>
  </div>
</template>
