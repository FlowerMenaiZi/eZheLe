<template>
  <div id="find">
    <div class="find">
      <h2>{{title}}</h2>
      <ul>
        <findItem :findInfo="findInfo"/>
      </ul>
    </div>
  </div>
</template>

<script>
  import findItem from "./findItem";

  import shopImg1 from "assets/image/food1.png"
  import shopImg2 from "assets/image/hbb.jpg"
  import shopImg3 from "assets/image/Spicy-hero.png"
  import shopImg4 from "assets/image/salad.png"

  import star1 from "assets/icon/sixing.png"
  import star2 from "assets/icon/wuxing.png"
  import star3 from "assets/icon/wuxing.png"
  import star4 from "assets/icon/sanxing.png"
  export default {
    name: "indexFind",
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        findInfo: {
          0: {
            shopImg: shopImg1,
            star: star1,
            realPrice: '28.5',
            shopTitle: '炒粉一家（石岐店）',
            link: 'xxx.com',
            classify: '炒粉'
          },
          1: {
            shopImg: shopImg2,
            star: star2,
            realPrice: '18.8',
            shopTitle: '渣渣汉堡（石岐店）',
            link: 'xxx.com',
            classify: '快餐汉堡'
          },
          2: {
            shopImg: shopImg3,
            star: star3,
            realPrice: '70',
            shopTitle: '麻辣英雄（石岐店）',
            link: 'xxx.com',
            classify: '火锅'
          },
          3: {
            shopImg: shopImg4,
            star: star4,
            realPrice: '22',
            shopTitle: '鳄梨先生',
            link: 'xxx.com',
            classify: '养生'
          }
        }
      }
    },
    components: {
      findItem,
    }
  }
</script>

<style scoped>
  #find {
    width: 100%;
    margin: 40px 0;
  }

  #find .find {
    width: 1200px;
    margin: 0 auto;
    height: 400px;
    background: #fff;
    box-shadow: 0 0 15px #c4c4c4;
  }

  #find .find h2 {
    text-align: center;
    padding-top: 20px;
  }

  #find .find ul {
    padding-top: 20px;
    justify-content: space-around;
  }


</style>