<template>
  <section>
    <div v-if="loading" class="loading-container">
      <img src="/src/assets/ReySampoll-Logo.png" alt="barbershop-backgorund" class="animated-image" draggable="false">
    </div>
    <div v-else class="main-container">
      <div class="items-container">
        <img src="/src/assets/ReySampoll-Logo.png" alt="barbershop-backgorund" class="hero-img" draggable="false">
        <div class="book-container">
          <button class="button-book">
            Book Your Apointment
          </button>
        </div>
        <div class="address-container">
          <map-pin-icon style="width: 20; height: 20;"/>
          <span>1575 Pine Ridge Rd, Naples, FL, 34109</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline'
import { onMounted, ref } from 'vue';
import gsap from "gsap";

const loading = ref(true);


onMounted( () => {
  gsap.fromTo(".animated-image", {
    ease: "ease-in",
    opacity: .5,
    scale: 0.1
  },
  {
    scale: 1.5,
    opacity: 1,
    duration: 2,
  })
  gsap.to(".animated-image", {
    '--mask-x': '100%',
    duration: 1.5,
    delay: 2,
    ease: 'ease-in-out',
    repeat: 1,
    yoyo: true       // optional: makes it go back and forth
  });
});

</script>

<style scoped>
.loading-container {
  display: flex;
  width: 100%;
  height: 100dvh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.animated-image {
  display: block;
  mask-image: linear-gradient(90deg, transparent 0%, black 50%, transparent 100%);
  mask-size: 200% 100%;
  mask-position: var(--mask-x, -100%) 0;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 50%, transparent 100%);
  -webkit-mask-size: 200% 100%;
  -webkit-mask-position: var(--mask-x, -100%) 0;
}

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
  gap: 1rem;
  margin-top: 2rem;
}

.hero-img, .animated-image {
  width: 400px;
  height: 400px;
  border-radius: 50%;
}

.hero-img {
  background-color: #6e3920;
  background-image: url('../assets/wood-pattern.png');
  border-radius: 50%;
  padding: 20px;
  box-shadow: 12px 12px 10px 12px rgba(0, 0, 0, 0.3);
}

.book-container {
  margin: 2rem 0 0 0;
}

.button-book {
  background-color: #6e3920;
  background-image: url('../assets/wood-pattern.png');
  background-size: cover;
  color: white;
  padding: 1.2rem 2.2rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2em;
  box-shadow: 10px 9px 6px 2px rgba(0, 0, 0, 0.3);
  font-style: italic;
}

.button-book:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.address-container {
  display: flex;
  align-items: center;
}

@media (max-width: 1200px) {
  .hero-img {
    width: 350px;
    height: 350px;
    box-shadow: 10px 10px 9px 10px rgba(0, 0, 0, 0.3);
  }
}

@media (max-width: 820px) {
  .hero-img {
    width: 300px;
    height: 300px;
    box-shadow: 9px 9px 8px 9px rgba(0, 0, 0, 0.3);
  }
  .button-book {
    padding: 0.8rem 1.8rem;
    font-size: 1em;
    box-shadow: 9px 8px 6px 2px rgba(0, 0, 0, 0.3);
  }
}

@media (max-width: 420px) {
  .hero-img {
    width: 230px;
    height: 230px;
    box-shadow: 7px 7px 6px 7px rgba(0, 0, 0, 0.3);
  }

  .button-book {
    padding: 0.6rem 1.6rem;
    font-size: 0.8em; 
    box-shadow: 8px 7px 6px 2px rgba(0, 0, 0, 0.3);
  }
}
</style>
