<template>
  <div class="min-h-screen p-4 flex flex-col items-center">
    <SectionDivider title="Our Customer's Opinion"/>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-row-auto gap-8 p-2">
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
      <ReviewCard description="Excelente" date="01/01/2025" name="Luis Bello" :rate=5 />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionDivider from '@/components/SectionDivider.vue'
import ReviewCard from "@/components/ReviewCard.vue";
</script>