<template>
    <div class="main-container">
        <div class="main-container__titul">
            <h1> Удобная схема работы </h1>
        </div>
        <div class="main-container__number">
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
        </div>
        <div class="main-container__scheme">
            <p>Закажите звонок, наши специалисты рассчитают стоимость и время выполнения работ, а так же подберут наиболее удобное для вас время</p>
            <p>После составления договора мы немедленно приступаем к работе. Будьте уверены, все будет выполненно качественно и в срок</p>
            <p>После окончание работ убираем за собой строительный мусор. Несем гарантийные обязательства и готовы устранить дефекты за свой счет </p>
        </div>
        <div class="main-container__application">
            <p>Оставьте заявку и получите точный расчет стоимости</p>
        </div>
        <div class="main-container__button">
            <button>Рассчитать</button>
        </div>
    </div>
</template>

<style lang="less" scoped>

button {
        color: #fff;
        border: 1px #fff solid;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 180px;
        background-color: rgba(rgb(80, 80, 80), 0.5);
}
    .main-container {
        background-color: black;
        color: #fff;
        font-family: Raleway-Light;
        font-size: 15px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content:center;
        &__titul {
            display: flex;
            justify-content: center;
            width: 100%;
        }
        &__number {
            display: flex;
            justify-content: space-around;
            max-width: 1800px;
            width: 100%;
            font-size: 30px;
            margin: auto;
        }
        &__scheme {
            display: flex;
            max-width: 1900px;
            width: 100%;
            font-size: 20px;
            margin: auto;
            justify-content: space-between;
        }
        &__application {
            display: flex;
            justify-content: center;
            margin: 15px 0 0 0;
            font-size: 20px;
        }
        &__button {
            display: flex;
            justify-content: center;
            margin: 15px 0 20px 0;
            
        }
        
    }
</style>