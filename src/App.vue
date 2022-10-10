<template>
  <div>
    <router-link :to="{ path:'/foo',query:{age:18,gender:'male'}}">Foo</router-link>|
    <router-link :to="'/bar'+bookId">Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import { query } from 'express';

export default {
  data() {
    return {
      bookId: 1
    }
  }
}
</script>

<style scoped>
.router-link-active {
  background-color: red;

}
</style>