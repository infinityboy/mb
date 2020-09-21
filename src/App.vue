<!--
 * @Descripttion: 
 * @version: 
 * @Author: infinityboy
 * @Date: 2020-02-05 14:37:56
 * @LastEditors: infinityboy
 * @LastEditTime: 2020-09-21 10:30:24
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="postcss">
img {
  content: normal !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
