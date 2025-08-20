<template>
  <div
    class="fixed right-4 bottom-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex flex-col-reverse gap-4 z-50"
  >
    <!-- Floating Action Button -->
    <button
      @click="onClick"
      ref="fabButton"
      :class="[
        'rounded-xl glass flex items-center justify-center text-xs p-3 hover:scale-105 transition-all sm:p-4 sm:text-sm md:text-base',
        animationType === 'flip' ? 'will-change-transform' : ''
      ]"
      aria-label="Choose Language"
      style="transform-style: preserve-3d;"
    >
      <LanguageIcon v-show="!showLanguages" class="w-6 h-6 md:w-8 md:h-8" />
      <XMarkIcon v-show="showLanguages" class="w-6 h-6 md:w-8 md:h-8" />
    </button>

    <!-- Languages container -->
    <div
      ref="languagesContainer"
      v-show="showLanguages"
      class="flex flex-col-reverse gap-4 pointer-events-auto"
    >
      <button
        v-for="(value, key, i) in languages"
        :key="key"
        class="glass !rounded-full flex items-center justify-center text-lg p-3 sm:p-4 sm:text-sm md:text-base z-50"
        :aria-label="`Change language to ${key}`"
      >
        <img :src="value" :alt="`${key} logo`" class="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue';
import gsap from 'gsap';
import usFlagIcon from '@/assets/us.svg';
import esFlagIcon from '@/assets/es.svg';
import { LanguageIcon, XMarkIcon } from '@heroicons/vue/24/outline';

const showLanguages = ref(false);
const languagesContainer = ref<HTMLDivElement | null>(null);
const fabButton = ref<HTMLButtonElement | null>(null);
const languages = {
  en: usFlagIcon,
  es: esFlagIcon
};

const animationType = ref('popspin');

function getLangButtons(): HTMLButtonElement[] {
  if (!languagesContainer.value) return [];
  return Array.from(languagesContainer.value.querySelectorAll('button')) as HTMLButtonElement[];
}

async function animateOpen() {
  if (!fabButton.value) return;
  await nextTick();
  const btns = getLangButtons();

  // Ensure starting styles are applied *after* the element is visible
  gsap.set(btns, { opacity: 0, scale: 0.75, y: 12 });

  // wait for the browser to paint the DOM change
  await new Promise(requestAnimationFrame);

  // Now animate (this will always run)
  gsap.fromTo(
    fabButton.value,
    { rotation: 0, scale: 1 },
    { rotation: '+=180', scale: 1.12, duration: 0.5, ease: 'power2.out' }
  );
  gsap.to(btns, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.4,
    ease: 'none',
    stagger: 0.05
  });
}


async function animateClose() {
  if (!fabButton.value) return;
  const btns = getLangButtons();

  gsap.to(btns, {
    opacity: 0,
    scale: 0.75,
    y: 10,
    duration: 0.18,
    ease: 'power1.in',
    stagger: 0.05,
    onComplete: () => (showLanguages.value = false)
  });
  gsap.to(fabButton.value, { rotation: '+=180', scale: 1, duration: 0.26, ease: 'power2.in' });

}

async function onClick() {
  if (!showLanguages.value) {
    showLanguages.value = true;
    await nextTick();
    await animateOpen();
  } else {
    await animateClose();
  }
}

</script>

<style scoped>
[z-index="50"] {
  z-index: 50;
}
</style>
