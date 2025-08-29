<template>
  <div class="layout">
    <header>
      <NavBar />
    </header>
    <main>
      <HomeScreen id="hero" />
      <AsyncServicesScreen id="services" />
      <AsyncBarbersScreen id="barbers"/>
      <AsyncReviewsScreen id="reviews"/>
      <FloatingActionButton />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import NavBar from '../components/NavbarComponent.vue';
import HomeScreen from './HomeScreen.vue';
import FooterComponent from '../components/FooterComponent.vue';
import FloatingActionButton from '@/components/FloatingActionButton.vue';

const AsyncServicesScreen = defineAsyncComponent(() => import('@/screens/ServicesScreen.vue'));
const AsyncBarbersScreen = defineAsyncComponent(() => import('@/screens/BarbersScreen.vue'));
const AsyncReviewsScreen = defineAsyncComponent(() => import('@/screens/ReviewsScreen.vue'));

</script>

<style scoped>
.layout {
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
}
</style>
