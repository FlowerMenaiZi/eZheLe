<template>
  <div class="ship">
    <HeaderLogo>
      <div slot="search">
        <p style="color: #fff">——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
    <div class="mineTitle">
      <p>我的账号 >>></p>
    </div>
    <div class="mineContent disf">
      <mineNav></mineNav>
      <div class="rightContent">
        <div class="orderContent">
          <p class="title">收货地址</p>
          <p class="title">以下是您的收货地址</p>
          <div class="addressItem">
            <div class="address disf" v-for="(item, index) in userAddress">
              <div>
                <p>{{item.name}} {{sex(item.sex)}} <span>{{item.tel}}</span></p>
                <p>{{item.detailAddress}}</p>
              </div>
              <div class="disf">
                <p><span v-show="item.isChecked">正在使用</span></p>
                <input type="radio" name="check" :checked="item.isChecked" @click="changeSel(index)">
                <div class="edit">
                  <img src="~assets/icon/bianji.png" alt="" style="width: 100%;" @click="modifyAddress(index)">
                </div>
              </div>
            </div>
          </div>
          <div class="disf addAddress">
            <div @click="addAddress"><img src="~assets/icon/add-select.png" alt="" style="width: 100%;"></div>
            <p @click="addAddress">添加地址</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <Copyright/>
    <div class="cover" v-show="isShowSmallPopup"></div>
    <div class="goodsHandle" v-show="isShowSmallPopup">
      <div class="handleTitle">
        {{addOrEditAddress}}
        <img src="~assets/icon/close.png" alt="" @click="cancel">
      </div>
      <div class="handleContent">
        <div class="info">
          <div>
            <span>地址：</span>
            <input type="text" ref="handleAddress">
          </div>
          <div>
            <span>门牌号：</span>
            <input type="text" ref="handleHouseNum">
          </div>
          <div>
            <span>手机号：</span>
            <input type="number" ref="handleTel">
          </div>
          <div class="sex">
            <label for="man"><input type="radio" name="sex" id="man" ref="man">先生 </label>
            <label for="woman"><input type="radio" name="sex" id="woman" ref="woman">女士 </label>
          </div>
          <div>
            <span>联系人：</span>
            <input type="text" ref="handleUser">
          </div>
        </div>
      </div>
      <div class="handleBtn">
        <button @click="cancel">取消</button>
        <button @click="save">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  import mineNav from "./child/mineNav";
  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";
  import Footer from "components/Footer";
  import Vue from 'vue'
  export default {
    name: "shipAddress",
    components: {
      HeaderLogo,
      Copyright,
      Footer,
      mineNav,
    },
    data() {
      return {
        userAddress: [
          {
            'name': '顾梦晨',
            'sex': 'woman',
            'tel': '17666362762',
            'detailAddress': '中山市技师学院东校区（北门）',
            'houseNum': '保安亭',
            'isChecked': true
          },
          {
            'name': '邹水子晴 ',
            'sex': 'woman',
            'tel': '17666362762',
            'detailAddress': '中山市技师学院北校区（北门）',
            'houseNum': '保安亭',
            'isChecked': false
          },
          {
            'name': '黄子龙',
            'sex': 'man',
            'tel': '17666362762',
            'detailAddress': '中山市实验高中（北门）',
            'houseNum': '保安亭',
            'isChecked': false
          },
        ],
        isShowSmallPopup: false,
        addOrEditAddress: '',
        addEditAddress: {},
        editIndex: '',
        curCheck: '',
      }
    },
    methods: {
      changeSel(index) {
        for (let i = 0; i < this.userAddress.length; i++) {
          this.userAddress[i].isChecked = false
        }
        var item = this.userAddress[index]
        item.isChecked = true
        Vue.set(this.userAddress,index,item)
      },
      cancel() {
        this.isShowSmallPopup = false
        this.$refs.handleAddress.value = ''
        this.$refs.handleHouseNum.value = ''
        this.$refs.handleTel.value = ''
        this.$refs.handleUser.value = ''
        this.$refs.man.checked = false
        this.$refs.woman.checked = false
      },
      save() {
        if (this.addOrEditAddress === '修改地址中') {
          this.addEditAddress = {}
          this.isShowSmallPopup = false
          this.addEditAddress.detailAddress = this.$refs.handleAddress.value
          this.addEditAddress.houseNum = this.$refs.handleHouseNum.value
          this.addEditAddress.tel = this.$refs.handleTel.value
          this.addEditAddress.name = this.$refs.handleUser.value
          this.addEditAddress.isChecked = this.curCheck
          if (this.$refs.man.checked) {
            this.addEditAddress.sex = 'man'
          } else {
            this.addEditAddress.sex = 'woman'
          }
          Vue.set(this.userAddress,this.editIndex,this.addEditAddress)
        }else{
          this.addEditAddress = {}
          this.isShowSmallPopup = false
          this.addEditAddress.detailAddress = this.$refs.handleAddress.value
          this.addEditAddress.houseNum = this.$refs.handleHouseNum.value
          this.addEditAddress.tel = this.$refs.handleTel.value
          this.addEditAddress.name = this.$refs.handleUser.value
          this.addEditAddress.isChecked = false
          if (this.$refs.man.checked) {
            this.addEditAddress.sex = 'man'
          } else {
            this.addEditAddress.sex = 'woman'
          }
          this.userAddress.push(this.addEditAddress)
        }
        this.isShowSmallPopup = false
        this.$refs.handleAddress.value = ''
        this.$refs.handleHouseNum.value = ''
        this.$refs.handleTel.value = ''
        this.$refs.handleUser.value = ''
        this.$refs.man.checked = false
        this.$refs.woman.checked = false
      },
      modifyAddress(index) {
        this.editIndex = index
        this.curCheck = this.userAddress[index].isChecked
        this.isShowSmallPopup = true
        this.addOrEditAddress = '修改地址中'
        this.$refs.handleAddress.value = this.userAddress[index].detailAddress
        this.$refs.handleHouseNum.value = this.userAddress[index].houseNum
        this.$refs.handleTel.value = this.userAddress[index].tel
        this.$refs.handleUser.value = this.userAddress[index].name
        if (this.userAddress[index].sex == 'man') {
          this.$refs.man.checked = true
        } else {
          this.$refs.woman.checked = true
        }
      },
      addAddress() {
        this.isShowSmallPopup = true
        this.addOrEditAddress = '添加地址中'
      }
    },
    computed: {
      sex() {
        return (sex) => {
          switch (sex) {
            case 'woman':
              return '女士'
            case 'man':
              return '先生'
          }
        }
      }
    },

  }
