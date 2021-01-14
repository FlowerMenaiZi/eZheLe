<template>
  <div class="shopItem disf">
    <div class="nav">
      <ul>
        <li v-for="(item, index) in comClassify" @click="curSelect(index)" class="navItem">{{item.type}}</li>
      </ul>
    </div>
    <div class="item">
      <p class="selType">{{curSelectStatus}}></p>
      <div class="disf single" v-for="(item,index) in allCommodity">
        <div>
          <img :src="item.comImg" alt="">
        </div>
        <div>
          <p>{{item.comName}}</p>
          <p>月销{{item.sales}}</p>
        </div>
        <div>
          <p>¥{{item.price}}/份</p>
        </div>
        <div>
          <span @click="reduce(index)">-</span>
          <span class="comNum">0</span>
          <span @click="increase(index)">+</span>
        </div>
      </div>
    </div>
    <div class="cart">
      <div class="title disf">
        <p>我的购物车</p>
        <span @click="clearThisCart">[清空]</span>
      </div>
      <div class="selCom">
        <div class="commodity">
          <ul class="disf" v-for="(item,index) in curSel" v-if="curSel !== ''">
            <li>{{item.comName}}</li>
            <li>七分糖</li>
            <li>小杯</li>
            <li>¥{{item.price}}.00</li>
            <li>
              <span @click="cartReduce(index)">-</span>
              <span class="comNum">{{item.count}}</span>
              <span @click="cartIncrease(index)">+</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="allPrice disf">
        <div class="icon">
          <img src="~assets/icon/gouwuche.png" alt="">
        </div>
        <div class="disf cost">
          <p>合算：<span>¥{{totalPrice}}</span></p>
          <div>
            <span>配送费：¥0</span>
            <span>打包费：¥0</span>
          </div>
        </div>
      </div>
      <div class="settlement">
        <p @click="settlement">结算</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "shopItem",
    props: {
      allCommodity: {
        type: Array,
        default: [],
      },
      comClassify: {
        type: Array,
        default: [],
      },
    },
    data() {
      return {
        curSelectStatus: '热销',
        selCom: {},  //修改的
        curSel: [],  //仅赋值
        showShop: '',
      }
    },
    methods: {
      curSelect(index) {
        var navLi = document.getElementsByClassName('navItem');
        for (let i = 0; i < navLi.length; i++) {
          navLi[i].classList.remove('select')
        }
        navLi[index].classList.add('select')
        this.curSelectStatus = navLi[index].innerText;
      },
      reduce(index) {
        var comNum = document.getElementsByClassName('comNum');
        var getItem = JSON.parse(localStorage.getItem('selCom'))
        this.selCom = getItem ? getItem : {}
        if (JSON.stringify(this.selCom) !== "{}") {
          var i = 0;
          var exiComId = [];
          for (let existItem of this.selCom[this.showShop]) {
            exiComId.push(existItem.comId)
          }
          var curIndex = exiComId.indexOf(this.allCommodity[index].comId)
          if (curIndex !== -1) {
            for (let item of this.selCom[this.showShop]) {
              if (item.comId === this.allCommodity[index].comId) {
                break
              } else {
                i++;
              }
            }
            this.selCom[this.showShop][i].count--
            if (this.selCom[this.showShop][i].count <= 0) {
              this.selCom[this.showShop][i].count = 0
              comNum[index].innerText = this.selCom[this.showShop][i].count
              this.allCommodity[index].count = 0;
              this.selCom[this.showShop].splice(i, 1)
              localStorage.setItem('selCom', JSON.stringify(this.selCom));
              this.curSel = getItem[this.showShop]
            } else {
              this.selCom[this.showShop][i].price = this.selCom[this.showShop][i].count * this.allCommodity[index].price
              comNum[index].innerText = this.selCom[this.showShop][i].count
              localStorage.setItem('selCom', JSON.stringify(this.selCom));
              this.curSel = getItem[this.showShop]
            }
          }else{
            comNum[index].innerText = 0
          }
        }
      },
      increase(index) {
        var comNum = document.getElementsByClassName('comNum');
        comNum[index].innerText++
        //  获取商品添加至购物车
        this.allCommodity[index].count = comNum[index].innerText;
        var getItem = JSON.parse(localStorage.getItem('selCom'))
        this.selCom = getItem ? getItem : {}
        if (getItem && getItem[this.showShop]) {
          //存在
          this.selCom[this.showShop] = getItem[this.showShop]
          //还要判断数量增加而不是直接添加商品
          var existComId = []
          for (let item of this.selCom[this.showShop]) {
            existComId.push(item.comId)
          }
          var curSelCom = existComId.indexOf(this.allCommodity[index].comId)
          if (curSelCom !== -1) {
            //购物车存在该商品，数量自增
            var item = this.selCom[this.showShop][curSelCom]
            item.count++
            comNum[index].innerText = item.count
            item.price = this.allCommodity[index].price * item.count
            localStorage.setItem('selCom', JSON.stringify(this.selCom));
          } else {
            //购物车不存在该商品，直接添加
            comNum[index].innerText = this.allCommodity[index].count
            this.selCom[this.showShop].push(this.allCommodity[index])
            localStorage.setItem('selCom', JSON.stringify(this.selCom));
          }
          this.curSel = getItem[this.showShop]
        } else {
          //不存在直接添加

          this.selCom[this.showShop] = [this.allCommodity[index]];
          localStorage.setItem('selCom', JSON.stringify(this.selCom));
          this.curSel = JSON.parse(localStorage.getItem('selCom'))[this.showShop]
        }
      },
      retTotalPrice() {
        let getPrice = 0;
        if (JSON.stringify(this.curSel) !== "{}") {
          for (let item of this.curSel) {
            getPrice += parseInt(item.price);
          }
        }
        return getPrice
      },
      cartReduce(index){
        var getItem = JSON.parse(localStorage.getItem('selCom'))
        this.selCom = getItem ? getItem : {}
        var item = this.selCom[this.showShop][index]
        item.count--
        var unitPrice = 0;
        for (let oldCom of this.allCommodity){
          if (item.comId === oldCom.comId){
            unitPrice = oldCom.price
          }
        }
        if (item.count <=0){
          for (let oldCom of this.allCommodity){
            if (item.comId === oldCom.comId){
              oldCom.count = 0
            }
          }
          this.selCom[this.showShop].splice(index,1)
        }
        item.price = unitPrice * item.count
        localStorage.setItem('selCom', JSON.stringify(this.selCom));
        this.curSel = getItem[this.showShop]
      },
      cartIncrease(index){
        var getItem = JSON.parse(localStorage.getItem('selCom'))
        this.selCom = getItem ? getItem : {}
        var item = this.selCom[this.showShop][index]
        item.count++
        var unitPrice = 0;
        for (let oldCom of this.allCommodity){
          if (item.comId === oldCom.comId){
            unitPrice = oldCom.price
          }
        }
        item.price = unitPrice * item.count
        localStorage.setItem('selCom', JSON.stringify(this.selCom));
        this.curSel = getItem[this.showShop]
      },
      clearThisCart(){
        var getItem = JSON.parse(localStorage.getItem('selCom'))
        this.selCom = getItem ? getItem : {}
        if (this.selCom && this.selCom[this.showShop]) {
          delete this.selCom[this.showShop];
          localStorage.setItem("selCom", JSON.stringify(this.selCom))
          var getSelCom = JSON.parse(localStorage.getItem('selCom'))
          this.curSel = getSelCom[this.showShop] ? getSelCom[this.showShop] : {}
        }
        var comNum = document.getElementsByClassName('comNum');
        for (let i = 0;i<comNum.length;i++){
          comNum[i].innerText = 0;
        }
      },
      settlement(){
        if (Object.keys(this.curSel).length === '0'){
          this.showToast('请选择商品')
        }
      },
      showToast(message){
        this.$swal({
          text:message
        })
      }
    },
    computed: {
      totalPrice() {
        return this.retTotalPrice();
      }
    },
    mounted() {
      var navLi = document.getElementsByClassName('navItem');
      navLi[0].classList.add('select');
      this.showShop = this.$route.params.shopId
      var getSelCom = JSON.parse(localStorage.getItem('selCom'))
      this.curSel = getSelCom[this.showShop] ? getSelCom[this.showShop] : {}
    },

  }
