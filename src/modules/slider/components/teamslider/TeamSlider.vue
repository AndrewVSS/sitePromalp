<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
 

  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
  data: function () {
    return {
      slides: [
        {
            id: 1,
            name: "Пономарев Владислав",
            description: "Свыше 13 лет стажа",
            description2: "Более 100 сполнений сложных инженерных задач",
            description3: "",
        img: 
            { id: 1, imagePath: '/image-5-2-300x300.png' },
            
        },
        {
            id: 2,
            name: "Ештокин Дмитрий",
            description: "Более 5 лет в сфере высотных работ",
            description2: "Победитель многих соревнований по спортивному туризму",
            description3: "",
        img:
            { id: 1, imagePath: '/image-4-2-300x300.png' },
            
        },
        {
            id: 3,
            name: "Андреев Дмитрий",
            description: "Более 10 лет в сфере высотных работ",
            description2: "Самый харизматичный член в команде",
            description3: "",
        img: 
            { id: 1, imagePath: '/image-3-2-294x300.jpg' },
            
        },
        {
            id: 4,
            name: "Хафизов Финат",
            description: "13 лет в промышленном альпинизме",
            description2: 'Член сборной РБ по спортивному туризму',
            description3: "",
            img: { id: 1, imagePath: '/image-2-1-300x298.png'},
            
        },
        {
            id: 5,
            name: "Шафиков Ренат",
            description: "Директор 'Промальп-Уфа'",
            description2: "Лицензированный альпинист более 7 лет",
            description3: "Мастер спорта",
        img: 
            { id: 1, imagePath: '/image-1-300x300.png'},
            
        }
    ]
}}}
</script>
<template>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :loop="true"
      :slidesPerView="auto"
      :coverflowEffect="{
        rotate: 40,
        stretch: 0,
        depth: 80,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
    
      <swiper-slide v-for="worker in slides" :key="worker.id">
          <img :src="`http://promalpufa.ru/wp-content/uploads/2019/11${worker.img.imagePath}`" style ="height: 240px; width: 230px; "/>      
          <div class="swiper">
              <div class="swiper__column">
                  <h2>{{ worker.name }}</h2>
                  <p>{{ worker.description }}</p>
                  <p>{{ worker.description2 }}</p>
                  <p>{{ worker.description3 }}</p>
              
              </div>
          </div>
      </swiper-slide>     
    </swiper>
</template>

<style lang="less" scoped>

p {
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 5px;
}
img {
  margin-left: auto;
  margin-right: auto
}
.swiper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.mySwiper {
  display: flex;
  width: 350px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-left: auto;
  margin-right: auto
  
}

.swiper__column {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.swiper-slide {
  display: flex;
  width: 1800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}


  </style>

  