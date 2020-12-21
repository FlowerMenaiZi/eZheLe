<template>
  <div id="copyright">
    <div class="copyright">
      <p>copyright©世赛小组</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Copyright"
  }
</script>

<style scoped>
  #copyright {
    width: 100%;
    background: #000000;
    padding: 5px;
    min-width: 1200px;
  }

  #copyright .copyright {
    width: 1200px;
    margin: 0 auto;
  }

  #copyright .copyright p {
    color: #fff;
    text-align: center;
  }
</style>