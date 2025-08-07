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
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </nav>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isHovered = ref(false)
const isExpanded = ref(false)
const screenSize = ref<'sm' | 'md' | 'lg'>('sm')

// Dynamically compute screen size
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

// Hover only activates on md screens
const onMouseEnter = () => {
  if (screenSize.value === 'md') {
    isHovered.value = true
  }
}
const onMouseLeave = () => {
  if (screenSize.value === 'md') {
    isHovered.value = false
  }
}

// Dynamically determine height class
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

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})

</script>
