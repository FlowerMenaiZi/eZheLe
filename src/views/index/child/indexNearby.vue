<template>
  <div id="nearby">
    <div class="nearby">
      <p class="title">附近商铺</p>
      <ul>
        <nearbyItem :nearbyInfo="nearbyInfo"/>
      </ul>
    </div>
  </div>
</template>

<script>
  import nearbyItem from "./nearbyItem";

  import shopImg1 from "assets/image/sousiround.png"
  import shopImg2 from "assets/image/hbbround.png"
  import shopImg3 from "assets/image/egground.png"
  import shopImg4 from "assets/image/niuheround.png"

  import star1 from "assets/icon/sixing.png"
  import star2 from "assets/icon/wuxing.png"
  import star3 from "assets/icon/sanxing.png"
  import star4 from "assets/icon/wuxing.png"
  export default {
    name: "indexNearby",
    components:{
      nearbyItem,
    },
    data(){
      return{
        nearbyInfo: {
          0: {
            shopImg: shopImg1,
            star: star1,
            realPrice: '30',
            shopTitle: '寿司先森（石岐店）',
            link: 'xxx.com',
            classify: '寿司',
            distance:'1.2Km'
          },
          1: {
            shopImg: shopImg2,
            star: star2,
            realPrice: '26',
            shopTitle: '渣渣汉堡（石岐店）',
            link: 'xxx.com',
            classify: '西式快餐/汉堡',
            distance:'1.2Km'
          },
          2: {
            shopImg: shopImg3,
            star: star3,
            realPrice: '20',
            shopTitle: '鳄梨先生（石岐店）',
            link: 'xxx.com',
            classify: '养生',
            distance:'2.4Km'
          },
          3: {
            shopImg: shopImg4,
            star: star4,
            realPrice: '30',
            shopTitle: 'July七月中餐厅（石岐店）',
            link: 'xxx.com',
            classify: '中餐',
            distance:'3.1Km'
          }
        },
      }
    }
  }
</script>

<style scoped>
  #nearby {
    width: 100%;
  }

  #nearby .nearby {
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    box-shadow: 0 0 15px #c4c4c4;
    padding: 40px;
  }

  #nearby .nearby p.title {
    font-size: 25px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    padding: 20px 0 30px 0;
    border-bottom: 1px solid #DDDDDD;
  }

  #nearby .nearby ul {
    width: 80%;
    margin: 0 auto;
  }

</style>