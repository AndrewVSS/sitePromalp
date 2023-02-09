<script>
    import TeamSlider from '/src/modules/slider/components/teamslider/TeamSlider.vue'

    export default {
  components: {
    TeamSlider
  },
  setup() {   
},
}
</script>
<template>
    <div class="container">
        <div class="container__titul">
            <p><a name="Services"></a></p>
            <h1>Услуги</h1>
        </div>
        <div class="container__service">
            <div class="services">
                <font-awesome-icon class="ico" icon="fa-solid fa-brush" />
                <p>Фасадные <br> работы</p>
            </div>
            <div class="services">
                <font-awesome-icon class="ico" icon="fa-solid fa-table" />
                <p>Клининговые <br> работы</p>
            </div>
            <div class="services">
                <font-awesome-icon class="ico" icon="fa-solid fa-chain" />
                <p>Монтажные <br> работы</p>
            </div>
            <div class="services">
                <font-awesome-icon class="ico" icon="fa-solid fa-snowflake" />
                <p>Уборка снега <br> и наледи</p>
            </div>
            <div class="services">
                <font-awesome-icon class="ico" icon="fa-solid fa-tree" />
                <p>Кронирование <br> деревьев</p>
            </div>
            <div class="services">
                <font-awesome-icon class="ico" icon="fa-solid fa-tint" />
                <p>Герметизация <br> швов</p>
            </div>
            <div class="services">
                <font-awesome-icon class="ico" icon="fa-solid fa-shield" />
                <p>Защита от <br> коррозии</p>
            </div>
            <div class="services">
                <font-awesome-icon class="ico" icon="fa-solid fa-cubes" />
                <p>Нестандартные <br> задачи</p>
            </div>
            <div class="text-guarantees">
                <p class="text-guarantees__title">За прошедшие 7 лет мы выполнили более</p>
                <p class="text-guarantees__number">270</p>
                <p class="text-guarantees__text">заказов</p>
            </div>
            <div class="privilege">
                <div class="privilege__title">
                    <font-awesome-icon class="ico" icon="fa-solid fa-clock" />
                    <h2>Гарантия сроков</h2>
                    <p>За каждый день <br> просрочки мы <br> выплачиваем деньги</p>
                </div>
                <div class="privilege__title">
                    <font-awesome-icon class="ico" icon="fa-solid fa-user" />
                    <h2>Экспресс-расcчет</h2>
                    <p>Выезд на осмотр <br> объекта в течении <br> 24 часов</p>
                </div>
                <div class="privilege__title">
                    <font-awesome-icon class="ico" icon="fa-solid fa-money-bill" />
                    <h2>Материальная ответственность</h2>
                    <p>Любой ущерб мы <br> возмещаем в полном <br> объеме</p>
                </div>
                <div class="privilege__title">
                    <font-awesome-icon class="ico" icon="fa-solid fa-check-circle" />
                    <h2>3 года гарантии</h2>
                    <p>на все наши работы</p>
                </div>
        
                
            </div>
        </div>
        <div class="our-team">
            <h2>НАША КОМАНДА</h2>
        </div>
        <div>
            <TeamSlider/>
        </div>
    </div>
</template>

<style lang="less" scoped>

p {
    margin: 5;
    padding: 0;
    text-align: center;
}
h2{
    text-align: center;
}
.ico {
     width: 50px;
     height: 50px;
    }
    .container{
        background-color: #fff;
        display: flex;
        flex-direction: column;
        max-width: 1800px;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        &__titul{
            text-transform: uppercase;
        }
        &__service{
            display: flex;
            justify-content: space-between;
            max-width: 1800px;
            width: 100%;
            margin: auto;
            flex-flow: row wrap;
            align-items: center;
        }
            
             .services {
                max-width: 450px;
                width: 100%;
                margin: auto;
                text-align: center;
             }
    .text-guarantees {
        display: flex;
        flex-direction: column;
        max-width: 1800px;
        width: 100%;
        margin: auto; 
        align-items: center;
        font-family: Raleway-Light;
        &__title {
            font-size: 25px;
            margin-top:20px;
            margin-bottom: 0;
            
        }       
        &__number {
            display: flex;
            font-size: 25px;
            font-style: bold;
            margin: 0;
            max-width: 1800px;
            width: 100%;
            justify-content:space-between;
            align-items: center;
        

            &::before,
            &::after {
            content: '';
            width: 750px;
            height: 1px;
            background-color: rgb(0, 0, 0)
            }
            
        }
        
            &__text {
            font-weight: normal;
            font-size: 25px;
            margin:0 0 15px 0
        } 
    
    }
    .privilege {
        display: flex;
        max-width: 1800px;
        width: 100%;
        margin: auto;
        justify-content: space-between;

        &__title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:first baseline;
        }  
    }
    .our-team {
        display: flex;
        max-width: 1800px;
        width: 100%;
        margin: auto;
        justify-content: space-between;
        align-items: center;

            &::before,
            &::after {
            content: '';
            width: 750px;
            height: 1px;
            background-color: rgb(0, 0, 0)
        }
    }
}
</style>