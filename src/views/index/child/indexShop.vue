<template>
  <div id="recommend">
    <div class="recommend">
      <h2>{{title}}</h2>
      <ul>
        <shopRecItem :recInfo="recInfo"></shopRecItem>
      </ul>
    </div>
  </div>
</template>

<script>
  import shopRecItem from "./shopRecItem";

  import shopImg1 from 'assets/image/sousi.jpg'
  import shopImg2 from 'assets/image/shutiao.jpg'
  import shopImg3 from 'assets/image/tupian.png'
  import shopImg4 from 'assets/image/food4.png'
  export default {
    name: "indexShop",
    props:{
      title:{
        type:String,
        default:''
      }
    },
    data(){
      return{
        recInfo:{
          0:{
            shopImg:shopImg1,
            Name:'三味寿司',
            realPrice:'28.88',
            oldPrice:'¥45.9',
            shopTitle:'寿司先森（石岐店）',
            link:'xxx.com'
          },
          1:{
            shopImg:shopImg2,
            Name:'藤条焖猪肉',
            realPrice:'18.88',
            oldPrice:'¥22.9',
            shopTitle:'薇尼诗（石岐店）',
            link:'xxx.com'
          },
          2:{
            shopImg:shopImg3,
            Name:'炸鸡腿',
            realPrice:'39.99',
            oldPrice:'¥49.9',
            shopTitle:'炸了个鸡（石岐店）',
            link:'xxx.com'
          },
          3:{
            shopImg:shopImg4,
            Name:'鸡肉沙拉',
            realPrice:'15.88',
            oldPrice:'¥20.9',
            shopTitle:'鸡肉男（石岐店）',
            link:'xxx.com'
          }
        }
      }
    },
    components:{
      shopRecItem,
    }
  }
</script>

<style scoped>
  #recommend, #find {
    width: 100%;
    margin: 40px 0;
  }

  #recommend .recommend, #find .find {
    width: 1200px;
    margin: 0 auto;
    height: 400px;
    background: #fff;
    box-shadow: 0 0 15px #c4c4c4;
  }

  #recommend .recommend h2, #find .find h2 {
    text-align: center;
    padding-top: 20px;
  }

  #recommend .recommend ul, #find .find ul {
    padding-top: 20px;
    justify-content: space-around;
  }


</style>