<script>
import MiniSlider1 from './minislider/MiniSlider1.vue'
import MiniSlider2 from './minislider/MiniSlider2.vue'
import MiniSlider3 from './minislider/MiniSlider3.vue'
import MiniSlider4 from './minislider/MiniSlider4.vue'
import MiniSlider5 from './minislider/MiniSlider5.vue'

export default {
  components: {
    MiniSlider1,
    MiniSlider2,
    MiniSlider3,
    MiniSlider4,
    MiniSlider5,
    Swiper,
    SwiperSlide,

  },
  setup() {
      return {
        modules: [Navigation],
      };
    },
  };
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/navigation";
  
  import "/src/style.css";
  
  // import required modules
  import { Navigation } from "swiper";
  
  
    
</script>

<template>
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide>
       <div class="swiper1">
            <div class="swiper1__titul1">Отремонтировали фасад Дома Правительства</div>
                <div class="swiper1__list1">
                    <MiniSlider1/>
                    <div class="list1">
                        <ol>
                                <li>Помыто, загрунтовано и покрашено — 13800 м2 фасада</li>
                                <li>Восстановлено 2300 м2 откосов</li>
                                <li>Восстановлено 500 м2 фасадной плиты</li>
                                <li>Загерметизированы 210 пог.метров температурных швов и установлен, придуманный нами, ходящий металлический короб</li>
                                <li>Ежедневно после окончания работ осуществляли уборку территории за собой.</li>
                                <p>Служащих администрации практически не беспокоила наша деятельность</p>
                        </ol>
                    </div>
                </div>
        </div>
    </swiper-slide>
      <swiper-slide>
        <div class="swiper2">
            <div class="swiper2__titul2">Строительно-монтажные работы на высоте</div>
            <div class="swiper2__list2">
                    <MiniSlider2/>
                    <div class="list2">
                        <ol>
                                <li>Демонтировали и обшили алюминиевыми листами башни Ново- <br>Стерлитамакской ТЭЦ объемом 1100 метров за 56 рабочих дней</li>
                                
                        </ol>
                    </div>
            </div>
        </div>
      </swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
    </swiper>
  </template>

  <style lang="less" scoped>
li {
    text-align: left;
    
}
.swiper1, swiper2{
    display:flex;
    height: 400px;
    color: #656565;
    flex-direction: column;
    justify-content:space-around;
    
    &__titul1 {
        font-size: 20px;
        font-weight: bold;
        margin-top: 15px;
        justify-content: center;
    }

    &__list1 {
        display: flex;
        width: 1000px;
        justify-content: space-between;
            
    }
}
.list1, list2{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 540px;
    // margin: 0 auto;
}

  </style>