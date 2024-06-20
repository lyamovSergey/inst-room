<script setup>
import LogoIcn from '@/assets/icons/header/logo.svg'
import InstagramIcn from '@/assets/icons/footer/instagram_icn.svg'
import FacebookIcn from '@/assets/icons/footer/facebook_icn.svg'
</script>
<template>
  <footer class="bg-soal w-full pt-10 pb-10">
    <div class=" container flex justify-around">
      <ul class=" flex flex-col gap-4 pt-5">
        <li>
          <nuxt-link to="/" class=" text-white">Footer link</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class=" text-white">Footer link</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class=" text-white">Footer link</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class=" text-white">Footer link</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class=" text-white">Footer link</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class=" text-white">Footer link</nuxt-link>
        </li>
      </ul>
      <ul class=" flex flex-col gap-4 pt-5">
        <li>
          <nuxt-link to="/" class=" text-white">О компании</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class=" text-white">Контакты</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class=" text-white">Новинки</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class=" text-white">Хиты сезона</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class=" text-white">Распродажи</nuxt-link>
        </li>
      </ul>
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