</script>

<style scoped>
  .shopItem {
    width: 100%;
    height: 100px;
    margin-top: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .shopItem .nav {
    width: 22%;
    height: 600px;
    background: #fff;
    padding: 15px;
  }

  .shopItem .nav ul {
    width: 100%;
    height: 100%;
  }

  .shopItem .nav ul li {
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 5px #e7e5e5;
    margin-bottom: 10px;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
  }

  .shopItem .item {
    width: 75%;
    height: 600px;
    background: #fff;
    overflow-y: scroll;
    padding: 20px;
  }

  .shopItem .item .selType {
    color: #676767;
  }

  .shopItem .item .single {
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #F4F4F4;
  }

  .shopItem .item .single div:nth-child(2) {
    width: 50%;
  }

  .shopItem .item .single div:nth-child(2) p:nth-child(1) {
    font-size: 16px;
  }

  .shopItem .item .single div:nth-child(2) p:nth-child(2) {
    color: #999999;
    font-size: 12px;
  }

  .shopItem .item .single div:nth-child(3) {
    width: 15%;
    color: #FF4E00;
  }

  .shopItem .item .single div:nth-child(4) span:nth-child(1),
  .shopItem .cart .commodity ul li:nth-child(5) span:nth-child(1) {
    border: 1px solid #ffab36;
    width: 12px;
    height: 12px;
    display: inline-block;
    line-height: 10px;
    text-align: center;
    margin-right: 5px;
    cursor: pointer;
  }

  .shopItem .item .single div:nth-child(4) span:nth-child(3),
  .shopItem .cart .commodity ul li:nth-child(5) span:nth-child(3) {
    width: 12px;
    height: 12px;
    display: inline-block;
    line-height: 12px;
    text-align: center;
    margin-left: 6px;
    background: #ffab36;
    cursor: pointer;
  }

  .select {
    background: #FFAB36 !important;
    color: #fff;
  }


  .shopItem .cart {
    width: 100%;
    margin-top: 20px;
    background: #fff;
  }

  .shopItem .cart .title {
    width: 100%;
    height: 45px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 2px solid #ffab36;
  }

  .shopItem .cart .title p {
    font-size: 20px;
  }

  .shopItem .cart .selCom {
    width: 100%;
    height: 160px;
    overflow-y: scroll;
    padding: 20px;
  }

  .shopItem .cart .commodity {
    width: 100%;
  }

  .shopItem .cart .commodity ul {
    justify-content: space-between;
    padding: 10px 20px;
    border-radius: 20px;
    background: #f4f4f4;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  .shopItem .cart .commodity ul li {
    flex: 1;
    text-align: center;
  }

  .shopItem .cart .commodity ul li:nth-child(2),
  .shopItem .cart .commodity ul li:nth-child(3) {
    color: #999999;
  }

  .shopItem .cart .commodity ul li:nth-child(4) {
    color: #FF4E00;
  }

  .shopItem .cart .allPrice {
    width: 100%;
    height: 40px;
    background: #000;
    align-items: center;
  }

  .shopItem .cart .allPrice .icon {
    width: 10%;
    height: 100%;
    position: relative;
    left: 20px;
  }

  .shopItem .cart .allPrice .icon img {
    position: absolute;
    top: -40px;
  }

  .shopItem .cart .allPrice .cost {
    width: 90%;
    color: #fff;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }

  .shopItem .cart .allPrice .cost p span {
    color: #FF4E00;
    font-size: 18px;
  }

  .shopItem .cart .allPrice .cost div span:first-child {
    margin-right: 80px;
  }

  .shopItem .cart .settlement {
    width: 100%;
    height: 35px;
    cursor: pointer;
  }

  .shopItem .cart .settlement p {
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    background: #FFAB36;
    line-height: 35px;
  }
</style>