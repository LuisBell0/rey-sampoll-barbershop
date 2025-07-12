<script setup lang="ts">
import NavBar from '../components/NavbarComponent.vue';
import HomeScreen from './HomeScreen.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>

<template>
  <header>
    <nav-bar />
  </header>
  <main>
    <home-screen />
  </main>
  <footer>
    <footer-component />
  </footer>
</template>

<style scoped>
template {
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
}
</style>
