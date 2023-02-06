

<template>
    
    <div class="main-container">
        <div class="main-container__about">
            <h3>О нас</h3>
            <div class="main-container__about-list">
                <p>Клиенты</p>
                <p>Схема работы</p>
                <p>Портфолио</p>
                <p>Наша команда</p>
                <p>Гарантии</p>
            </div>
        </div>
        <div class="main-container__services">
            <h3>Услуги</h3>
            <div class="main-container__services-list">
                <p>Фасадные работы</p>
                <p>Клининговые работы</p>
                <p>Монтажные работы</p>
                <p>Уборка снега и наледи</p>
                <p>Кронирование деревьев</p>
                <p>Антикоррозийные работы</p>
                <p>Нестандартные задачи</p>
            </div>
        </div>
        <div class="main-container__contacts">
            <h3>Контакты</h3>
            <div class="main-container__contacts-list">
                <p class="number">+7(937)316-16-28 </p>
                <p class="inst">promalpufa </p>
                <p class="mail">promalpufa@mail.ru </p>
                <p class="location">Республика Башкортостан, <br>город Уфа </p>
            </div>
        </div>
        
    

    </div>
</template>

<style lang="less" scoped>

p {
    margin: 10px;

}
    .main-container {
        display: flex;
        justify-content:space-around;
        width: 100%;
        height: 100%;
        background-color: #302E2E;
        color: #fff;

        &__services {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        &__services-list {
            display: flex;
            flex-direction: column;
            justify-items: center;
            align-items: center;
        }
    }
.number {
    text-align: right;
    &::after {
        font-family: "Font Awesome 5 Brands";
        content: '\f232';
        font-weight: 600;
        }
}

.inst {
    text-align: right;
    &::after {
        font-family: "Font Awesome 5 Brands";
        content: '\f16d';
        font-weight: 600;
    }
}
.mail {
    text-align: right;
    &::after {
        font-family: "Font Awesome 5 Free";
        content: "\f0e0";
        font-weight: 600;
    }
}
.location {
    text-align: right;
    &::after {
        font-family: "Font Awesome 5 Free";
        content: "\f279";
        font-weight: 400;
    }
}

</style>