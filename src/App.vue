
<template>
  <div class="main-block">
    <header>
      <div class="logo">
        <img class="log" src="http://promalpufa.ru/wp-content/themes/promalp/img/logo.png">
        <p class="header-text"> Промышленные альпинисты из Уфы</p>
        <div class="header-phone">
          <img class="icon" src="./components/img/phonelink-ring.png">
          <p> +7(937) 316-16-28 <br> promalpufa@mail.ru </p>
        </div>
      </div>
    </header>
    <section>
      <div class="mainlogo">
        <p class="maintext">PromAlpUfa</p>
        <p class="text">Услуги промышленных альпинистов <br> с опытом работы более 7 лет</p>

      </div>

    </section>
  </div>

</template>


<style lang="less" scoped>
.logo {
  margin-left: 300px;
  display: flex;
  align-items: center;

}

.header-text {
  color: #fff;
}

.log {
  height: 60px;
}

.header-phone {
  color: #fff;
  margin-left: auto;
  margin-right: 300px;
  display: flex;

}

.icon {
  height: 20px;
  margin-top: 15px;
}

.main-block {
  height: 800px;
  background-image: url(http://promalpufa.ru/wp-content/themes/promalp/img/header-bg.webp);
  background-repeat: no-repeat;
  background-size: cover;
}

.mainlogo {
  color: #fff;
  text-transform: uppercase;
  font-family: Raleway-Thin;
  text-align: center;
  font-size: 53px;
  margin-top: 200px;

}

.text {
  margin-right: 20px;
  margin-left: 20px;
  font-family: Raleway-Light;
  text-align: center;
  font-size: 20px;
}

.maintext {
  border: 1px #fff solid;
  max-width: 100%;

}
</style>


