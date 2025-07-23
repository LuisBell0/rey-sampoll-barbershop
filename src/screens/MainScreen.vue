<template>
  <div>
    <header>
      <nav-bar />
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
import introAnimationStore from '@/stores/intro-animation';
import FloatingActionButton from '@/components/FloatingActionButton.vue';

const store = introAnimationStore();
</script>

<style scoped>
div {
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
}
</style>
