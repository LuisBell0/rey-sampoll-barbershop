<template>
  <nav class="fixed top-0 right-4 sm:right-6 md:right-auto md:left-4 pt-3 md:px-3 z-50">
    <div
      :class="[
        'hidden md:inline-block p-6 pt-4 lg:p-7 lg:pt-4 rounded-xl glass border border-[var(--color-border)] overflow-hidden transition-all duration-400 ease-in-out',
        navHeightClass
      ]"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <ul class="flex flex-col justify-center items-center gap-3 lg:gap-4">
        <li>
          <img src="@/assets/horse-face.png" alt="Horse Face image" class="w-10 h-10">
        </li>
        <li v-for="(section, index) in sections" :key="index" class="text-xl font-semibold hover:text-[var(--color-accent)]">
          <button @click="scrollToSection(section.id)" class="cursor-pointer">
            {{ section.label }}
          </button>
        </li>
      </ul>
    </div>

    <!-- Small screen menu button -->
    <button
      class="glass transform p-3 sm:p-4 rounded-full md:hidden"
      aria-label="Menu"
      @click="isExpanded = !isExpanded"
    >
      <bars3-icon class="h-6 w-6" />
    </button>

    <!-- Small-screen full-screen modal -->
    <transition name="fade" appear>
      <div
        v-if="isExpanded && screenSize === 'sm'"
        class="fixed inset-0 z-50 flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <!-- backdrop (click to close) -->
        <div class="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" @click="closeModal"></div>

        <!-- modal content -->
        <div
          class="relative z-50 w-full h-full p-8 flex flex-col items-center justify-center overflow-y-auto"
        >
          <!-- close -->
          <button
            ref="closeBtn"
            @click="closeModal"
            aria-label="Close menu"
            class="absolute top-3 right-4 sm:right-6 p-3 sm:p-4 rounded-full glass"
          >
            <XMarkIcon class="w-6 h-6" />
          </button>

          <ul class="flex flex-col gap-8 text-2xl font-semibold text-center">
            <li v-for="(section, idx) in sections" :key="idx">
              <button
                class="px-6 py-3 w-full max-w-xs rounded-md hover:opacity-90"
                @click="onNavItemClick(section.id)"
              >
                {{ section.label }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick, watch } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { Bars3Icon } from '@heroicons/vue/24/solid'

const isHovered = ref(false)
const isExpanded = ref(false)
const screenSize = ref<'sm' | 'md' | 'lg'>('sm')
const closeBtn = ref<HTMLButtonElement | null>(null)

const updateScreenSize = () => {
  const width = window.innerWidth
  if (width < 768) {
    screenSize.value = 'sm'
  } else if (width < 1024) {
    screenSize.value = 'md'
  } else {
    screenSize.value = 'lg'
  }
}

const onMouseEnter = () => {
  if (screenSize.value === 'md') isHovered.value = true
}
const onMouseLeave = () => {
  if (screenSize.value === 'md') isHovered.value = false
}

const navHeightClass = computed(() => {
  if (screenSize.value === 'sm') {
    return isExpanded.value ? 'h-full' : 'h-18'
  } else if (screenSize.value === 'md') {
    return isHovered.value ? 'h-50' : 'h-18'
  } else {
    return 'h-full'
  }
})

const sections = [
  { id: 'services', label: 'Services' },
  { id: 'barbers', label: 'Barbers' },
  { id: 'reviews', label: 'Reviews' }
]

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

// close modal helper
const closeModal = () => {
  isExpanded.value = false
}

// when a nav item is tapped: scroll and close modal (for small screens)
const onNavItemClick = (id: string) => {
  // close immediately so UI hides
  closeModal()
  // small delay to let modal unmount, then scroll
  setTimeout(() => scrollToSection(id), 100)
}

// prevent body scroll while modal is open, focus management, Escape key
const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isExpanded.value) closeModal()
}

watch(isExpanded, async (val) => {
  if (val) {
    document.body.classList.add('overflow-hidden')
    await nextTick()
    // focus the close button for accessibility
    closeBtn.value?.focus()
    window.addEventListener('keydown', onKeyDown)
  } else {
    document.body.classList.remove('overflow-hidden')
    window.removeEventListener('keydown', onKeyDown)
  }
})

// if screen becomes larger than small, ensure modal closed
watch(screenSize, (val) => {
  if (val !== 'sm') isExpanded.value = false
})

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
  window.removeEventListener('keydown', onKeyDown)
  document.body.classList.remove('overflow-hidden')
})
</script>

<style scoped>
/* Optional small transition for fade (you can keep Tailwind utilities instead) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
