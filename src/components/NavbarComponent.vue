<template>
  <!-- Hamburger toggle (mobile only), now centered at top -->
  <button
      @click="open = !open"
      class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-2 bg-secondary text-white rounded-full shadow-lg
           md:hidden"
      aria-label="Menu"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
         viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  <!-- Nav panel -->
  <nav
      :class="[
      'fixed inset-x-0 bg-secondary-transparent backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out',
      open
        ? 'translate-y-0'
        : 'translate-y-full',
      'md:translate-y-0 md:inset-auto md:top-6 md:right-6 md:w-48 md:block'
    ]"
      class="block md:block"
  >
    <div class="relative pl-4">
      <!-- Vertical line (desktop only) -->
      <div class="hidden md:block absolute left-1 top-0 bottom-0 w-px bg-gray-400"></div>
      <!-- Moving dot -->
      <div
          class="absolute left-[-3px] w-2 h-2 rounded-full bg-accent transition-transform duration-300"
          :style="{ transform: `translateY(${dotY}px)` }"
      ></div>

      <ul
          class="
          flex items-center justify-around gap-4 p-2
          md:flex-col md:gap-4 md:py-4
        "
      >
        <li v-for="(section, i) in sections" :key="i">
          <a
              :href="`#${section.id}`"
              class="block px-2 py-1 rounded hover:text-accent transition-colors
                   md:px-0"
              :class="{ 'font-semibold text-accent': activeIndex === i }"
          >
            {{ section.label }}
          </a>
        </li>
      </ul>
    </div>
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

<style scoped>
nav:hover {
  box-shadow: 0 0 12px 1px rgb(255 255 255);
}
</style>
