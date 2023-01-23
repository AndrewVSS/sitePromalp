<script setup>

</script>

<template>
  <header class="header">
    <div id="logo">
      <img src="http://promalpufa.ru/wp-content/themes/promalp/img/logo.png">
    </div>

  </header>
  <section class="main-block">

  </section>

</template>


<style lang="less" scoped>
.img {
  width: 100%;
  object-fit: cover;
}

div {
  box-sizing: border-box;
}

#logo {
  height: inherit;
  border: 1px solid red;
  background: url(http://promalpufa.ru/wp-content/themes/promalp/img/logo.png) no-repeat;
}

.header {
  height: 60px;
  background-color: rgb(80, 61, 61);

  img {
    height: inherit;
  }
}

.main-block {
  height: 600px;
  background-image: url(http://promalpufa.ru/wp-content/themes/promalp/img/header-bg.webp);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>


