<template>
  <div class="seller">
    <HeaderLogo>
      <div slot="search">
        <p>——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
    <div class="sellerMain">
      <div><h3>商家登录</h3></div>
      <div class="sellerContent">
        <div><input type="text" placeholder="账号" ref="account"></div>
        <div><input type="password" placeholder="密码" ref="password"></div>
        <div>
          <button @click="sellerLogin">登录</button>
        </div>
      </div>
    </div>
    <Copyright class="copyright"></Copyright>
  </div>
</template>

<script>
  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";


  export default {
    name: "Seller",
    components: {
      HeaderLogo,
      Copyright
    },
    methods: {
      //点击登录
      sellerLogin() {
        if (this.$refs.account.value === '' || this.$refs.password.value === '') {
          this.showToast('账号或密码不得为空')
        } else {
          //  进行登录操作
          this.$router.push('/admin')
          this.setCookie('admin',this.$refs.account.value,86400)
        }
      },
      //显示错误信息
      showToast(message) {
        this.$swal({
          text: message
        })
      },
      setCookie(key, value, t) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + t);
        document.cookie = key + "=" + value + "; expires=" + oDate.toDateString();
      },
    }
  }
</script>

<style scoped>
  .copyright {
    position: fixed;
    bottom: 0;
  }

  .seller {
    width: 100%;
    height: calc(100vh - 20px);
    position: relative;
  }

  .sellerMain {
    width: 1200px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sellerMain div h3 {
    font-size: 25px;
    margin-bottom: 10px;
  }

  .sellerMain .sellerContent {
    width: 35%;
    padding: 30px 0;
    background: #fff;
    box-shadow: 0 0 10px #adadad;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sellerMain .sellerContent div {
    margin-top: 35px;
  }

  .sellerMain .sellerContent input {
    width: 250px;
    height: 30px;
    outline: none;
    border: 1px solid #D3D3D3;
    border-radius: 4px;
    text-indent: 20px;
  }

  .sellerMain .sellerContent button {
    width: 250px;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 20px;
    background: #FFAB36;
    color: #fff;
  }

  p {
    color: #fff;
  }
</style>