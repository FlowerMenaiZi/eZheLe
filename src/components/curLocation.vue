<template>
  <div class="curLocation">
    <p>
      <slot name="first"></slot>
      <slot name="second"></slot>
      <slot name="third"></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: "curLocation"
  }
</script>

<style scoped>

</style>