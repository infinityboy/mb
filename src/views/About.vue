<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="main">
      移动端适配
    </div>
    <van-button type="default">默认按钮</van-button>
  </div>
</template>
<style lang="postcss" scoped>
.main {
  width: 200px;
  height: 400px;
  background-color: #fff;
  font-size: 24px;
}
.ignore {
  margin: 10px;
  background-color: red;
}
.hairlines {
  border-bottom: 0.5px solid blue;
}
@svg 1px-border {
  height: 2px;
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
  }
}
.main {
  border: 1px solid transparent;
  border-image: svg(1px-border param(--color #00b1ff)) 2 2 stretch;
}
[w-200-400] {
  width: 200px;
}
</style>
