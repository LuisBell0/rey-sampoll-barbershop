<template>
  <nav class="navbar">
    <div class="navbar-container">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <ul :class="['nav-links', { 'active': isOpen }]">
        <li><a href="" class="nav-button">Home</a></li>
        <li><a href="" class="nav-button">About</a></li>
        <li>
          <img src="/src/assets/ReySampollLogoInvertido-nobg.png" alt="barbsershop-logo">
        </li>
        <li><a href="" class="nav-button">Services</a></li>
        <li><a href="" class="nav-button">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
.navbar {
  background-color: transparent;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

img {
  width: 120px;
  height: 120px;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

.menu-toggle .bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 4px 0;
  transition: 0.3s;
}

.nav-links {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
}

.nav-links li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s;
  font-style: italic;
  font-weight: bolder;
}

.nav-button {
  display: inline-block;
}

.nav-button:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333;
    flex-direction: column;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-out;
  }

  .nav-links.active {
    max-height: 200px; /* adjust as needed */
    transition: max-height 0.5s ease-in;
  }

  .nav-links li {
    margin: 1rem 0;
    text-align: center;
  }
}
</style>
