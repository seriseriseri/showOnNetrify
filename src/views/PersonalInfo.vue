<template>
<div class="personalInfo" id="personalInfo">
    <div class="columns is-centered">
        <div class="column is-6">
            <GoBackToPage/>
            <div class="tile is-ancestor has-padding">
                <div class="tile is-vertical is-parent">
                    <div class="tile is-child box">
                        <p class="has-padding">健康  太郎 様</p>
                        <p class="has-padding">2020年11月13日生  男性</p>
                    </div>
                    <div class="buttons">
                        <button class="button is-primary is-medium is-fullwidth" @click="doNavigate('/reservationQuestion')">予約を申し込む</button>
                        <button class="button is-primary is-medium is-fullwidth">予約内容を確認する</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import GoBackToPage from '../components/GoBackToPage.vue';

export default {
  components: { GoBackToPage },
  methods: {
    doNavigate: function (url) {
      this.$router.push(url);
    }
  }
}
</script>

<style lang="scss">
.has-padding{
    padding: 10px;
}
</style>