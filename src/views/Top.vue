<template>
  <div class="home">
    <div class="block"></div>
    <div class="columns is-centered is-tablet">
      <div class="column is-3" id="column1">
        <div class="card has-text-centered size">
          <div class="card-content">
            <div class="card-title block">
              <h1 class="title is-4">お知らせ</h1>
            </div>
            <div class="card-icon has-text-primary block">
              <b-icon pack="fas" icon="bell" size="fa-3x"></b-icon>
            </div>
            <div class="card-text block">
              <p>青空市からのお知らせを確認します。</p>
            </div>
          </div>
          <footer class="card-footer">
            <button class="button is-fullwidth" @click="doNavigate('/news')">お知らせ</button> 
          </footer>
        </div>
      </div>
      <div class="column is-3" id="column2">
        <div class="card has-text-centered">
          <div class="card-content">
            <div class="card-title block">
              <h1 class="title is-4">けんしん</h1>
            </div>
            <div class="card-icon has-text-primary block">
              <b-icon pack="fas" icon="stethoscope" size="fa-3x"></b-icon>
            </div>
            <div class="card-text block">
              <p>けんしんの予約・空き状況の確認をします。</p>
            </div>
          </div>
          <footer class="card-footer">
            <button class="button is-fullwidth" @click="doNavigate('/reservation')">予約をする</button>
            <button class="button is-fullwidth" @click="doNavigate('/')">空き状況を確認する</button>
            <!-- <p class="card-footer-item">
              <span>
                <a href="/Reservation">予約をする</a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                <a id="font-small" href="#">空き状況を確認する</a>
              </span>
            </p> -->
          </footer>
        </div>
      </div>
      <div class="column is-3" id="column3">
        <div class="card has-text-centered">
          <div class="card-content">
            <div class="card-title block">
              <h1 class="title is-4">健康希望調査</h1>
            </div>
            <div class="card-icon has-text-primary block">
              <b-icon pack="fas" icon="edit" size="fa-3x"></b-icon>
            </div>
            <div class="card-text block">
              <p>個別健診は事前予約が必要です。<br>
              申込後、2週間をめどに受診券を郵送します。</p>
            </div>
          </div>
          <footer class="card-footer">
            <button class="button is-fullwidth" @click="doNavigate('/reservation2')">予約をする</button>
            <!-- <p class="card-footer-item">
              <span>
                <a href="/reservation2">予約をする</a>
              </span>
            </p> -->
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    doNavigate: function (url) {
      this.$router.push(url);
    }
  }
}
</script>

<style lang="scss">
#font-small{
  font-size: 15px;
}
// .has-padding{
//   padding: 10px;
// }
</style>
