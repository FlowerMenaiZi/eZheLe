<template>
  <div class="loginPublic">
    <h3>{{title}}</h3>
    <div class="login">
      <div class="loginLeft">
        <div class="left">
          <div class="rightBor">
            <input type="text" placeholder="手机号" class="phone" v-show="isShowPhone" ref="phone">
            <input type="email" placeholder="饿着了账号" class="phone" v-show="isAccountShow" ref="email">
          </div>
          <div class="rightBor">
            <input type="password" placeholder="密码" class="password rightBor" v-show="isAccountShow" ref="password">
          </div>
          <div class="rightBor" style="text-align: left;">
            <input type="text" placeholder="验证码" class="code" v-show="isShowCode" ref="code">
            <button class="getCode" v-show="isShowCode" @click="getPhoneCode" :disabled="isDisabled"
                    :class="{disabled:isDisabled}">
              {{codeBtnText}}
            </button>
            <button class="getCode" v-show="!isShowCode" @click="showCode" style="margin-left: 0;">{{checkStatus}}<img
                    src="~assets/icon/success.png" alt="" style="width: 15%;vertical-align: middle" v-show="imgShow">
            </button>
            <Vcode :show="isShowVcode" @success="success" @close="close"></Vcode>
          </div>
          <div class="loginMethod">
            <a @click="changeAccount" style="cursor: pointer;">{{loginMethod}}</a>
            <router-link to="/forget"><a>忘记密码</a></router-link>
          </div>
          <div class="tips">
            未注册的饿着了官网账户的手机号,在使用验 证码登录时将自动注册。
          </div>
          <div class="agree">
            <input type="checkbox" name="agree" @click="agreeClick" :checked="isAgree">
            <p>我已阅读并接受<span>个人信息收集声明</span>以及<span>网站使用和销售条款</span></p>
          </div>`
          <div>
            <button id="loginBtn" @click="loginClick">登录</button>
          </div>
        </div>
      </div>
      <div class="centerBor"></div>
      <div class="loginRight">
        <div class="right">
          <div>
            注册饿着了帐户
          </div>
          <div>
            注册饿着了账号以便追踪您的订单， 管理收货地址，获取更多个性化信息
          </div>
          <div>
            <router-link to="/register">
              <button id="regBtn">
                注册
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vcode from "vue-puzzle-vcode";

  import {checkAll} from "common/mixin";

  export default {
    name: "usePublic",
    components: {
      Vcode
    },
    mixins: [checkAll],
    data() {
      return {
        isShowPhone: true,  //显示手机登录
        isAccountShow: false,  //显示账户登录
        loginMethod: '饿着了账户登录',
        isShowCode: true,  //显示验证码按钮
        isDisabled: false,  //发送验证码按钮是否禁用
        codeBtnText: '发送验证码',
        title: '手机号码登录',
        isAgree: false,  //是否同意个人信息采集声明
        phone:''
      }
    },
    methods: {
      //切换饿着了或者手机号码登录
      changeAccount() {
        this.isAccountShow = !this.isAccountShow
        this.isShowPhone = !this.isShowPhone
        this.isShowCode = !this.isShowCode
        this.isAgree = false
        if (!this.isShowPhone) {
          this.loginMethod = '手机号登录'
          this.checkStatus = '点击验证'
          this.imgShow = false
          this.title = '饿着了账户登录'
        } else {
          this.loginMethod = '饿着了账户登录'
          this.title = '手机号码登录'
        }
      },
      //是否同意网站协议
      checkAgree() {
        if (!this.isAgree) {
          this.showToast('请先同意网站使用和销售条款')
          return false
        } else {
          return true
        }
      },
      //获取手机验证码
      getPhoneCode() {

        if (this.checkPhone()) {
          //在这里进行发送手机验证码并获取后台返回的验证码进行判断
          this.isDisabled = true
          let sec = 60
          this.codeBtnText = '重新发送（' + sec + '）'
          var timer = setInterval(() => {
            sec--
            this.codeBtnText = '重新发送（' + sec + '）'
            if (sec === 0) {
              this.isDisabled = false
              this.codeBtnText = '重新发送'
              clearInterval(timer)
            }
          }, 1000)
        }
      },

      //网站协议同意
      agreeClick() {
        this.isAgree = !this.isAgree
      },
      //检查是否填写密码
      checkPassword() {
        if (this.$refs.password.value === '') {
          this.showToast('请填写您的密码')
          return false
        } else {
          return true
        }
      },
      //是否填写验证码
      checkCode() {
        if (this.$refs.code.value === '') {
          this.showToast('请填写验证码')
          return false
        } else {
          return true
        }
      },

      //点击登录按钮验证
      loginClick() {
        this.phone = this.$refs.phone.value
        if (this.isShowPhone) {
          this.phone = this.$refs.phone.value
          if (this.checkPhone() && this.checkCode() && this.checkAgree()) {
            this.showToast('验证通过')
          }
        } else {
          if (this.checkEmail() && this.checkPassword() && this.checkImgCode() && this.checkAgree()) {
            this.showToast('验证通过')
          }
        }
      },

    }
  }
</script>

<style scoped>
  .centerBor {
    margin-top: 40px;
    height: 200px;
    width: 2px;
    background: #D1D1D1;
  }

  .loginPublic {
    width: 100%;
  }

  h3 {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    line-height: 80px;
  }

  .login {
    width: 1200px;
    margin: 0 auto;
    padding: 40px;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 0 10px #bdbdbd;
    display: flex;
  }

  .loginLeft {
    width: 50%;
    padding: 50px 0 20px 0;
    text-align: center;
  }

  .loginLeft .left {
    width: 60%;
    margin: 0 auto;
  }

  .loginLeft .phone, .loginLeft .code, .loginLeft .password {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    text-indent: 20px;
    outline: none;
    border: 1px solid #E6E6E6;
  }

  .loginLeft .code {
    width: 60%;
  }

  .loginLeft .getCode {
    width: 37%;
    height: 40px;
    background: #FFAB36;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    outline: none;
  }

  .loginLeft .loginMethod {
    display: flex;
    justify-content: space-between;
  }

  .loginLeft .tips {
    text-align: left;
  }


  .disabled {
    background: #b6b6b6 !important;
  }

  .loginLeft .agree {
    display: flex;
    justify-content: space-around;
    position: relative;
  }

  .loginLeft .agree input {
    position: absolute;
    top: 4px;
    left: 0;
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    background: none;
  }

  input[type=checkbox]:after {
    position: absolute;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    top: 0;
    content: " ";
    border: 1px solid #FFAB36;
    color: #fff;
    display: inline-block;
    visibility: visible;
    padding: 0px 3px;
    border-radius: 2px;
  }

  input[type=checkbox]:checked:after {
    content: "✓";
    font-size: 12px;
    background: #FFAB36;
  }

  .loginLeft .agree p {
    width: 85%;
    text-align: left;
    color: #999;
    margin-left: 20px;
  }

  .loginLeft .agree p span {
    color: black;
  }

  .loginLeft #loginBtn {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    color: #fff;
    background: #ffab36;
    outline: none;
    border: none;
    font-size: 16px;
  }

  .loginLeft div {
    margin-bottom: 30px;
  }

  .loginRight {
    width: 50%;
  }

  .loginRight .right {
    width: 60%;
    margin: 0 auto;
    padding: 10px 0;
    color: #797979;
  }

  .loginRight .right div:nth-child(2) {
    margin: 60px 0;
  }

  .loginRight .right #regBtn {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    color: #ffab36;
    background: none;
    outline: none;
    border: 2px solid #ffab36;
    font-size: 16px;

  }
</style>