<template>
    <div class="slider-container">
        <swiper
        :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }"
        :loop="true"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="mySwiper2"
        >
        <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-5-1-300x227.png" /></swiper-slide>
        <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-6-1-300x225.png" /></swiper-slide>
        <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-1-6-300x237.jpg" /></swiper-slide>
        <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-2-4-300x225.jpg" /></swiper-slide>
        <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-3-2-300x225.png" /></swiper-slide>
        <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-4-2-300x234.jpg" /></swiper-slide>
        </swiper>

        <swiper
            @swiper="setThumbsSwiper"
            :loop="true"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"
            >
            <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-5-1-300x227.png" /></swiper-slide>
        <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-6-1-300x225.png" /></swiper-slide>
        <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-1-6-300x237.jpg" /></swiper-slide>
        <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-2-4-300x225.jpg" /></swiper-slide>
        <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-3-2-300x225.png" /></swiper-slide>
        <swiper-slide>
            <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-4-2-300x234.jpg" /></swiper-slide>
        </swiper>
    </div>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';
  
  import "swiper/css/free-mode"
  import "swiper/css/navigation"
  import "swiper/css/thumbs"
  
  import './style.css';
  
  
  // import required modules
  import {FreeMode,Navigation,Thumbs} from 'swiper';
  
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      let thumbsSwiper = null;
  
      const setThumbsSwiper = (swiper) => {
        thumbsSwiper = swiper;
      }
  
      return {
  
        modules: [FreeMode,Navigation,Thumbs],
      };
    }
  }
  </script>

  <style lang="less" scoped>
    .slider-container {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        
    }
  </style>