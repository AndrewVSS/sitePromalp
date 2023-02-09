<script>

export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
            button.classList.toggle('wrapper__menu-btn--on');
        },
            
    }    
    
}
</script>


<template>
     <div :class="`wrapper__menu ${isOpen ? 'wrapper__menu--active': ''}`">
            <button id="button" class="wrapper__menu-btn" @click="toggleMenu"></button>
            <nav class="menu-list ">
               <a class="link" href="#UnionBlock">Главная</a> 
               <a class="link" href="#Clients">Клиенты</a>
               <a class="link" href="#SecondBlock">Портфолио</a>
               <a class="link" href="#Services">Гарантии</a>
               <a class="link" href="#Callback">Контакты</a>
            </nav>
        
        </div>
</template>

<style lang="less" scoped>

.link {
    text-decoration: none;
    color: #fff;
}
    
    .wrapper__menu {
            position: absolute;
            right: 0;top: 0;
            width: 20%;
            max-height: 600px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.3);
            transition: 0.5s;
            transform: translateX(100%);
            text-decoration: none;
            
            
             
            
        }
    .wrapper__menu--active {
            transform: translateX(0%);
            font-size: 15px;
            text-decoration: none;
            
            
        }
    .wrapper__menu-btn {
        width: 45px;
        height: 45px;
        background-color: rgba(0, 0, 0, 0);
        position:absolute;
        left: -45px; top: 10px;
        border: none;
        color: rgba(255, 255, 255, 0.5);
        font-size: 20px;

        &::after {
            font-family: "Font Awesome 5 Free";
            content: "\f0c9";
            font-weight: 600;
            transition: 0.5s;
        }          
    }
    .wrapper__menu-btn--on {
        width: 45px;
        height: 45px;
        background-color: rgba(0, 0, 0, 0);
        position:absolute;
        left: -45px; top: 10px;
        border: none;
        color: rgba(255, 255, 255, 0.5);
        font-size: 20px;
        &::after {
            font-family: "Font Awesome 5 Free";
            content: "\f00d";
            font-weight: 600;
        }
    }
    
    .menu-list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50%;
        flex-direction: column;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 900;
        text-decoration: none;
        
    }
    

</style>