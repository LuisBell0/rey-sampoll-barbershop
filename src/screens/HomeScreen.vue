<template>
  <section>
    <div class="main-container">
      <div class="items-container">
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
        <div class="book-container">
          <div :class="{'fade-in' : store.loading == false}" class="booking-animation">
            <button class="button-book">
              Book Your Apointment
            </button>
            <div class="address-container">
              <map-pin-icon style="width: 20; height: 20;"/>
              <span>1575 Pine Ridge Rd, Naples, FL, 34109</span>
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

.flip-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.animated-container{
  background: linear-gradient(
    90deg,
    rgba(97,97,98,1),
    rgba(255,255,255,0.9),
    rgba(97,97,98,1)
  );
  background-size: 200% 100%;
}

.flip-inner {
  position: relative;
  transform-style: preserve-3d;
}

.flip-back {
  transform: rotateY(180deg);
}

.face-img, .hero-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.hero-img, .animated-container {
  width: 400px;
  height: 400px;
  border-radius: 50%;
}

.hero-img {
  display: block;
  background-color: #6e3920;
  background-image: url('../assets/wood-pattern.png');
  box-shadow: 12px 12px 10px 12px rgba(0, 0, 0, 0.3);
}

.wood-icon {
  width: 32px;
  height: 32px;
  background-image: url('../assets/wood-pattern.png');
  background-color: #6e3920;
  mask: url('../assets/instagram.svg') no-repeat center;
  mask-size: contain;
  -webkit-mask: url('../assets/instagram.svg') no-repeat center;
  -webkit-mask-size: contain;
}

.book-container {
  margin: 2rem 0 0 0;
}

.booking-animation {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
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
  .hero-img, .animated-container {
    width: 350px;
    height: 350px;
  }
  .hero-img {
    box-shadow: 10px 10px 9px 10px rgba(0, 0, 0, 0.3);
  }
}

@media (max-width: 820px) {

  
  .hero-img {
    box-shadow: 9px 9px 8px 9px rgba(0, 0, 0, 0.3);
  }
  .button-book {
    padding: 0.8rem 1.8rem;
    font-size: 1em;
    box-shadow: 9px 8px 6px 2px rgba(0, 0, 0, 0.3);
  }
}

@media (max-width: 420px) {
  .hero-img, .animated-container {
    width: 300px;
    height: 300px;
  }

  .hero-img {
    box-shadow: 7px 7px 6px 7px rgba(0, 0, 0, 0.3);
  }

  .button-book {
    font-size: 0.8em; 
    box-shadow: 8px 7px 6px 2px rgba(0, 0, 0, 0.3);
  }
}
</style>
