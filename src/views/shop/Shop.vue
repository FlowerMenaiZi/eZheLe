<template>
  <div id="shop">
    <div class="shop">
      <curLocation class="curLocation">
        <span slot="first">{{this.fromUrl}}></span>
        <span slot="second">{{this.searchItem}}></span>
        <span slot="third">{{this.shopName}}</span>
      </curLocation>
      <div class="shopDesc">
        <div class="cover">
          <p class="collect"><img src="~assets/icon/shoucang.png" alt="" style="margin-right: 10px;vertical-align: middle">收藏店铺</p>
          <div class="disf shopContent">
            <p>喜茶（房山龙湖天街店）</p>
            <div class="disf star">
              <div>
                <img src="~assets/icon/wuxing.png" alt="">
                <span>5分</span>
              </div>
              <p>1km</p>
            </div>
            <p>地址：房山区拱辰北大街龙湖北京房山天街1F-48</p>
            <p>电话：010-81313955</p>
            <p>营业时间：周一至周日 10:00-22:00</p>
          </div>
        </div>
      </div>
      <div class="content disf">
        <div class="rightContent">
          <div class="disf menu">
            <p :class="{select:isSelect}" @click="clickOrder">点餐</p>|<p @click="clickComment" :class="{select:!isSelect}">评论</p>
          </div>
          <div class="noLogin disf" v-show="false">
            <div>
              <p>登录即可查看优惠</p>
            </div>
            <button>立即登录</button>
          </div>
          <shopItem :allCommodity="allCommodity" :comClassify="comClassify" v-show="isSelect"></shopItem>
          <commentItem v-show="!isSelect" :comment="comment"></commentItem>
        </div>
        <div class="leftContent">
          <div class="menu">
            <p>猜你喜欢</p>
          </div>
          <div class="gussLike">
            <div class="likeItem" v-for="(item,index) in guessLike">
              <a :href="shopUrl(item.shopId)">
                <div class="img">
                  <img src="~assets/image/cainixihuan.jpg" alt="">
                </div>
                <p>{{item.shopTitle}}</p>
                <div class="disf price">
                  <span>¥{{item.price}}</span>
                  <span>月销{{item.sales}}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script>
  import curLocation from "components/curLocation";
  import Footer from "components/Footer";
  import Copyright from "components/Copyright";

  import shopItem from "./child/shopItem";
  import commentItem from "./child/commentItem";

  import img1 from "assets/image/tupian1.png"
  import img2 from "assets/image/tu2.png"
  import img3 from "assets/image/tu3.jpg"
  export default {
    name: "shop",
    components: {
      curLocation,
      shopItem,
      Footer,
      Copyright,
      commentItem
    },
    data() {
      return {
        showShop: '',//获取商店ID
        searchItem: '奶茶',
        fromUrl: '饿着了',
        shopName:'喜茶',
        isSelect:true,
        guessLike:[
          {
            'shopId':'3',
            'shopTitle':'火炉火烤肉·芝士排骨',
            'price':'59',
            'sales':'35',
          },
          {
            'shopId':'4',
            'shopTitle':'韩国烤肉',
            'price':'88',
            'sales':'88',
          },
          {
            'shopId':'5',
            'shopTitle':'益禾堂（莲塘路）',
            'price':'9',
            'sales':'35',
          },
          {
            'shopId':'6',
            'shopTitle':'湘里香·正宗湘菜',
            'price':'48',
            'sales':'50',
          },
          {
            'shopId':'7',
            'shopTitle':'蜜雪冰城（溢彩荟）',
            'price':'8',
            'sales':'70',
          },
        ],
        allCommodity:[
          {
            'comImg':img1,
            'comName':'多肉葡萄',
            'sales':'12',
            'price':'15',
            'comId':'001',
          },
          {
            'comImg':img2,
            'comName':'芝芝莓莓',
            'sales':'3',
            'price':'12',
            'comId':'002',
          },
          {
            'comImg':img3,
            'comName':'豆豆波波茶',
            'sales':'13',
            'price':'15',
            'comId':'003',
          },
          {
            'comImg':img1,
            'comName':'兰枝抹茶',
            'sales':'12',
            'price':'15',
            'comId':'004',
          },
        ],
        comClassify:[
          {
            'type':'热销',
          },{
            'type':'折扣'
          },{
            'type':'名茶类'
          },{
            'type':'混合茶'
          },{
            'type':'纯茶'
          },{
            'type':'超级水果茶'
          },{
            'type':'当季限定'
          },
        ],
        comment:[
          {
            name:'wx15547779579',
            time:'2021-1-11 10:23',
            content:'中午气温太高了，正好路过蜜雪冰城，买了一支冰激凌，解解渴，他家的冰激凌比较大，奶味弄，蛋卷酥脆，感觉吃三个能吃饱哈哈。',

          },
          {
            name:'wx15547779579',
            time:'2021-1-11 10:23',
            content:'中午气温太高了，正好路过蜜雪冰城，买了一支冰激凌，解解渴，他家的冰激凌比较大，奶味弄，蛋卷酥脆，感觉吃三个能吃饱哈哈。',

          },
          {
            name:'wx15547779579',
            time:'2021-1-11 10:23',
            content:'中午气温太高了，正好路过蜜雪冰城，买了一支冰激凌，解解渴，他家的冰激凌比较大，奶味弄，蛋卷酥脆，感觉吃三个能吃饱哈哈。',

          },
          {
            name:'wx15547779579',
            time:'2021-1-11 10:23',
            content:'中午气温太高了，正好路过蜜雪冰城，买了一支冰激凌，解解渴，他家的冰激凌比较大，奶味弄，蛋卷酥脆，感觉吃三个能吃饱哈哈。',

          },
        ],
      }
    },
    methods:{
      clickOrder(){
        this.isSelect = true;
      },
      clickComment(){
        this.isSelect = false;
      },
    },
    mounted() {
      //获取用户查看的店铺
      this.showShop = this.$route.params.shopId
    },
    computed:{
      shopUrl(){
        return (shopId)=>{
          return "/shop/"+shopId
        }
      }
    }
  }
