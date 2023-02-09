
<template>
  <div class="slider-container">
      <swiper
      :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#ddds',
      }"
      :loop="true"
      :spaceBetween="5"
      :navigation="true"
      :thumbs="{ swiper: ThumbsSwiper }"
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
        :spaceBetween="5"
        :slidesPerView="4"
        :freeMode="true"
        :thumbs="{ swiper: ThumbsSwiper }"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="image in imgs" :key="image.id">
          <img :src="`http://promalpufa.ru/wp-content/uploads/2019/11${image.imagePath}`" style="height: 150px" />
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
    background-color: #DDDDDD;     
    }
  .mySwiper2 {
    height: 70%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    padding: 5px 0;
    width: 100%;
    opacity: 0.5;
    box-sizing: border-box;
  }
  .swiper-slide-thumb-active{
    opacity: 1;
    
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    
  }

  </style>

<script >
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

//Import Swiper styles
import 'swiper/css';

import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"




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


