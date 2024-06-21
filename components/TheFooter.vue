<script setup>
import LogoIcn from '@/assets/icons/header/logo.svg'
import { PAGES_LINKS, NAV_ITEMS } from '~/constatnts';
import { filterObject } from '@/functions'
let nav_items = filterObject(NAV_ITEMS, ['О компании', 'Контакты', 'Новинки', 'Хиты сезона', 'Распродажи'])
</script>
<template>
  <footer class="bg-soal w-full pt-10 pb-10">
    <div class=" container flex justify-around">
      <footer-links :links="PAGES_LINKS" />
      <footer-links :links="nav_items" />
      <div class=" flex flex-col gap-6">
        <nuxt-link to="/">
          <LogoIcn filled class=" w-[90px] h-14" :fontControlled="false" />
        </nuxt-link>
        <div class=" flex flex-col gap-1">
          <a class=" text-white font-medium text-text_choice" href=" tel:+380661234567">+38(066)123-45-67</a>
          <a class=" text-white font-medium text-text_choice" href="tel:+380661234568">+38(066)123-45-68</a>
        </div>
        <social-links />
        <div class=" flex flex-col gap-2">
          <span class=" text-white text-text_mini">Соглашение пользователя</span>
          <span class=" text-white text-text_mini">«Copyright © Название 2024»</span>
        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped></style>