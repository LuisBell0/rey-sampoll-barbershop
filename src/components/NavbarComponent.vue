<template>
  <nav class="navbar">
    <div class="navbar-container">
      <ul class="nav-links">
        <li><a href="" class="nav-button">Contact</a></li>
        <li><a href="" class="nav-button">Services</a></li>
        <li>
          <img src="../assets/horse-face.png" alt="horse-face" draggable="false">
        </li>
        <li><a href="" class="nav-button">Pricing</a></li>
        <li class="language-item">
          <div class="language-label nav-button" @click="toggleDropdown" tabindex="0">
            Language <span class="arrow" :class="{ open: dropdownOpen }"></span>
          </div>
          <ul v-if="dropdownOpen" class="language-dropdown" @click="closeDropdown">
            <li @click="select('Spanish')">Spanish</li>
            <li @click="select('English')">English</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="menu-toggle">
      <button class="toggle-button" @click="toggleMenu">

      </button>
    </div>
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

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

img {
  width: 80px;
  height: 80px;
}

.menu-toggle {
  display: none;
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  margin: 0;
  gap: 7rem;
}

.nav-button {
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s;
  font-style: italic;
  font-weight: bolder;
}

.nav-button:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.language-item {
  position: relative;
}

.language-label {
  cursor: pointer;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bolder;
  display: flex;
  align-items: center;
  user-select: none;
}

.arrow {
  margin-left: 0.5rem;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(-135deg);
}

.language-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 0.5rem;
  list-style: none;
  padding: 0.5rem 0;
  z-index: 200;
}

.language-dropdown li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
}

.language-dropdown li:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .navbar-container {
    display: none;
  }

  .menu-toggle {
    display: flex;
    position: absolute;
    left: 50%;
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
    transition: 0.3s;
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

@media  (max-width: 1000px){
  .nav-links {
    gap: 5rem;
  }

}

@media  (max-width: 820px){
  .nav-links {
    gap: 3rem;
  }
}
</style>
