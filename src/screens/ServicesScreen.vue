<template>
  <div class="min-h-screen p-4 flex flex-col items-center">
    <SectionDivider title="Our Services"/>
    <div class="flex justify-center items-center p-2">
      <div class="grid grid-rows-auto grid-cols-1 gap-3
                  md:grid-cols-2 gap-3
                  xl:grid-cols-3 lg:gap-6">
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
import SectionDivider from '@/components/SectionDivider.vue';
import image from "@/assets/ReySampollLogoInvertido-nobg.png"
</script>
