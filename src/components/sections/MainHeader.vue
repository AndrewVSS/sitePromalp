<template>
  <div class="header-block">
    <div class="header-block__logo logo-block">
      <img class="logo-block__img" src="http://promalpufa.ru/wp-content/themes/promalp/img/logo.png">
      <p class="logo-block__title"> Промышленные альпинисты из Уфы</p>
    </div>
    <div class="header-block__contact contact-block">
      <div class="contact-block__phone">
        <img class="contact-block__icon" src="src/components/img/phonelink-ring.png">
        <p class="contact-block__text"> +7(937) 316-16-28 </p>
      </div>

      <div class="contact-block__email">
        promalpufa@mail.ru
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.header-block {
  display: flex;
  align-items: center;
  justify-content: space-around;
  //height: @header-height;
  max-width: 100%;

  &__contact {
    color: #fff;
    display: flex;
  }

  .contact-block {
    display: flex;
    align-items: center;
    flex-direction: column;

    &__phone {
      display: flex;
      align-items: center;
    }
  }

  .contact-block__icon {
    height: 20px;
  }


  .logo-block {
    display: flex;
    align-items: center;
    color: #fff;

    &__img {
      height: 60px;
    }
  }
}
</style>


