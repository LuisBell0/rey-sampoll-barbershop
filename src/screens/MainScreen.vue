<template>
  <div class="layout">
    <header>
      <NavBar />
    </header>
    <main>
      <HomeScreen />
      <ServicesScreen />
      <BarbersScreen />
      <FloatingActionButton />
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavbarComponent.vue';
import HomeScreen from './HomeScreen.vue';
import FooterComponent from '../components/FooterComponent.vue';
import introAnimationStore from '@/stores/intro-animation';
import FloatingActionButton from '@/components/FloatingActionButton.vue';
import ServicesScreen from "@/screens/ServicesScreen.vue";
import BarbersScreen from "@/screens/BarbersScreen.vue";

const store = introAnimationStore();
</script>

<style scoped>
.layout {
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
}
</style>
