<script setup>
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from '@heroicons/vue/16/solid'
import { NAV_ITEMS } from '~/constatnts';
</script>
<template>
  <div class=" bg-black">
    <div class="container h-[88px] flex items-center justify-between">
      <button
        class=" bg-transparent border border-orange flex items-center gap-4 pt-[14px] pb-[14px] pl-4 pr-4 rounded-md">
        <Bars3BottomLeftIcon class=" text-white w-[24px] h-[18px]" />
        <span class=" text-white font-medium">Каталог товаров</span>
      </button>
      <nav>
        <ul class="flex gap-14">
          <li v-for="(link, name) in NAV_ITEMS" :key="name">
            <nuxt-link class=" text-white font-medium" :to="link">
              {{ name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <social-links />
      <label class=" flex pl-12 pr-4 relative border border-white items-center h-[52px] bg-white rounded-md gap-3">
        <MagnifyingGlassIcon class="text-smoky w-[24px] h-[24px] absolute left-4" />
        <input type="text" class=" outline-none" placeholder="Поиск по каталогу">
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>