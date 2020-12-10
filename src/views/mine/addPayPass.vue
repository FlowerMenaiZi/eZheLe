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
        <div class="defaultShow">
          <div class="title">
            <p>添加支付密码</p>
          </div>
          <div class="disf payPass">
            <div class="threeStep">
              <label>验证码： </label>
              <span><button class="getCode" @click="showCode">{{checkStatus}}<img
                      src="~assets/icon/success.png" alt="" style="width: 15%;vertical-align: middle" v-show="imgShow"></button></span>
              <Vcode :show="isShowVcode" @success="success" @close="close"></Vcode>
            </div>
            <div class="threeStep"><label>支付密码：</label><input type="password" ref="password"></div>
            <div class="threeStep"><label>确认支付密码：</label><input type="password" ref="repPassword"></div>
            <div>
              <button class="realAdd" @click="readAdd">确认添加</button>
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
  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";
  import Footer from "components/Footer";

  import {checkAllPass} from "common/mixin";

  import mineNav from "./child/mineNav";
  import Vcode from "vue-puzzle-vcode";

  export default {
    name: "addPayPass",
    components: {
      HeaderLogo,
      Copyright,
      Footer,
      mineNav,
      Vcode
    },
    mixins: [checkAllPass],
    data() {
      return {
        isShowVcode: false,
        imgShow: false,
        checkStatus: '点击验证'
      }
    },
    methods: {
      //显示验证码
      showCode() {
        this.isShowVcode = true
      },
      //验证码成功
      success() {
        this.isShowVcode = false
        this.imgShow = true
        this.checkStatus = '验证成功'
      },
      //点击遮罩隐藏验证码
      close() {
        this.isShowVcode = false;
      },
      readAdd() {
        if (this.checkImgCode() && this.checkPassword() && this.checkRepPass()) {
          this.showToast('添加成功')
        }
      },
      //图片验证是否通过
      checkImgCode() {
        if (!this.imgShow) {
          this.showToast('请进行验证')
          this.showCode()
          return false
        } else {
          return true
        }
      },
    }
  }
</script>

<style scoped>
  .mineTitle {
    width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }

  .mineContent {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .defaultShow {
    margin-left: 40px;
    width: 100%;
    height: 330px;
    background: #fff;
    padding: 30px 40px;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
  }

  .defaultShow .payPass {
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .defaultShow .payPass label {
    display: inline-block;
    width: 100px;
    height: 32px;
    text-align: right;
  }

  .defaultShow p {
    font-size: 20px;
  }

  .defaultShow .payPass .threeStep {
    height: 32px;
    line-height: 32px;
  }

  .defaultShow .payPass .threeStep input {
    height: 32px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-indent: 10px;
  }

  .defaultShow .payPass .threeStep {
    margin-top: 20px;
  }

  .rightContent {
    width: 76%;
  }

  .getCode {
    width: 173px;
    height: 32px;
    background: #FFAB36;
    color: #fff;
    border: none;
    border-radius: 4px;
    outline: none;
  }

  .realAdd {
    width: 100px;
    height: 30px;
    background: #FFAB36;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 4px;
    margin-top: 30px;
  }
</style>