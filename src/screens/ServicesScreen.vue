<template>
  <div class="min-h-screen p-8 flex flex-col items-center">
    <SectionDivider :title="t('message.ourServices')" />

    <div class="flex justify-center items-center p-2">
      <div
        class="grid grid-rows-auto grid-cols-1 md:grid-cols-2 gap-3 xl:grid-cols-3 lg:gap-6 xl:gap-12"
      >
        <ServiceCard
          :title="t('services.vipClassic.title')"
          :description="t('services.vipClassic.description')"
          price="60"
          :image="image"
        />

        <ServiceCard
          :title="t('services.deluxeSignature.title')"
          :description="t('services.deluxeSignature.description')"
          price="50"
          :image="image"
        />

        <ServiceCard
          :title="t('services.regularCut.title')"
          :description="t('services.regularCut.description')"
          price="40"
          :image="image"
        />

        <ServiceCard
          :title="t('services.citizenCut.title')"
          :description="t('services.citizenCut.description')"
          price="30"
          :image="image"
        />

        <ServiceCard
          :title="t('services.kidsCut.title')"
          :description="t('services.kidsCut.description')"
          price="30"
          :image="image"
        />

        <ServiceCard
          :title="t('services.beardTrim.title')"
          :description="t('services.beardTrim.description')"
          price="20"
          :image="image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/ServiceCard.vue'
import SectionDivider from '@/components/SectionDivider.vue'
import image from '@/assets/ReySampollLogoInvertido-nobg.webp'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
