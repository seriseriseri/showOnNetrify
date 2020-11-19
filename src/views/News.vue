<template>
  <div class="news" id="news">
    <div class="block">
      <div class="has-text-centered">
        <b-icon class="icon" pack="fas" icon="bell" size="fa-3x" type="is-primary"></b-icon>
        <h3 class="title is-1">  お知らせ</h3>
      </div>
    </div>
    <div class="block">
      <div class="columns is-centered is-multiline">
        <div class="column is-6">
          <article class="message is-primary">
            <div class="message-header">
              <p>
                <b-icon pack="fas" icon="exclamation-circle" size="fa-lg"></b-icon>
                2020年11月12日 令和2年度 ○○健康診査開始のお知らせ
              </p>
              <!-- <button class="delete" aria-label="delete"></button> -->
            </div>
            <div class="message-body">
              <div class="block">
                実施期間： 2020年12月25日から12月30日まで
              </div>
              <div class="block">
                対象者： 予約をされた方のみ
              </div>
              <div class="block">
                受付時間： 午前  9時から12時まで
              </div>
            </div>
          </article>
          <article class="message is-primary">
            <div class="message-header">
              <p>2020年11月10日  「▲▲健診」受診予約について</p>
              <!-- <button class="delete" aria-label="delete"></button> -->
            </div>
            <div class="message-body">
              <p>「▲▲健診」の予約期間は終了しました。<br>
              次回の予約受付については決まり次第お知らせいたします。
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
// .has-padding{
//     padding: 10px;
// }
  .icon {
    vertical-align: middle;
  }
  h3{
    display: inline-block;
    vertical-align: middle;
    // font-size: 21px;
    font-weight: bold;
    padding: 0 10px;
  }
</style>