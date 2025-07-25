<template>
  <nav class="flex justify-end text-white fixed inset-x-0 top-0 z-50 px-4 py-2">
    <div class="hidden md:flex justify-end md:justify-center items-center max-w-7xl mx-auto rounded-full bg-white/20 backdrop-blur-lg backdrop-saturate-150 shadow-lg border border-white/30">
      <!-- Desktop Links -->
      <ul class="flex list-none justify-center items-center gap-28 px-5 py-1">
        <li><a href="#" class="text-2xl italic font-bold hover:scale-110 transition">Contact</a></li>
        <li><a href="#" class="text-2xl italic font-bold hover:scale-110 transition">Services</a></li>
        <li>
          <img src="../assets/horse-face.png" alt="horse-face" class="w-20 h-20 select-none" draggable="false">
        </li>
        <li><a href="#" class="text-2xl italic font-bold hover:scale-110 transition">Pricing</a></li>
        <li class="relative">
          <div
            class="text-2xl italic font-bold flex items-center cursor-pointer hover:scale-110 transition"
            @click="toggleDropdown"
            tabindex="0"
          >
            Language
            <span
              class="ml-2 block w-3 h-3 border-r-2 border-b-2 border-white transform rotate-45 transition"
              :class="{ 'rotate-[-135deg]': dropdownOpen }"
            ></span>
          </div>
          <ul
            v-if="dropdownOpen"
            class="absolute top-full left-0 bg-white text-black rounded border border-gray-300 mt-2 w-32 z-50"
            @click="closeDropdown"
          >
            <li
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              @click="select('Spanish')"
            >Spanish</li>
            <li
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              @click="select('English')"
            >English</li>
          </ul>
        </li>
      </ul>

      <!-- Mobile Toggle -->
    </div>
    <button
      @click="toggleMenu"
      class="md:hidden flex flex-col justify-center items-center space-y-1 p-3 focus:outline-none rounded-lg
            bg-white/20 backdrop-blur-lg backdrop-saturate-150 shadow-lg border border-white/30"
    >
      <span
        class="block w-6 h-0.5 bg-white transition-transform"
        :class="{ 'rotate-45 translate-y-1': isOpen }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-white transition-opacity"
        :class="{ 'opacity-0': isOpen }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-white transition-transform"
        :class="{ '-rotate-45 -translate-y-1': isOpen }"
      ></span>
    </button>

    <!-- Mobile Menu -->
    <ul
      v-if="isOpen"
      class="md:hidden bg-gray-800 flex flex-col items-center space-y-4 py-4"
    >
      <li><a href="#" class="text-2xl italic font-bold hover:scale-110 transition">Contact</a></li>
      <li><a href="#" class="text-2xl italic font-bold hover:scale-110 transition">Services</a></li>
      <li>
        <img src="../assets/horse-face.png" alt="horse-face" class="w-20 h-20 select-none" draggable="false">
      </li>
      <li><a href="#" class="text-2xl italic font-bold hover:scale-110 transition">Pricing</a></li>
      <li class="relative">
        <div
          class="text-2xl italic font-bold flex items-center cursor-pointer hover:scale-110 transition"
          @click="toggleDropdown"
          tabindex="0"
        >
          Language
          <span
            class="ml-2 block w-3 h-3 border-r-2 border-b-2 border-white transform rotate-45 transition"
            :class="{ 'rotate-[-135deg]': dropdownOpen }"
          ></span>
        </div>
        <ul
          v-if="dropdownOpen"
          class="absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-black rounded border border-gray-300 mt-2 w-32 z-50"
          @click="closeDropdown"
        >
          <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer" @click="select('Spanish')">Spanish</li>
          <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer" @click="select('English')">English</li>
        </ul>
      </li>
    </ul>
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
