<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
</script>

<style lang="scss">
//  @import './assets/styles/_koyamastyle.scss'; //カスタムテーマ


html {
  height: 100%;
  background-color:seashell;
}

body {
  min-height: 100%;
  position: relative;
  padding-bottom: 50px;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","Meiryo","メイリオ","ＭＳ Ｐゴシック",Verdana,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
