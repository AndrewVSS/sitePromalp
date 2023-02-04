<template>
    <div class="union-block">
      <div class="union-block__title">
        <p>PromAlpUfa</p>
        <div class="union-block__description">
          <p>Услуги промышленных альпинистов <br> с опытом работы более 7 лет</p>
        </div>
      </div>
      <div class="union-block__write-to-us">
        <p>Напишите нам и мы обсудим проект</p>
      </div>
      <div class="union-block__callback">
        <input type="tel" class="callback__number" placeholder="Введите телефон">
        <buttom class="callback__call">Позвонить мне</buttom>
      </div>
      <div class="union-block__description-list">
        <div class="list-individual">
          <img src="src/components/img/pencil_112448.png" height="30">
          <p>Индивидуальный подход <br> к каждому клиенту</p>
        </div>
        <div class="list-job">
          <img src="src/components/img/thumb-up.png" height="30">
          <p>Выполнение работ <br> любой сложности</p>
        </div>
        <div class="list-clean">
          <img src="src/components/img/dustbin.png" height="30">
          <p>Поддержание чистоты <br> и порядка</p>
        </div>
      </div>
    </div>
</template>

<style lang="less" scoped>
     .union-block {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
    justify-content: flex-end;
    height: 100%;
    box-sizing: border-box;

    &__title {

      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid;
      border-bottom: none;
      text-transform: uppercase;
      font-size: 53px;
      height: 120px;
      padding: 0 40px;
      max-width: 400px;
      width:100%;
      position: relative;



      &::before,
      &::after {
        content: '';
        width: 40px;
        height: 1px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        bottom: 0;
      }

      &::before {
        left: 0;
      }

      &::after {
        right: 0;
      }

    }

    &__description {
      font-size: 20px;
      display: flex;
      justify-content: center;
      text-align: center;
      position: absolute;
      bottom: -40px;
      text-transform: lowercase;
    }

    &__write-to-us {
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 482px;
      width: 100%;
      height: 100px;



      &::before,
      &::after {
        content: '';
        width: 50px;
        height: 1px;
        background-color: #fff;
      }
    }

    &__callback {
      display: flex;
      max-width: 435px;
      width:100%;
      height: 50px;
      align-items: center;
      justify-content: space-between;
      font-size: 15px;

      .callback__call {
        color: #fff;
        border: 1px #fff solid;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 180px;
        background-color: rgba(rgb(80, 80, 80), 0.5);
      }

      .callback__number {
        height: 40px;
        width: 180px;
        display: flex;
        text-align: center;
        border: 1px #fff solid;
        padding: 0;
      }
    }

    &__description-list {
      display: flex;
      max-width: 900px;
      width:100%;
      height: 150px;
      justify-content: space-around;
      align-items: center;
    }

    .list-individual {
      display: flex;
      align-items: center;
      width: 200px;
      justify-content: space-between;
      text-align: center;
    }

    .list-job {
      display: flex;
      align-items: center;
      width: 165px;
      justify-content: space-between;
      text-align: center;
    }

    .list-clean {
      display: flex;
      align-items: center;
      width: 190px;
      justify-content: space-between;
      text-align: center;
    }
  }

</style>