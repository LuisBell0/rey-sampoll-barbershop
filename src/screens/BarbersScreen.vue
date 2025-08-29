<template>
  <div class="min-h-screen p-8 flex flex-col items-center bg-dots">
    <SectionDivider :title="t('message.meetOurBarbers')" />

    <div class="flex flex-col justify-center gap-4 lg:gap-20 md:flex-row items-center p-2 md:w-full">
      <BarberCard name="Barber" :image="image" />
    </div>

    <div class="w-[90%] md:w-[75%] mt-8 text-xl md:text-2xl color-tertiary text-center italic">
      <h3>{{ t('barbers.description') }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import BarberCard from "@/components/BarberCard.vue"
import SectionDivider from "@/components/SectionDivider.vue"
import image from "@/assets/Luis-Picture-Blue-Shirt-nobg.webp"
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style>
.bg-dots {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 8px 8px;
  color: var(--color-border);
}
</style>
