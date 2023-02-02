<template>
    <div class="main-container">
        <div class="main-container__title">
            <p>выполненные работы</p>
        </div>
        <div class="main-container__projects">
            <button>Проект 1</button>
            <button>Проект 2</button>
            <button>Проект 3</button>
            <button>Проект 4</button>
            <button>Проект 5</button>
        </div>

    </div>
</template>

<style lang="less" scoped>

p {
  margin: 0;
}
.main-container {
    color: rgb(101, 101, 101);
    background-color: #fff;
    

    &__title {
        text-transform: uppercase;
        text-align: center;
        font-size: 25px;
        padding: 25px
    }
    &__projects {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        margin: 0 auto;
        button {
            background-color: #BBBBBB;
            width: 345px;
            height: 45px;
            border: none;
            margin: 0 5px;
            padding: 0;
            font-size: 15px;
        }
    }
}
</style>