</script>

<style scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .mineContent {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .mineTitle {
    width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }

  .rightContent {
    width: 76%;
    margin-left: 40px;
  }

  .orderContent {
    width: 100%;
    background: #fff;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
    padding: 30px 40px;
  }

  .orderContent p.title:nth-child(1) {
    font-size: 18px;
  }

  .orderContent p.title {
    font-size: 16px;
    padding-bottom: 30px;
  }

  .orderContent p.title:nth-child(2) {
    padding-bottom: 50px;
    border-bottom: 1px solid #DDDDDD;
  }

  .addressItem .address {
    justify-content: space-between;
    margin-top: 50px;
    padding-bottom: 50px;
    border-bottom: 1px solid #DDDDDD;
    font-size: 16px;

  }

  .addressItem .address div:nth-child(1) span {
    margin-left: 30px;
  }

  .addressItem .address div:nth-child(1) p:nth-child(2) {
    color: #999999;
    font-size: 14px;
    margin-top: 4px;
  }

  .addressItem .address div:nth-child(2) {
    width: 20%;
    justify-content: space-evenly;
    align-items: center;
  }

  .addressItem .address div:nth-child(2) p {
    color: #999999;
    opacity: 0.4;
    width: 64px;
  }

  .addressItem .address div:nth-child(2) .edit {
    width: 15%;
  }

  .orderContent .addAddress {
    align-items: center;
    margin-top: 40px;
    padding-bottom: 10px;
  }

  .orderContent .addAddress div {
    width: 5%;
  }

  .orderContent .addAddress p {
    color: #FFAB36;
    font-size: 20px;
  }

  html, body {
  }

  .cover {
    width: 100%;
    height: 1438px;
    background: rgba(19, 19, 19, .3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 80;
  }

  .handleBtn {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .handleBtn button {
    width: 60px;
    height: 25px;
    border-radius: 4px;
    outline: none;
  }

  .handleBtn button:nth-child(1) {
    margin-right: 20px;
    border: 1px solid #666666;
    background: #fff;
  }

  .handleBtn button:nth-child(2) {
    border: none;
    color: #fff;
    background: #FFAB36;
  }

  .handleContent {
    width: 100%;
    padding: 20px 30px;
    /*height: 210px;*/
  }


  .handleContent .info {
    width: 90%;
    margin-left: 20px;
  }

  .handleContent .info div {
    width: 100%;
    margin-bottom: 20px;
  }

  .handleContent .info div span {
    text-align: right;
    width: 60px;
    display: inline-block;
  }


  .handleContent .info div:last-child {
    margin-bottom: 0;
  }


  .handleContent .info div input[type="text"],
  .handleContent .info div input[type="number"] {
    width: 84%;
    border: 1px solid #E9E9E9;
    border-radius: 4px;
    text-indent: 10px;
    height: 25px;
  }

  .handleContent .info div.sex {
    padding: 0 60px;
  }

  .handleContent .info div.sex label {
    margin-right: 30px;
  }

  .handleContent .info div.sex label input {
    margin-right: 10px;
  }

  .goodsHandle {
    width: 500px;
    background: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -40%);
    z-index: 99;
    padding: 0 0 10px 0;
  }

  .goodsHandle .handleTitle {
    width: 100%;
    height: 40px;
    background: #FFAB36;
    position: relative;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
  }

  .goodsHandle .handleTitle img {
    height: 80%;
    text-align: right;
    position: absolute;
    right: 5px;
    top: 4px;
  }
</style>