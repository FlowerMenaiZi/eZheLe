<template>
  <div id="header_app">
    <div class="hApp disf">
      <div class="hApp_left disf">
        <a href="">
          <img src="~assets/icon/LOGO.png" alt="">
        </a>
        <p>饿着了</p>
      </div>
      <div class="right">
        <slot name="search">
          <div class="right_search">
            <input type="text" placeholder="世赛烧烤店 满25减5" class="search">
            <a href=""><img src="~assets/icon/search.png" alt=""></a>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderLogo"
  }
</script>

<style scoped>
  #header_app {
    width: 100%;
    height: 90px;
    background: #ffab36;
  }

  #header_app .hApp {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }

  #header_app .hApp .hApp_left {
    height: 100%;
    line-height: 90px;
  }

  #header_app .hApp .hApp_left a {
    width: 12%;
  }

  #header_app .hApp .hApp_left a img {
    width: 100%;
    vertical-align: middle;
  }

  #header_app .hApp .hApp_left p {
    font-size: 40px;
    color: #fff;
    cursor: pointer;
    margin-left: 10px;
  }
  .right_search {
    width: 260px;
    height: 35px;
    position: relative;
    background: #fff;
    border-radius: 20px;
  }
  .search {
    width: 75%;
    height: 100%;
    border: none;
    position: absolute;
    left: 20px;
    border-right: 1px solid #ffab36;
  }

  .search::-webkit-input-placeholder {
    color: #ffab36;
  }

  .search::-moz-placeholder {
    color: #ffab36;
  }

  .right_search a {
    width: 15%;
    position: absolute;
    left: 225px;
    top: 5px;

  }

  .right_search a img {
    width: 65%;
  }
</style>