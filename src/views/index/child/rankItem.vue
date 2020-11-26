<template>
  <div>
    <li class="disf" v-for="item in rankItemInfo">
      <div class="top"><img :src="item.topImages" alt=""></div>
      <a href="" class="business">
        <img :src="item.logo" alt="">
        <p class="title">{{item.title}}</p>
        <p class="pop">人气 <span>{{item.pop}}</span>万</p>
      </a>
    </li>
  </div>
</template>

<script>
  export default {
    name: "indexRankItem",
    props: {
      rankItemInfo: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  li {
    margin: 10px 0;
    height: 100px;
  }

  .top {
    height: 90%;
    line-height: 90px;
    text-align: center;
    margin-right: 10px;
  }

  .top img {
    width: 90%;
    vertical-align: middle;
  }

  li .business {
    display: block;
    position: relative;
    background: #fff;
    height: 90px;
    width: 280px;
    box-shadow: 0 0 15px #e2e2e2;
  }

  li .business img {
    position: absolute;
    height: 90px;
  }

  li .business p {
    position: absolute;
    left: 110px;
    top: 20px;
    font-size: 18px;
  }

  li .business .pop {
    top: 50px;
    font-size: 14px;
    color: #FF0000;
  }

  li .business .pop span {
    font-size: 22px;
  }
</style>