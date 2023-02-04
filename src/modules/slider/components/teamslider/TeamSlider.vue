<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
//   props: {
//     imgs: {
//       type: Array
//     }
//   },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
  data: function () {
    return {
      imgs: [
          { id: 1, imagePath: '/image-5-2-300x300.png' },
          { id: 2, imagePath: '/image-4-2-300x300.png' },
          { id: 3, imagePath: '/image-3-2-294x300.jpg' },
          { id: 4, imagePath: '/image-2-1-300x298.png'},
          { id: 5, imagePath: '/image-1-300x300.png' },
          ]
}}}
</script>
<template>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
    <!-- <swiper-slide> -->
        <!-- <img src="http://promalpufa.ru/wp-content/uploads/2019/11/image-3-2-294x300.jpg"></swiper-slide> -->
    
    <swiper-slide v-for="image in imgs" :key="image.id">
        <img :src="`http://promalpufa.ru/wp-content/uploads/2019/11${image.imagePath}`"/>
    </swiper-slide>
      
    </swiper>
  </template>

  