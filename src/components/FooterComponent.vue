<template>
  <footer class="bg-gray-900 text-white px-4 py-10 sm:px-8 lg:px-12">
    <!-- Logo + CTA -->

    <!-- Location + Map + Info -->
    <div class="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:text-center lg:text-start">
      <!-- Location + Hours + Contact -->
      <div class="lg:col-span-5 space-y-4">
        <!-- Address -->
        <div class="md:flex md:flex-col md:items-center lg:flex lg:flex-col lg:items-start">
          <h3 class="text-xl font-semibold mb-2">Location</h3>
          <p class="underline">1575 Pine Ridge Rd<br />Naples, FL 34109<br />United States</p>
        </div>

        <!-- Contact -->
         <h3 class="text-xl font-semibold mb-2">Contact</h3>
        <div class="md:flex md:flex-col md:items-center lg:flex lg:flex-col lg:items-start">
          <p class="flex gap-2"><phone-icon class="w-5 h-5"/> (239) 537-0730</p>
          <p class="flex gap-2"><envelope-icon class="w-5 h-5" /> sampollbarber@gmail.com</p>
        </div>

        <!-- Business Hours -->
        <div class="md:flex md:flex-col md:items-center lg:flex lg:flex-col lg:items-start">
          <h3 class="text-xl font-semibold mt-4 mb-2">Hours</h3>
          <div class="grid grid-cols-2 gap-y-1 text-sm md:text-lg lg:justify-between">
            <p>Sunday</p><p>Closed</p>
            <p>Monday</p><p>10:00am – 7:30pm</p>
            <p>Tuesday</p><p>Closed</p>
            <p>Wednesday</p><p>10:00am – 7:30pm</p>
            <p>Thursday</p><p>10:00am – 7:30pm</p>
            <p>Friday</p><p>10:00am – 7:30pm</p>
            <p>Saturday</p><p>9:00am – 6:00pm</p>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="lg:col-span-7">
        <iframe
          title="Barbershop Location"
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
        <p>Website developed by <a href="https://luisbello-portfolio.vercel.app/" target="_blank" class="underline hover:text-yellow-500">Luis Bello</a></p>
      </div>
      <!-- Asset Credits -->
      <div class="text-sm text-gray-400">
        <p>Assets by:</p>
        <ul class="list-disc list-inside">
          <li>Scissors Image by Yousef Samuil on <a href="https://unsplash.com" target="_blank" class="underline hover:text-yellow-500">Unsplash</a></li>
        </ul>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="text-center text-sm text-gray-400 border-t border-gray-700 pt-6 mt-6">
      © {{ new Date().getFullYear() }} Sampoll Barbersuite. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/solid';
import {PhoneIcon} from '@heroicons/vue/24/solid';
</script>
