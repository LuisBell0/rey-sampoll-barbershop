<template>
  <section class="main-container">
    <div class="items-container">
      <img src="/src/assets/ReySampoll-Logo.png" alt="barbershop-backgorund" class="hero-img">
      <button class="button-book">
        Book Your Apointment
      </button>
      <span>1575 Pine Ridge Rd, Naples, FL, 34109</span>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main-container {
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/src/assets/scissors-combs-copy-space.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.items-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.hero-img {
  width: 400px;
  height: 400px;
}

.button-book {
  background-color: #A0522D;
  background-image: url('https://www.transparenttextures.com/patterns/wood-pattern.png');
  background-size: cover;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  font-style: italic;
}

.button-book:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
