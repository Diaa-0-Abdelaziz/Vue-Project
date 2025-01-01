<script setup>
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute } from 'vue-router';
const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
};
let navLinks = [
      {
        pathname:'/',
        navName:'Home'
      },
      {
        pathname:'/Projects',
        navName:'Projects'
      },
      {
        pathname:'/add_car',
        navName:'Add Car'
      },
    ]
    const isActiveLink = (routePath)=>{
        const route = useRoute();
        return route.path === routePath;
    }
</script>

<template>
    <nav  class='bg-[#ffffff00] py-5 relative '>
      <div class="justify-around flex container m-auto ">
        <div class='flex gap-2 items-center'> 
        <ul class="z-50 flex lg:flex-row flex-col gap-4 text-lg	font-normal	 lg:static lg:w-auto lg:bg-transparent absolute left-0 bg-white w-full ${toggleMenu ? 'h-80' : 'h-0'} lg:h-auto duration-500 overflow-hidden top-full lg:shadow-none shadow-md">
        
        <li v-for="(link, index) in navLinks" class=' flex items-center cursor-pointer' :key="index">
          <RouterLink :to="link.pathname" :class="[ isActiveLink(link.pathname) ? 'bg-gray-700' : '' ,'text-secondary font-bold hover:text-primary transition-all duration-200 px-2 py-1']">{{$t(link.navName)}}</RouterLink>
        </li>
    
        </ul>
      </div>
      </div>
    </nav>
    <div class=" flex gap-7 justify-center">
    <button @click="changeLanguage('en')" class=" bg-green-700 p-2 rounded-lg font-bold text-white">English</button>
    <button @click="changeLanguage('ar')" class=" bg-red-700 p-2 rounded-lg font-bold text-white">عربي</button>
  </div>
</template>