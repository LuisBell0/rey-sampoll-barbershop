<template>
  <nav class="navbar">
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const isOpen = ref(false);
const dropdownOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}
function closeDropdown() {
  dropdownOpen.value = false;
}
function select(lang: string) {
  console.log('Selected:', lang);
  closeDropdown();
}
</script>



<style scoped>
.navbar {
  background-image: url("../assets/wood-pattern.png");
  background-color: var(--surface-dark);
  color: var(--surface-light);
  position: absolute;
  width: 100%;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.3);
  overflow-x: hidden;
  padding: 4rem 0;
}
</style>
