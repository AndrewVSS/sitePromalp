<script>
import MiniSlider from "./components/MiniSlider.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
import "swiper/css";
  
import "swiper/css/navigation";
  

  
  // import required modules
import { Navigation } from "swiper"

export default {
  components: {
    MiniSlider,
    Swiper,
    SwiperSlide,

  },
  setup() {
      return {
        modules: [Navigation],
      };
    },
    data: function () {
      return {
        slides: [
          {
            id: 1,
            title: 'Отремонтированный фасад Дома Правительства',
            description: 'Служащих администрации практически не беспокоила наша деятельность',
            steps: [
              {
                id: 1,
                text: 'Помыто, загрунтовано и покрашено — 13800 м2 фасада'
              },
              {
                id: 2,
                text: 'Восстановлено 500 м2 фасадной плиты'
              },
              {
                id: 3,
                text: 'Загерметизированы 210 пог.метров  температурных швов и установлен, придуманный нами, ходящий металлический короб'
              },
              {
                id: 4,
                text: 'Ежедневно после окончания работ осуществляли уборку территории за собой.'
              },
              {
                id: 5,
                text: 'Помыто, загрунтовано и покрашено — 13800 м2 фасада'
              },
            ],
            imgs: [
              { id: 1, imagePath: '/image-5-1-300x227.png' },
              { id: 2, imagePath: '/image-6-1-300x225.png' },
              { id: 3, imagePath: '/image-1-6-300x237.jpg' },
              { id: 4, imagePath: '/image-2-4-300x225.jpg'},
              { id: 5, imagePath: '/image-3-2-300x225.png' },
              { id: 6, imagePath: '/image-4-2-300x234.jpg' },
            ]
          },
          {
            id: 2,
            title: 'Строительно-монтажные работы на высоте',
            description: '',
            steps: [
              {
                id: 1,
                text: 'Демонтировали и обшили алюминиевыми листами башни Ново-Стерлитамакской ТЭЦ объемом 1100 метров за 56 рабочих дней'
              },
              
            ],
            imgs: [
              { id: 1, imagePath: '/image-4-1-300x225.png' },
              { id: 2, imagePath: '/image-1-5-300x225.jpg' },
              { id: 3, imagePath: '/image-2-3-300x225.jpg' },
              { id: 4, imagePath: '/image-3-1-300x225.jpg'},
              
            ]
          },
          {
            id: 3,
            title: 'Очищаем крыши от снега и наледи',
            description: '',
            steps: [
              {
                id: 1,
                text: 'Объем: 2500 м2'
              },
              {
                id: 2,
                text: 'Срок: 8 часов'
              }
            ],
        imgs: [
          { id: 1, imagePath: '/image-1-4-300x199.jpg' },
          { id: 2, imagePath: '/image-2-2-300x169.jpg' },
        ]
      },
      {
            id: 4,
            title: 'Утепляем стены квартир в 3 этапа',
            description: '',
            steps: [
              {
                id: 1,
                text: 'Пенопласт толщиной 10 см скрепили клеевой основой между собой и установили на стену дюбель-гвоздем'
              },
              {
                id: 2,
                text: 'Поверх утеплителя нанесли слой армирующий и штукатурного клея. После высыхания загрунтовали поверхность'
              },
              {
                id: 3,
                text: 'Далее конструкцию покрасили в цвет фасада. Поверх утепления и подоконников установили металлические отливы'
              },
              
              
            ],
            imgs: [
              { id: 1, imagePath: '/image-1-3-300x225.jpg' },
              { id: 2, imagePath: '/image-2-1-300x225.jpg' },
              { id: 3, imagePath: '/image-3-300x225.jpg' },
              { id: 4, imagePath: '/image-4-1-300x225.jpg'},
              { id: 5, imagePath: '/image-5-300x225.jpg'},
              
            ]
          },
          {
            id: 5,
            title: 'Заменили банер на стадионе «Уфа-Арена»',
            description: '',
            steps: [
              {
                id: 1,
                text: 'Осуществили замену перфорированной самоклейки'
              },
              {
                id: 2,
                text: 'Объем: 250 м2'
              },
              {
                id: 3,
                text: 'Сроки выполнения: 24 часа'
              },
              
              
            ],
            imgs: [
              { id: 1, imagePath: '/image-1-2-300x215.jpg' },
              { id: 2, imagePath: '/image-2-300x199.png' },
              { id: 3, imagePath: '/image-3-1-300x201.png' },
              { id: 4, imagePath: '/image-4.png'},
              
            ]
          },
    ]
    }
  }}

    

 
  
  
    
</script>

<template>
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide class="swiper-slide" v-for="work in slides" :key="work.id">
        <p>{{ work.title }}</p>
        <div class="swiper">     
                  <div class="swiper__raw">              
                      <MiniSlider :imgs="work.imgs"/>
                      <div class="swiper__list">
                          <ol >
                            <li v-for="step in work.steps" :key="step.id">{{ step.text }}</li>                                
                          </ol>
                          <p>{{ work.description }}</p>
                      </div>
                  </div>
                 
        </div>  
      </swiper-slide>
     
   
    </swiper>
  </template>

  <style lang="less" scoped>
li {
    text-align: left; 
}
p {
  text-align: center;
}
.mySwiper {
  background-color: rgb(244, 244, 244);
}
.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1800px;
  width: 100%;
  background-color: #dddddd;
  justify-content: space-between;
  font-family:'Lucida Sans Unicode'

}
.swiper {
    
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
    display:flex;
    height: 450px;
    
    max-width: 1800px;
    width: 100%;
    max-height: 400;
    color: #424242;
    justify-content: center;
    background-color: #dddddd;
    flex-direction: column;

    &__raw {
        display: flex;
        max-width: 1800px;
        width:100%;
        max-height: 500px;
        justify-content: space-around;  
        font-size: 17px;
        background-color: #dddddd;
          
    }

    &__list {
    width: 650px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    ol {
      padding-inline-start: 20px;
    }
    
    
    
}
}


  </style>