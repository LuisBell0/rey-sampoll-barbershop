<template>
  <nav
    class="z-100 fixed top-6 right-6 w-48 p-4 rounded-xl bg-[var(--color-surface)] hidden md:block transition-all duration-300 ease-in-out">
    <div class="relative pl-4">
      <!-- Vertical line -->
      <div class="absolute left-1 top-0 bottom-0 w-px bg-gray-400"></div>
      <!-- Moving dot -->
      <div
        class="absolute left-[-3px] w-2 h-2 rounded-full bg-accent transition-transform duration-300"
        :style="{ transform: `translateY(${dotY}px)` }"
      ></div>
      <ol class="flex flex-col gap-4 list-none">
        <li v-for="(section, i) in sections" :key="i">
          <a
            :href="`#${section.id}`"
            class="hover:text-accent transition-colors hover:text-(--color-accent)"
            :class="{ 'font-semibold text-(--color-accent)': activeIndex === i }"
          >
            {{ section.label }}
          </a>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const sections = [
  { id: 'home', label: 'Home'},
  { id: 'services', label: 'Services' },
  { id: 'about',    label: 'About'    },
  { id: 'reviews',  label: 'Reviews'  },
];
const activeIndex = ref(0);
const dotY = ref(0);

function updateSpy() {
  sections.forEach((sec, i) => {
    const el = document.getElementById(sec.id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5) {
      activeIndex.value = i;
      dotY.value = i * 1.5 + 'rem'; // adjust spacing to match .gap
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
  box-shadow: 0 0 3px 1px rgb(255, 255, 255);
}
</style>
