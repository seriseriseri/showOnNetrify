<template>
  <div class="reservation2" id="reservation2">
    <h1 class="title is-1 has-text-centered"><b-icon pack="fas" icon="edit" class="has-text-primary"></b-icon>  健康希望調査</h1>
    <div class="columns is-centered">
      <div class="column is-6">
        <p class="block">
        <p>
            2020年度青空市個別検診の受診を希望される方は、事前に申し込みが必要です。<br>
            下の[予約に進む]を選択して申し込みを行ってください。申し込み後、2週間を目途に受診券を郵送します。<br>
            受診券が到着してから医療機関で予約をお取りください。
        </p>
        <p class="block"></p>
        <div class="buttons">
          <button class="button is-primary is-medium is-fullwidth" @click="doNavigate('/login')">予約画面に進む</button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    doNavigate: function (url) {
      this.$router.push(url);
    }
  }
}
</script>

<style lang="scss">
// .has-padding{
//   padding: 10px;
// }
</style>