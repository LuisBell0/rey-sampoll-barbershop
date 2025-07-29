<template>
  <div class="min-h-screen px-4 py-8 flex flex-col">
    <div class="flex items-center justify-center gap-4 py-8">
      <hr class="w-1/4 border-t border-gray-300" />
      <span class="uppercase tracking-wider color-accent text-sm md:text-xl">Our Services</span>
      <hr class="w-1/4 border-t border-gray-300" />
    </div>
    <div class="flex justify-center items-center">
      <div class="grid grid-rows-auto grid-cols-1 gap-3
                  md:grid-rows-auto md:grid-cols-2 gap-3
                  xl:grid-rows-auto xl:grid-cols-3 lg:gap-6">
        <ServiceCard title="VIP Classic" description="Haircut + Beard + Hot Towel + Hair Wash + Eyebrow Grooming." price="60" :image="image"/>
        <ServiceCard title="Deluxe Signature" description="Haircut + Beard + Eyebrow Grooming." price="50" :image="image"/>
        <ServiceCard title="Regular Cut" description="Haircut + Fade + Eyebrow Grooming." price="40" :image="image"/>
        <ServiceCard title="Citizen Cut" description="Any type of haircut tailored to your style." price="30" :image="image"/>
        <ServiceCard title="Kids Cut(12 & Under)" description="Quick and comfortable haircut for children of age 12 and under." price="30" :image="image"/>
        <ServiceCard title="Beard Trim & Shave" description="Detail beard trimming." price="20" :image="image"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/ServiceCard.vue';
import image from "@/assets/ReySampollLogoInvertido-nobg.png"
</script>
