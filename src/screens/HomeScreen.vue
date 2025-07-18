<template>
  <section>
    <div class="main-container">
      <div class="announcement-container">
        <div class="text-container">
          <h1 class="title">Premium Cuts!</h1>
          <h3 class="subtitle">Hair Experience Like No Other</h3>
        </div>
        <button class="button-book">
          Book Your Appointment
        </button>
      </div>
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
      <div class="book-container">
        <div :class="{ 'fade-in': store.loading == false }" class="booking-animation">
          <div class="address-container">
            <map-pin-icon style="width: 20; height: 20;" />
            <span>1575 Pine Ridge Rd, Naples, FL, 34109</span>
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
.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 4fr 0.5fr;
  height: 100dvh;
  overflow: hidden;
  background-color: var(--bg-wood);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
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
    width: 350px;
    height: 350px;
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

  .button-book {
    padding: 0.8rem 1.8rem;
    font-size: 1em;
  }
}
</style>
