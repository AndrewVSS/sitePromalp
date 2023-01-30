<script>
import MainHeader from './components/sections/MainHeader.vue'
import UnionBlock from './components/sections/UnionBlock.vue'
import SecondBlock from './components/sections/SecondBlock.vue'
import SwiperSlider from './components/sections/SwiperSlider.vue'
export default {
  components: {
    MainHeader,
    UnionBlock,
    SecondBlock,
    SwiperSlider
  },
  setup() {
    
  },
}
</script>
<template>
  <div id="main-app">
    <div class="main-img">
      <MainHeader/>
      <UnionBlock/>
    </div>   
    <SecondBlock/>
    <SwiperSlider/>
  </div>
</template>

    



<style lang="less" scoped>
@header-height: 100px;

p {
  margin: 0;
}


.main-img {
  height: 600px;
  background-image: url(http://promalpufa.ru/wp-content/themes/promalp/img/header-bg.webp);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
}
</style>