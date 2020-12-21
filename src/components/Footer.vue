<template>
  <div id="footer">
    <div class="footer">
      <ul class="disf first">
        <li>
          <ul>
            <li><a href=""><h3>用户帮助</h3></a></li>
            <li><a href="">商家入驻</a></li>
            <li><a href="">常见问题</a></li>
            <li><a href="">用户协议</a></li>
            <li><a href="">反诈骗公告</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li><a href=""><h3>售后服务</h3></a></li>
            <li><a href="">售后政策</a></li>
            <li><a href="">价格保护</a></li>
            <li><a href="">退款说明</a></li>
            <li><a href="">取消订单</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li><a href=""><h3>配送方式</h3></a></li>
            <li><a href="">上门自提</a></li>
            <li><a href="">211限时送</a></li>
            <li><a href="">配送方式查询</a></li>
            <li><a href="">配送费收取标准</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li><a href=""><h3>服务热线</h3></a></li>
            <li><a href="">联系客服</a></li>
            <li><a href="">外卖消费者：10109777</a></li>
            <li><a href="">其他消费者：10107888</a></li>
            <li><a href="">外卖&餐饮商家：10105557</a></li>
          </ul>
        </li>
      </ul>
      <ul class="disf second">
        <li><a href="">关于我们</a></li>
        <li><a href="">联系我们</a></li>
        <li><a href="">联系客服</a></li>
        <li><a href="">合作招商</a></li>
        <li><a href="">商家帮助</a></li>
        <li><a href="">营销中心</a></li>
        <li><a href="">营销联盟</a></li>
        <li><a href="">风险监测</a></li>
        <li><a href="">隐私政策</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  #footer {
    width: 100%;
    background: #323232;
    padding: 20px 0;
    margin-top: 40px;
    min-width: 1200px;
  }

  #footer .footer {
    width: 1200px;
    margin: 0 auto;
  }

  #footer .footer ul {
    width: 100%;
    justify-content: space-between;
  }

  #footer .footer .first li h3 {
    font-size: 18px;
  }

  #footer .footer .first li a {
    font-size: 14px;
    color: #fff;
  }

  #footer .footer ul li ul li {
    line-height: 40px;
  }

  #footer .footer .second {
    margin: 20px 0;
  }

  #footer .footer .second li {
    flex: 1;
    text-align: center;
    border-right: 1px solid #fff;
  }

  #footer .footer .second li:last-child {
    border-right: none;
  }

  #footer .footer .second li a {
    color: #fff;
  }
</style>