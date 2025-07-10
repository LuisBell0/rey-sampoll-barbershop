<template>
  <div class="main-container">
    <img src="/src/assets/ReySampoll-Logo.png" alt="Rey sampoll logo" draggable="false">
    <h1>
      <span class="title">BABERSUITE</span>
      <span class="subtitle">In Naples</span>
    </h1>
    <button class="button-book">
      Book Your Apointment
    </button>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 75%;
  height: 400px;
}

.button-book {
  background-color: #A0522D;
  background-image: url('https://www.transparenttextures.com/patterns/wood-pattern.png');
  background-size: cover;
  color: white;
  padding: 20px 30px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

h1 {
  margin-bottom: 0;
  font-size: 4rem;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.subtitle {
  font-size: 2rem;
}


.button-book:hover {
  transform: scale(1.1);
}
</style>
