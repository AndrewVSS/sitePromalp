
<template>
  <div class="main-img">
    <header>
      <div class="logo">
        <img class="logo__img" src="http://promalpufa.ru/wp-content/themes/promalp/img/logo.png">
        <p class="logo__title"> Промышленные альпинисты из Уфы</p>
        <div class="logo__phone">
          <img class="phone__icon" src="./components/img/phonelink-ring.png">
          <p class="phone__text"> +7(937) 316-16-28 <br> promalpufa@mail.ru </p>
        </div>
      </div>
    </header>
    <section>

      <div class="main-block">
        <p class="main-block__name">PromAlpUfa</p>
      </div>
      <div class="main-text">
        <p class="main-text__text">Услуги промышленных альпинистов <br> с опытом работы более 7 лет</p>
      </div>

    </section>
  </div>

</template>


<style lang="less" scoped>
.logo {
  margin-left: 300px;
  display: flex;
  align-items: center;
  color: #fff;
}

.logo__img {
  height: 60px;
}

.logo__phone {
  color: #fff;
  margin-left: auto;
  margin-right: 300px;
  display: flex;
}

.phone__icon {
  height: 20px;
  margin-top: 15px;
}

.main-img {
  height: 800px;
  background-image: url(http://promalpufa.ru/wp-content/themes/promalp/img/header-bg.webp);
  background-repeat: no-repeat;
  background-size: cover;
}

.main-block {
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  margin: 150px 850px 0px 850px;
  border: 1px solid #fff;
  border-bottom: none;
}

.main-block__name {
  text-transform: uppercase;
  font-size: 53px;
  padding: 30px;
  padding-bottom: 40px;
  margin-top: 0;
  margin-bottom: 0;
}

.main-text {
  color: #fff;
}

.main-text__text {
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 10px;
}
</style>


