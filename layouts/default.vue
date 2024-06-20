<script setup>
// import { HeartIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

</script>
<template>
  <div class="flex flex-col min-h-screen">
    <the-header />
    <main class=" grow">
      <slot />
    </main>
    <the-footer />
  </div>
</template>

<style lang="scss" scoped></style>