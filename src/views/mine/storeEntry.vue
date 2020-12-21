<template>
  <div>
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
          <p class="title">店铺入驻</p>
          <p class="title">
            选择您的店铺类型
            <label for="dinner">
              <input type="radio" name="catering" id="dinner" @click="changeDinner">
              正餐类
            </label>
            <label for="fast">
              <input type="radio" name="catering" id="fast" @click="changeFast">
              快餐类
            </label>
          </p>
          <div class="disf businessImg">
            <div class="imgContent">
              <p>店铺主照片</p>
              <label for="userImg">
                <div class="photo">
                  <input type="file" style="display: none;" id="userImg" accept=".png,.jpg,.jpeg,.webp,.gif">
                </div>
              </label>
            </div>
            <div class="imgContent">
              <p>店铺营业执照照片</p>
              <label for="License">
                <div class="photo">
                  <input type="file" style="display: none;" id="License" accept=".png,.jpg,.jpeg,.webp,.gif">
                </div>
              </label>
            </div>
          </div>
          <div class="disf legalImg">
            <div class="imgContent">
              <p>法人证件</p>
              <div class="disf con">
                <label for="positive">
                  <div class="photo">
                    正面
                    <input type="file" style="display: none;" id="positive" accept=".png,.jpg,.jpeg,.webp,.gif">
                  </div>
                </label>
                <label for="back">
                  <div class="photo">
                    反面
                    <input type="file" style="display: none;" id="back" accept=".png,.jpg,.jpeg,.webp,.gif">
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="disf name">
            <div>
              <span>店铺命名</span>
              <input type="text" ref="storeName">
            </div>
            <div>
              <span>联系电话</span>
              <input type="number" ref="tel">
            </div>
          </div>
          <div class="time disf">
            <span class="title">营业时间</span>
            <a-time-picker use24-hours format="hh:mm a" @change="onChangeFir" ref="timeFirst" placeholder="请选择时间"/>
            至
            <a-time-picker use24-hours format="hh:mm a" @change="onChangeSec" ref="timeSecond" placeholder="请选择时间"/>
          </div>
          <div class="address">
            <span>店铺详细地址</span>
            <input type="text" ref="address">
          </div>
          <div class="desc">
            <span>店铺简介</span>
            <textarea name="" id="" ref="desc"></textarea>
          </div>
          <div class="btn">
            <button class="cancel" @click="cancel">取消</button>
            <button class="upload" @click="upload">上传</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script>
  import mineNav from "./child/mineNav";
  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";
  import Footer from "components/Footer";

  import 'ant-design-vue/dist/antd.css';
  import moment from 'moment'

  export default {
    name: "storeEntry",
    components: {
      HeaderLogo,
      Copyright,
      Footer,
      mineNav,
    },
    data() {
      return {
        firstTime: '',
        secondTime: '',
        storeName: '',
        tel: '',
        address: '',
        desc: '',
        catering:'',
      }
    },
    methods: {
      onChangeFir(time, timeString) {
        this.firstTime = timeString
      },
      onChangeSec(time, timeString) {
        this.secondTime = timeString
      },
      upload() {
        this.storeName = this.$refs.storeName.value
        this.address = this.$refs.address.value
        this.desc = this.$refs.desc.value
        if (!this.storeName || !this.address || !this.desc || !this.firstTime || !this.secondTime || !this.catering) {
          this.showToast('所有信息为必填')
        } else if (this.checkPhone()) {
          this.showToast('通过')
        }
      },
      //验证手机号码是否填写且合法性
      checkPhone() {
        this.tel = this.$refs.tel.value
        if (this.tel === '') {
          this.showToast('请先填写手机号码')
          return false
        } else if (!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.tel))) {
          this.showToast('请先填写正确的手机号码')
          return false
        } else {
          return true
        }
      },
      cancel() {
        this.$refs.storeName.value = ''
        this.$refs.address.value = ''
        this.$refs.desc.value = ''
        this.$refs.tel.value = ''
      },
      changeDinner(){
        this.catering = '正餐类'
      },
      changeFast(){
        this.catering = '快餐类'
      },
      showToast(message) {
        this.$swal({
          text: message
        })
      }
    }
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

  .orderContent p.title:nth-child(2) label {
    color: #FFAB36;
  }

  .orderContent p.title:nth-child(2) label:nth-child(1) {
    margin-left: 100px;
    margin-right: 20px;
  }

  .orderContent .businessImg, .orderContent .legalImg {
    width: 100%;
    margin-top: 30px;
  }

  .orderContent .businessImg p, .orderContent .legalImg p {
    font-size: 18px;
    margin-bottom: 30px;
  }

  .orderContent .businessImg .imgContent {
    width: 48%;
  }

  .orderContent .businessImg .imgContent:nth-child(2) {
    margin-left: 40px;
  }

  .orderContent .businessImg .imgContent div {
    width: 100%;
    height: 250px;
    border: 1px solid #DDDDDD;
    border-radius: 6px;
  }

  .orderContent .legalImg .imgContent {
    width: 100%;
  }

  .orderContent .legalImg .con {
    width: 100%;
    justify-content: space-between;
  }

  .orderContent .legalImg .con label {
    width: 47.5%;
  }

  .orderContent .legalImg .con div {
    width: 100%;
    height: 250px;
    border: 1px solid #DDDDDD;
    border-radius: 6px;
    text-align: center;
    line-height: 250px;

    font-size: 40px;
    font-weight: bold;
    color: #EBEBEB;
  }

  .orderContent .name {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }

  .orderContent .name div {
    width: 48%;
  }

  .orderContent .name div span {
    width: 25%;
    display: inline-block;
    font-size: 16px;
  }

  .orderContent .name div input {
    height: 32px;

    border: 1px solid #D3D3D3;
    border-radius: 4px;
    text-indent: 10px;
  }

  .orderContent .time {
    width: 53%;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    margin-top: 20px;
  }

  .orderContent .address {
    width: 100%;
    font-size: 16px;
    margin-top: 20px;
  }

  .orderContent .address span {
    width: 15%;
    display: inline-block;
  }

  .orderContent .address input {
    height: 32px;
    width: 85%;
    border: 1px solid #D3D3D3;
    border-radius: 4px;
    text-indent: 10px;
  }

  .orderContent .desc {
    width: 100%;
    font-size: 16px;
    margin-top: 20px;
  }

  .orderContent .desc span {
    width: 15%;
    display: inline-block;
    vertical-align: top;
  }

  .orderContent .desc textarea {
    width: 85%;
    resize: none;
    border: 1px solid #D3D3D3;
    border-radius: 4px;
    text-indent: 10px;
    height: 80px;
    outline: none;
  }

  .orderContent input, .orderContent textarea {
    transition: all .2s !important;
  }

  .orderContent input:hover, .orderContent textarea:hover {
    border: 1px solid #FFAB36 !important;
    transition: all .2s !important;
  }

  .orderContent .btn {
    text-align: right;
    margin-top: 20px;
  }

  .orderContent .btn button {
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 4px;
    outline: none;
  }

  .orderContent .btn button:nth-child(1) {
    background: #fff;
    border: 1px solid #CFCFCF;
    margin-right: 20px;
  }

  .orderContent .btn button:nth-child(2) {
    background: #ffab36;
    color: #fff;
  }
</style>