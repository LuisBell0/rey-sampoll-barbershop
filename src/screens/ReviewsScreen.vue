<template>
  <div class="min-h-screen p-8 flex flex-col items-center">
    <SectionDivider title="Our Customer's Opinion"/>
    <div class="grid grid-rows-auto grid-cols-1
                  md:grid-cols-2 gap-3
                  xl:grid-cols-3 lg:gap-6 items-start">
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente trabajo realizado por el barbero Excelente trabajo realizado por el barbero" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente trabajo realizado por el barbero Excelente trabajo realizado por el barbero" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente trabajo realizado por el barbero Excelente trabajo realizado por el barbero Excelente trabajo realizado por el barbero Excelente trabajo realizado por el barbero Excelente trabajo realizado por el barbero Excelente trabajo realizado por el barbero" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente trabajo realizado por el barbero Excelente trabajo realizado por el barbero Excelente trabajo realizado por el barbero Excelente trabajo realizado por el barbero" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente trabajo realizado por el barbero Excelente trabajo realizado por el barbero" date="01/01/2025" name="Luis Bello" :rate=5 />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionDivider from '@/components/SectionDivider.vue'
import ReviewCard from "@/components/ReviewCard.vue";
</script>