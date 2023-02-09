<template>
    <div class="main">
        <p><a name="Clients"></a></p>
        <div class="main__titul">
            
            <h2>КЛИЕНТЫ с 2012 года</h2>          
        </div>
        <div class="main__items">
            <img class="clients-img" src="http://promalpufa.ru/wp-content/themes/promalp/img/Clients/dist/group.png">
            <img class="clients-img" src="http://promalpufa.ru/wp-content/themes/promalp/img/Clients/dist/planet.png">
            <img class="clients-img" src="http://promalpufa.ru/wp-content/themes/promalp/img/Clients/dist/krono.png">
            <img class="clients-img" src="http://promalpufa.ru/wp-content/themes/promalp/img/Clients/dist/mega.png">
            <img class="clients-img" src="http://promalpufa.ru/wp-content/themes/promalp/img/Clients/dist/horse.png">
            <img class="clients-img" src="http://promalpufa.ru/wp-content/themes/promalp/img/Clients/dist/champ.png">
            <img class="clients-img" src="http://promalpufa.ru/wp-content/themes/promalp/img/Clients/dist/bash.png">
            <img class="clients-img" src="http://promalpufa.ru/wp-content/themes/promalp/img/Clients/dist/metro.png">
            <img class="clients-img" src="http://promalpufa.ru/wp-content/themes/promalp/img/Clients/dist/salavat.png">
        </div>
    </div>
</template>

<style lang="less" scoped>
    .main {
        max-width: 1800px;
        width: 100%;
        max-height: 600px;
        height: 100%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        flex-direction: column;
        &__titul {
            display: flex;
            align-items: center;
            max-width: 1800px;
            width: 100%;
            text-align: center;
            font-family: Raleway-Light;
            justify-content: space-between;
            text-transform: uppercase;
            font-weight: lighter;
            font-size: 15px;
            //position: relative;

            &::before,
            &::after {
                content: '';
                width: 1600px;
                height: 1px;
                background-color: rgb(0, 0, 0);
                
             }
            
        }
        &__items {
            display: flex;
            justify-content: space-around;
            align-items: center;
            justify-content: center;
            max-width: 1680px;
            width: 80%;

            
        }
    }
    .clients-img {
        max-width: 150px;
    
        margin: auto;
        justify-content: space-between;
        
    }
    
</style>

