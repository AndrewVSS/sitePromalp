<script >
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
    props: {
      imgs: {
        type: Array
      }
    },
    setup() {
      let thumbsSwiper = null;
  
      const setThumbsSwiper = (swiper) => {
        thumbsSwiper = swiper;
      }
      
      return {
  
        modules: [FreeMode,Navigation,Thumbs]
      };
    }
}
  
</script>

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

      <swiper-slide v-for="image in imgs" :key="image.id">
          <img :src="`http://promalpufa.ru/wp-content/uploads/2019/11${image.imagePath}`" style="height: 300px"/>
      </swiper-slide>
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
        <swiper-slide v-for="image in imgs" :key="image.id">
          <img :src="`http://promalpufa.ru/wp-content/uploads/2019/11${image.imagePath}`" />
        </swiper-slide>
      </swiper>
  </div>
</template>

<style lang="less" scoped>
    .slider-container {
        max-width: 400px;
        width:100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        background-color: #bbb;
        
    }
  </style>


