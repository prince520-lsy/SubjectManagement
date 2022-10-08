<template>
  <div>
    <router-link to="/foo">Foo</router-link>|
    <router-link to="/bar">Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-active {
  background-color: red;

}
</style>