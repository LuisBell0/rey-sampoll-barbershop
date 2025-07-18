<template>
  <section>
    <div class="dark-wood-texture"></div>
    <div class="container">
      <div class="layout-container">
        <div class="div1">
          <a href="" class="nav-button btn-primary">Contact</a>
          <a href="" class="nav-button btn-primary">Services</a>
          <a href="" class="nav-button btn-primary">Pricing</a>
          <div class="language-label nav-button btn-primary" @click="toggleDropdown" tabindex="0">
            Language <span class="arrow" :class="{ open: dropdownOpen }"></span>
          </div>
          <ul v-if="dropdownOpen" class="language-dropdown" @click="closeDropdown">
            <li @click="select('Spanish')">Spanish</li>
            <li @click="select('English')">English</li>
          </ul>
        </div>
        <div class="div2">
          <div class="announcement-container">
            <div class="text-container">
              <h1 class="title">Premium Cuts!</h1>
              <h3 class="subtitle">Hair Experience Like No Other</h3>
            </div>
            <button class="button-book">
              Book Your Appointment
            </button>
          </div>
        </div>
        <div class="div3">
          <div class="logo-container">
            <div class="flip-inner animated-container" ref="flipInner">
              <!-- front face -->
              <div class="flip-face flip-front">
                <img src="/src/assets/ReySampoll-Logo.png"
                     alt="logo front"
                     class="face-img"
                     draggable="false" />
              </div>
              <!-- back face -->
              <div class="flip-face flip-back">
                <img src="/src/assets/ReySampoll-Logo.png"
                     alt="logo back"
                     class="hero-img"
                     draggable="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="div4">
          <div class="book-container">
            <div :class="{ 'fade-in': store.loading == false }" class="booking-animation">
              <div class="address-container">
                <map-pin-icon style="width: 20; height: 20;" />
                <span>1575 Pine Ridge Rd, Naples, FL, 34109</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline'
import { onMounted, ref } from 'vue';
import gsap from "gsap";
import introAnimationStore from '@/stores/intro-animation'

const flipInner = ref<HTMLElement>();
const store = introAnimationStore();

onMounted(() => {
  const tl = gsap.timeline();

  // 1. Scale up front face with fade-in
  tl.fromTo(".animated-container",
    { scale: 0.1, opacity: 0.5, transformOrigin: "50% 50%" },
    { scale: 1.0, opacity: 1, duration: 1.2, ease: "power1.out" }
  )
  // 2. Shine effect (move gradient)
  .to(".animated-container", {
    backgroundPosition: "100% 0%", 
    duration: 0.5, ease: "none", 
    yoyo: true, repeat: 1,
  }, "-=0.8")
  // 3. Flip coin to back face
  .to(flipInner.value, {
    rotationY: 180,
    duration: 1.5,
    ease: "none",
    onComplete: () => {
      store.setLoading(false);
    },
  })
});
</script>

<style scoped>

.layout-container {
  height: 100dvh;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
  padding: 0 1rem;
}

.div1{
  grid-column: span 4 / span 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 1;
}

.div2 {
  grid-column: span 4 / span 4;
  grid-row: span 3 / span 3;
  grid-column-start: 1;
  grid-row-start: 2;
}

.div3 {
  grid-column: span 4 / span 4;
  grid-row: span 4 / span 4;
  grid-column-start: 5;
  grid-row-start: 1;
}

.div4 {
  grid-column: span 8 / span 8;
  grid-row-start: 5;
}
.nav-button {
  font-size: 1.4em;
}
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin-top: 2rem;
}

.announcement-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 3.5em;
  color: var(--text-primary);
}

.subtitle {
  color: var(--text-primary);
}

.flip-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-inner {
  position: relative;
  transform-style: preserve-3d;
}

.flip-back {
  transform: rotateY(180deg);
}

.face-img,
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.hero-img,
.animated-container {
  width: 500px;
  height: 500px;
  border-radius: 50%;
}

.hero-img {
  background-color: gray;
  box-shadow: 12px 12px 10px 12px rgba(0, 0, 0, 0.3);
}

.book-container {
  grid-column: 1 / -1;
}

.booking-animation {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
}

.button-book {
  background-color: var(--accent-main);
  color: var(--surface-light);
  padding: 1.2rem 2.2rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1.2em;
  font-style: italic;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.button-book:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.address-container {
  display: flex;
  align-self: center;
  color: var(--text-secondary);
}

@media (max-width: 1200px) {
  .hero-img,
  .animated-container {
    width: 450px;
    height: 450px;
  }
}

@media (max-width: 1000px) {
  .hero-img,
  .animated-container {
    width: 400px;
    height: 400px;
  }
}

@media (max-width: 768px) {
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 420px) {
  .hero-img,
  .animated-container {
    width: 300px;
    height: 300px;
  }
}
</style>
