<template>
  <fieldset
    class="w-3xs md:w-xs bg-surface rounded-[5rem] shadow-lg border-x border-[var(--color-border)] px-4 pt-4 overflow-hidden"
  >
    <legend class="px-2 text-lg lg:text-2xl text-center text-white">
      {{ name }}
    </legend>

    <img
      :src="image"
      alt="Barber at work"
      class="w-full h-full object-cover"
      draggable="false"
    />
  </fieldset>
</template>


<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
})
</script>

<style>
img {
  mask-image: linear-gradient(
    black 80%,
    transparent
  );
}
</style>