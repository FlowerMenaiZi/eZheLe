<template>
  <div class="paginate_container">
    <paginate
            :page-count="pageCount"
            :margin-pages="marginPages"
            :page-range="rangePage"
            :initial-page="initPage"
            :click-handler="pageEvent"
            prev-text="<"
            next-text=">"
            :container-class="'pagination'"
            :page-class="'page-link-li'"
            :page-link-class="'page-link-a'"
            :prev-class="'prev-link'"
            :prev-link-class="'prev-link-a'"
            :next-class="'next-link'"
            :next-link-class="'next-link-a'"
    >
    </paginate>
  </div>
</template>

<script>
  import paginate from "vuejs-paginate"
  export default {
    props:{
      pageCount:Number,
      marginPages:Number,
      rangePage:Number,
      initPage:Number,
    },
    components: { paginate },
    methods: {
      pageEvent: function(e) {
        this.$emit("pageEvent", e); //将值放在自定义的事件函数中作为参数
      }
    },
  }
</script>
<style>
  .paginate_container{
    width: 100%;
    margin-top: 20px;
  }
  .pagination {
    width: 80%;
    margin: 0 auto;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul.pagination > li.active{
    width: 35px;
    height: 35px;
    background: #FFAB36;
    text-align: center;
    line-height: 35px;
    border-radius:6px;
  }
  ul.pagination > li.active > a{
    color: #fff;
  }
  .page-link-li{
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border-radius:6px;
    background: #fff;
  }
  .page-link-li a{
    color: #FFAB36;
    outline: none;
  }
  .next-link a,.prev-link a{
    font-size: 25px;
    color: #FFAB36;
    outline: none;
  }
</style>