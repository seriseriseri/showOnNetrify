<template>
  <div class="reservation" id="reservation">
    <h1 class="title is-1 has-text-centered"><b-icon pack="fas" icon="stethoscope" class="has-text-primary"></b-icon>  けんしん</h1>
    <div class="columns is-centered">
      <div class="column is-6">
        <p class="block">
        がんは、早期に発見できれば治る可能性の高い病気です。<br>
        定期的に健診を受けることで、病気を早期に発見し、早期に治療することが出来ます。<br>
        いつまでも健康的な生活を送るために、健診を受けてご自身の身体をチェックしましょう。<br>
        </p>
        <p class="block">
        職場などで健診を受ける機会がなく、対象年齢となる青空市民の方は、<br>
        青空市の検診を受診することができます。<br>
        お申し込みをご希望の方は、下の「予約登録」ボタンを押してください。
        </p>
        <p class="block">
        ※初回お申込み時にはアカウント登録が必要です。
        </p>
        <p class="block">
        ※現在の空き状況を確認したい場合は、「空き状況確認」ボタンを押してください。
        </p>
        <p class="block"></p>
        <div class="buttons">
          <button class="button is-primary is-medium is-fullwidth" @click="doNavigate('/login')">予約画面に進む</button>
          <button class="button is-primary is-medium is-fullwidth" @click="doNavigate('/reservationSearch')">空き状況を確認する</button>
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

<style lang="scss" scoped>
@import '@/assets/styles/_koyamastyle.scss'; //カスタムテーマ
// .has-padding{
//   padding: 10px;
// }
</style>