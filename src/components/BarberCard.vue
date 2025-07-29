<template>
<div class="group relative max-w-xs h-56 rounded-lg overflow-hidden shadow-lg">
  <!-- Background Image -->
  <img
    src="@/assets/ReySampollLogoInvertido-nobg.png"
    alt="Barber at work"
    class="absolute inset-0 w-full h-full object-contain grayscale group-hover:grayscale-0 transition"
  />

  <!-- Overlay -->
  <div
    class="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 translate-y-full
               group-hover:translate-y-0 transition-transform duration-300"
  >
    <h4 class="text-white text-xl font-bold mb-1">Jordan Lee</h4>
    <p class="text-sm text-white italic">“Best fade in town!” – Chris M.</p>
  </div>
</div>
</template>

<script>

</script>