<script setup>
import LogoIcn from '@/assets/icons/header/logo.svg'
import Avatar from '@/assets/icons/header/avatar.svg'
import Bar from '@/assets/icons/header/bar-chart.svg'
import Heart from '@/assets/icons/header/heart.svg'
import Cart from '@/assets/icons/header/shopping-cart.svg'

let iconsClasses = 'relative after:content-[attr(num)] after:flex after:w-[22px] after:h-[22px] after:absolute after:bg-red after:-top-2 after:-right-2 after:rounded-full after:items-center after:justify-center after:text-white after:text-shape h-8 w-8'
let navItemsClasses = 'border-r border-soal flex items-center justify-center bg-dark-gray w-24 h-24 hover:bg-orange hover:border-orange cursor-pointer ease-out duration-300 '
</script>
<template>
  <header class="h-24 bg-soal w-full">
    <div class=" container flex items-center h-full justify-between gap-1">
      <nuxt-link to="/">
        <LogoIcn filled class=" w-[90px] h-14" :fontControlled="false" />
      </nuxt-link>
      <span class=" text-white font-raleway">Время работы: 10:00–20:00</span>
      <div class=" flex flex-col items-start gap-1">
        <span class=" text-white font-raleway text-text_choice font-semibold">+38(066)123-45-67</span>
        <button class="underline text-red font-medium text-text_mini hover:text-orange">Заказать звонок</button>
      </div>
      <nav>
        <ul class="flex">
          <li :class="navItemsClasses">
            <div num="1" :class="iconsClasses">
              <Heart :fontControlled="false" filled class=" text-white h-8 w-8 " />
            </div>
          </li>
          <li :class="navItemsClasses">
            <div num="2" :class="iconsClasses">
              <Bar :fontControlled="false" filled class=" text-white h-8 w-8" />
            </div>
          </li>
          <li :class="navItemsClasses">
            <Avatar :fontControlled="false" filled class=" text-white h-8 w-8" />
          </li>
          <li :class="navItemsClasses">
            <div num="3" :class="iconsClasses">
              <Cart :fontControlled="false" filled class=" text-white h-8 w-8" />
            </div>
          </li>
        </ul>
      </nav>
      <div class=" flex flex-col items-start gap-1">
        <span class=" text-white font-medium">Товаров на сумму</span>
        <span class=" text-white font-bold">2 000 $</span>
      </div>
    </div>
  </header>
  <the-main-menu />
</template>

<style lang="scss" scoped></style>