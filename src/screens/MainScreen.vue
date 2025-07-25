<template>
  <div class="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
    <header>
        <nav-bar :class="{'fade-in' : store.loading == false}" class="opacity-[0]" />
    </header>
    <main>
      <home-screen />
      <floating-action-button />
    </main>
    <footer>
      <footer-component />
    </footer>
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavbarComponent.vue';
import HomeScreen from './HomeScreen.vue';
import FooterComponent from '../components/FooterComponent.vue';
import FloatingActionButton from '../components/FloatingActionButton.vue';
import introAnimationStore from '@/stores/intro-animation';

const store = introAnimationStore();
</script>
