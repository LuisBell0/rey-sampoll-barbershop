<template>
  <header>
    <nav-bar :class="{'fade-in' : store.loading == false}" class="no-show" />
  </header>
  <main>
    <home-screen />
  </main>
  <footer>
    <footer-component />
  </footer>
</template>

<script setup lang="ts">
import NavBar from '../components/NavbarComponent.vue';
import HomeScreen from './HomeScreen.vue';
import FooterComponent from '../components/FooterComponent.vue';
import introAnimationStore from '@/stores/intro-animation';

const store = introAnimationStore();
</script>

<style scoped>
template {
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
}

.no-show {
  opacity: 0;
}
</style>
