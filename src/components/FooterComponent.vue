<template>
  <footer class="bg-gray-900 text-white px-4 py-10 sm:px-8 lg:px-12">
    <!-- Location + Map + Info -->
    <div class="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:text-center lg:text-start">
      <!-- Location + Hours + Contact -->
      <div class="lg:col-span-5 space-y-4">
        <!-- Address -->
        <div class="md:flex md:flex-col md:items-center lg:flex lg:flex-col lg:items-start">
          <h3 class="text-xl font-semibold mb-2">{{ t('footer.location') }}</h3>
          <p class="underline">1575 Pine Ridge Rd<br/>Naples, FL 34109<br/>{{ t('footer.addressHtml') }}</p>
        </div>

        <!-- Contact -->
        <h3 class="text-xl font-semibold mb-2">{{ t('footer.contact') }}</h3>
        <div class="md:flex md:flex-col md:items-center lg:flex lg:flex-col lg:items-start">
          <p class="flex gap-2" aria-label="phone">
            <PhoneIcon class="w-5 h-5" /> <span>(239) 537-0730</span>
          </p>
          <p class="flex gap-2" aria-label="email">
            <EnvelopeIcon class="w-5 h-5" /> <span>sampollbarber@gmail.com</span>
          </p>
        </div>

        <!-- Business Hours -->
        <div class="md:flex md:flex-col md:items-center lg:flex lg:flex-col lg:items-start">
          <h3 class="text-xl font-semibold mt-4 mb-2">{{ t('footer.hours') }}</h3>
          <div class="grid grid-cols-2 gap-y-1 text-sm md:text-lg lg:justify-between">
            <p>{{ t('footer.days.sunday') }}</p><p>{{ t('footer.closed') }}</p>
            <p>{{ t('footer.days.monday') }}</p><p>10:00am – 7:30pm</p>
            <p>{{ t('footer.days.tuesday') }}</p><p>{{ t('footer.closed') }}</p>
            <p>{{ t('footer.days.wednesday') }}</p><p>10:00am – 7:30pm</p>
            <p>{{ t('footer.days.thursday') }}</p><p>10:00am – 7:30pm</p>
            <p>{{ t('footer.days.friday') }}</p><p>10:00am – 7:30pm</p>
            <p>{{ t('footer.days.saturday') }}</p><p>9:00am – 6:00pm</p>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="lg:col-span-7">
        <iframe
          :title="t('footer.mapTitle')"
          class="w-full h-64 lg:h-full rounded-lg border-2 border-gray-700"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7159.004552461243!2d-81.78923892440562!3d26.212864589815347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1e73cbd19a99%3A0xeb634280987a1c8f!2s1575%20Pine%20Ridge%20Rd%2C%20Naples%2C%20FL%2034109!5e0!3m2!1ses!2sus!4v1754579634875!5m2!1ses!2sus"
        ></iframe>
      </div>
    </div>

    <!-- Developer & Credits -->
    <div class="mt-10 text-center lg:text-left lg:flex lg:justify-between lg:items-center">
      <!-- Developer Credit -->
      <div class="text-sm text-gray-400 mb-4 lg:mb-0">
        <p>
          {{ t('footer.websiteDevelopedBy') }}
          <a href="https://luisbello-portfolio.vercel.app/" target="_blank" class="underline hover:text-yellow-500">Luis Bello</a>
        </p>
      </div>

      <!-- Asset Credits -->
      <div class="text-sm text-gray-400">
        <p>{{ t('footer.assetsBy') }}</p>
        <ul class="list-disc list-inside">
          <li>
            {{ t('footer.scissorsImageBy') }}
            <a href="https://unsplash.com" target="_blank" class="underline hover:text-yellow-500">Yousef Samuil</a>
            {{ t('footer.on') }}
            <a href="https://unsplash.com" target="_blank" class="underline hover:text-yellow-500">Unsplash</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="text-center text-sm text-gray-400 border-t border-gray-700 pt-6 mt-6">
      {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/solid'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
