<template>
  <header>
    <nav class="navbar">
      <ul class="buttons">
        <li>
          <button class="navbar-button">
            <span>Services</span>
          </button>
        </li>
        <li>
          <button class="navbar-button">
            <span>About</span>
          </button>
        </li>
        <li>
          <button class="navbar-button">
            <img src="/src/assets/ReySampoll-Logo.png" alt="barbsershop-logo">
          </button>
        </li>
        <li>
          <button class="navbar-button">
            <span>Location</span>
          </button>
        </li>
        <li>
          <button class="navbar-button">
            <span>Book Now</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
}

.buttons {
  width: 100%;
  padding: 0;
}

img {
  width: 75px;
  height: 75px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
}

.navbar-button {
  font-size: 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-style: italic;
}
</style>