<script setup>
defineProps({
  links: {
    required: true,
    type: Object
  }
})
</script>
<template>
  <ul class=" flex flex-col gap-4 pt-5">
    <li v-for="(link, name) in links" :key="name">
      <nuxt-link :to="link" class=" text-white">{{ name }}</nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>