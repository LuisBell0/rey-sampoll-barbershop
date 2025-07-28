<template>
  <nav class="fixed top-0 right-0 md:left-0 pt-3 px-3">
    <div class="hidden md:inline-block p-6 lg:p-8 rounded-xl bg-[#00000087]">
      <ul class="flex flex-col justify-center items-center gap-2 lg:gap-4">
        <li class=""><img src="@/assets/horse-face.png" alt="Horse Face image" class="w-10 h-10" draggable="false"></li>
        <li class="text-xl font-semibold hover:text-[var(--color-accent)]"><a href="">Services</a></li>
        <li class="text-xl font-semibold hover:text-[var(--color-accent)]"><a href="">Barbers</a></li>
        <li class="text-xl font-semibold hover:text-[var(--color-accent)]"><a href="">About</a></li>
      </ul>
    </div>
    <button
        @click="open = !open"
        class="glass transform p-3 sm:p-4 rounded-full md:hidden"
        aria-label="Menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'reviews', label: 'Reviews' },
];

const activeIndex = ref(0);
const dotY = ref('0rem');
const open = ref(false);

function updateSpy() {
  sections.forEach((sec, i) => {
    const el = document.getElementById(sec.id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.5
    ) {
      activeIndex.value = i;
      dotY.value = `${i * 1.5}rem`;
    }
  });
}

onMounted(() => {
  window.addEventListener('scroll', updateSpy, { passive: true });
  updateSpy();
});
onUnmounted(() => {
  window.removeEventListener('scroll', updateSpy);
});
</script>
