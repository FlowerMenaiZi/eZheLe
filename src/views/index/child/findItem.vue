<template>
  <div id="findItem">
    <li v-for="item in findInfo">
      <a :href="item.link">
        <div class="fourth_img" :style="{'background':'url('+item.shopImg+') no-repeat','backgroundSize':'cover'}"></div>
        <h3>{{item.shopTitle}}</h3>
        <p class="price"><img :src="item.star" alt=""><span>人均 ¥{{item.realPrice}}</span></p>
        <p class="classify">{{item.classify}}</p>
      </a>
    </li>
  </div>
</template>

<script>
  export default {
    name: "findItem",
    props:{
      findInfo:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style scoped>
  #findItem{
    display: flex;
    justify-content: space-around;
  }
  #findItem li {
    width: 20%;
  }

  #findItem li a {
    display: block;
    width: 100%;
  }

  #findItem li a div {
    width: 240px;
    height: 240px;
  }
  #findItem li a h3 {
    margin-top: 15px;
  }

  #findItem li a p img {
    width: 40%;
    margin-right: 20px;
    vertical-align: center;
  }

  /*#findItem li a .first_img {*/
  /*  background: url("~assets/image/food1.png") no-repeat;*/
  /*  background-size: cover;*/
  /*}*/

  /*#findItem li a .second_img {*/
  /*  background: url("~assets/image/hbb.jpg") no-repeat;*/
  /*  background-size: cover;*/
  /*}*/

  /*#findItem li a .third_img {*/
  /*  background: url("~assets/image/Spicy-hero.png") no-repeat;*/
  /*  background-size: cover;*/
  /*}*/

  /*#findItem li a .fourth_img {*/
  /*  background: url("~assets/image/salad.png") no-repeat;*/
  /*  background-size: cover;*/
  /*}*/

  #findItem li a p.price span {
    font-size: 14px;
    color: #636363;
  }

  #findItem li a p.classify {
    font-size: 12px;
    color: #636363;
  }
</style>