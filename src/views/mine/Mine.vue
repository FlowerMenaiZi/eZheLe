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
            <p>我的设置</p>
          </div>
          <div class="disf about">
            <div class="disf">
              <span class="portrait"><img src="~assets/image/touxiang.png" alt=""></span>
              <p>更换</p>
            </div>
            <div>
              <p @click="showInfo">
                个人信息
                <img src="~assets/icon/myInfo.png" alt=""
                     style="vertical-align: text-top;margin-left: 20px;transition: all 0.2s ease-in;"
                     :class="{showInfo:isShowInfo}">
              </p>
            </div>
          </div>
        </div>
        <div class="myInfo" v-show="isShowInfo">
          <div class="myInfoTitle">
            <p>个人信息</p>
          </div>
          <!--          昵称——称谓-->
          <div class="disf userName">
            <div>
              <label>昵称*</label>
              <input type="text" placeholder="请输入昵称">
            </div>
            <div>
              <label>称谓</label>
              <select name="sex">
                <option value="man">男士</option>
                <option value="women">女士</option>
              </select>
            </div>
          </div>
          <!--          生日-->
          <div class="birthday">
            <label>生日</label>
            <a-date-picker @change="onChange" placeholder="请选择生日" :showToday="false" :disabledDate="disabledDate"/>
            <span class="tip">生日确认后，不得更改，如有需要和客服联系。</span>
          </div>
          <!--          邮箱——手机号-->
          <div class="userEmail userName disf">
            <div>
              <label class="email">邮箱</label>
              <input type="text" placeholder="邮箱">
            </div>
            <div>
              <label class="phone">手机号</label>
              <input type="number" placeholder="手机号码">
            </div>
          </div>
          <!--          修改密码——保存-->
          <div class="allBtn disf" style="justify-content: space-between">
            <div>
              <button class="changePass">修改密码</button>
            </div>
            <div>
              <button class="cancel">取消</button>
              <button class="save">保存</button>
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
  import 'ant-design-vue/dist/antd.css';

  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";
  import Footer from "components/Footer";

  import mineNav from "./child/mineNav";

  export default {
    name: "Mine",
    components: {
      HeaderLogo,
      Copyright,
      Footer,
      mineNav,
    },
    data() {
      return {
        isShowInfo: false
      }
    },
    methods: {
      showInfo() {
        this.isShowInfo = !this.isShowInfo
      },
      onChange(date, dateString) {
        console.log(date, dateString);
      },
      disabledDate(current) {
        return current && current > Date.now();
      },
    },

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

  .rightContent {
    width: 80%;
  }

  .defaultShow {
    margin-left: 40px;
    width: 100%;
    height: 230px;
    background: #fff;
    padding: 30px 40px;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
  }

  .myInfo {
    margin-top: 40px;
    margin-left: 40px;
    background: #fff;
    width: 100%;
    padding: 30px 40px;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
  }

  .defaultShow .title {
    width: 100%;
    height: 50px;
    font-size: 20px;
  }

  .defaultShow .about {
    align-items: center;
    justify-content: space-between;
  }

  .defaultShow .about div:nth-child(1) {
    align-items: center;
  }

  .defaultShow .about div:nth-child(1) span {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #F2F2F2;
    text-align: center;
    margin-right: 50px;
  }

  .defaultShow .about div:nth-child(1) span img {
    margin-top: 11px;
  }

  .showInfo {
    transition: all 0.2s ease-in;
    transform: rotateZ(90deg);
  }

  .myInfoTitle {
    font-size: 20px;
  }

  .userName {
    margin-top: 40px;
  }

  .userName label {
    margin-right: 40px;
  }

  .userName input {
    width: 194px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-indent: 10px;
  }

  .userName select {
    width: 100px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
  }

  .userName div:nth-child(1) {
    margin-right: 60px;
  }

  .birthday {
    margin-top: 40px;
  }

  .birthday label {
    margin-right: 45px;
  }

  .birthday span.tip {
    color: #999999;
    margin-left: 60px;
    font-size: 12px;
  }

  .userEmail label.email {
    margin-right: 45px;
  }

  .userEmail label.phone {
    margin-right: 28px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
  .allBtn{
    margin-top: 40px;
  }
  .allBtn button{
    height: 25px;
    outline: none;
    border-radius: 4px;
    width:70px;
    border: 1px solid #CFCFCF;
    background: #fff;
  }
  .allBtn .changePass{
    width: 90px;
  }
  .allBtn .cancel{
    margin-right: 20px;
  }
  .allBtn .save{
    background: #FFAB36;
    border: none;
    color: #fff;
  }
</style>