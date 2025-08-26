<template>
  <div class="min-h-screen p-8 flex flex-col items-center">
    <SectionDivider :title="t('message.ourCustomerOpinions')"/>
    <div class="grid grid-rows-auto grid-cols-1
                  md:grid-cols-2 gap-3
                  xl:grid-cols-3 lg:gap-6 xl:gap-12 items-start">
                  <ReviewCard description="Top tier service." date="08/09/2025" name="Jordan B." :rate=5 />
                  <ReviewCard description="Great job, would highly recommend him, he is very experienced.  Also had a great experience every time I go." date="04/29/2025" name="Caliber W." :rate=5 />
                  <ReviewCard description="Quick and nice." date="02/27/2025" name="Kevin C." :rate=5 />
                  <ReviewCard description="Rey is an excellent barber. He’ll never make you wait. Make your appointment and be there on time. Then enjoy your haircut. :)." date="12/12/2024" name="Omar R." :rate=5 />
                  <ReviewCard description="Best haircut I ever gotten here in Naples. Definitely will be going back." date="07/09/2024" name="Franklyn D." :rate=5 />
                  <ReviewCard description="I've been to Rey twice. Two of the best haircuts I've ever gotten.  He's become my go-to when here in Naples." date="03/28/2024" name="John F." :rate=5 />
                  <ReviewCard description="Pays attention to detail & always delivers a neat fade. Highly recommend him." date="03/27/2024" name="Dante Z." :rate=5 />
                  <ReviewCard description="Went in for a scissor fade and Sampoll did an amazing job! Super nice and really clean." date="02/26/2024" name="Jason M." :rate=5 />
                  <ReviewCard description="Sampoll is simply outstanding. His attention to detail and passion for his craft shine through in every haircut. He takes the time to understand exact." date="02/09/20254" name="Luis M." :rate=5 />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionDivider from '@/components/SectionDivider.vue'
import ReviewCard from "@/components/ReviewCard.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>