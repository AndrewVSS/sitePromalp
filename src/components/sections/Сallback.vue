

<template>
    <div class="main-container">
        <p><a name="Callback"></a></p>
            <div class="main-container__border">
                <div class="main-container__border-form">
                    <p>Оставьте заявку <br> и мы перезвоним вам</p>
                    <div class="main-container__border-form-table">
                        <form>
                            <input type="name" placeholder="Введите имя">
                        </form>
                        <form>
                            <input type="tel" placeholder="Введите телефон">
                        </form>
                        <form>
                            <input type="mail" placeholder="Введите e-mail">
                        </form>
                    </div>
                </div>
                <div>
                    <button type="button">Перезвонить</button>
                </div>
            </div>
    </div>
    
</template>

<style lang="less" scoped>

p {
    color: #fff;
    font-size: 25px;
    text-align: center;
}

input {
    display: flex;
    flex-direction: column;
    color: #fff;
    border: 1px #fff solid;
    align-items: center;
    height: 40px;
    width: 500px;
    background-color: rgba(rgb(0, 0, 0), 0.3);
    padding: 1px 2px 1px 10px;
}
button {
    display: flex;
    color: rgba(255, 255, 255, 0.6);
    border: 1px #fff solid;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 500px;
    background-color: rgba(rgb(0, 0, 0), 0.3);
    font-size: 20px;
}


    
    .main-container {
        display: flex;
        width: 100%;
        height: 100%;
        align-content: center;
        justify-content: center;
        background-image: url(http://promalpufa.ru/wp-content/themes/promalp/img/offer-bg.jpg);
        background-color: rgba(0, 0, 0, 0.6);

        &__img {
        object-fit: cover;
        width: 100%;  
         
        }
        &__border {
            display: flex;
            flex-direction:column;
            background-color: rgba(0, 0, 0, 0.6);
            max-width: 1800px;
            width: 100%;
            height: 350px;
            margin: 40px 0;
            align-items: center;
            justify-content: space-around;
            
        }
        &__border-form {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }
        &__border-form-table {
            display: flex;
            flex-direction: column;
            max-width: 500px;
            width:100%;
            height: 200px;
            justify-content: space-around;
            align-items: center;
    }
}
</style>