</script>

<style scoped>
  #shop {
    width: 100%;
  }

  #shop .shop {
    width: 1200px;
    margin: 0 auto;
  }

  .curLocation {
    width: 100%;
    height: 35px;
    line-height: 35px;
    margin-top: 20px;
  }

  .shopDesc{
    width: 100%;
    border-radius: 5px;
    background: url("~assets/image/bg.jpg") no-repeat;
    background-size: cover;
    height: 400px;
    color:#FFFEFE;
  }
  .shopDesc .collect{
    text-align: right;
    margin-right: 30px;
  }
  .shopDesc .cover{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    border-radius: 5px;
    padding: 10px;
  }
  .shopContent{
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    filter: brightness(1);
  }
  .shopContent p:nth-child(1){

    font-family: Microsoft YaHei;
    font-size: 24px;
    margin-bottom: 40px;
  }
  .shopContent p{
    margin-bottom: 5px;
  }
  .shopContent .star{
    margin-bottom: 10px;
    width: 15%;
  }
  .shopContent .star img{
    width: 50%;
    margin-right: 10px;
  }
  .content{
    width: 100%;
    justify-content: space-between;
  }
  .content .rightContent{
    width: 80%;
    margin-top: 20px;

  }
  .content .rightContent .menu{
    font-size: 18px;
  }
  .content .rightContent .menu p{
    color: #929292;
    cursor: pointer;
  }
  .content .rightContent .menu p:nth-child(1){
    margin-right: 10px;
  }
  .content .rightContent .menu p:nth-child(2){
    margin-left: 10px;
  }
  .select{
    color: black !important;
    cursor: pointer !important;
  }
  .content .rightContent .noLogin{
    width: 100%;
    height: 300px;
    background: #fff;
    padding: 30px 30px;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
  }
  .content .rightContent .noLogin div{
    width: 100%;
    height: 80%;
    border: 2px solid #ffab36;
    box-sizing: border-box;
    line-height: 152px;
    text-align: center;
  }
  .content .rightContent .noLogin div p{
    text-decoration: underline;
    color: #676767;
  }
  .content .rightContent .noLogin button{
    width: 80px;
    height: 30px;
    color: #fff;
    background: #ffab36;
    border-radius: 4px ;
    border: none;
    outline: none;
    margin-top: 25px;
  }
  .content .leftContent{
    width: 18%;
    margin-top: 20px;
  }
  .content .leftContent .menu{
    font-size: 18px;
    color: #000000;
  }
  .content .leftContent .gussLike{
    width: 100%;
    background: #fff;
    padding: 10px 20px;
    margin-top: 10px;
  }
  .content .leftContent .gussLike .img{
    width: 100%;
  }
  .content .leftContent .gussLike .img img{
    width: 100%;
  }
  .content .leftContent .gussLike p{
    margin: 5px 0;
  }
  .content .leftContent .gussLike .price{
    justify-content: space-between;
  }
  .content .leftContent .gussLike .price span:nth-child(1){
    color: #FF4E00;
  }
  .content .leftContent .gussLike .price span:nth-child(2){
    color:#999999;
  }
  .content .leftContent .gussLike .likeItem{
    border-top: 1px solid #F7F7F7;
    padding: 20px 0 0 0;
    margin-bottom: 20px;
  }
  .content .leftContent .gussLike .likeItem:nth-child(1){
    border-top:none;
  }
</style>