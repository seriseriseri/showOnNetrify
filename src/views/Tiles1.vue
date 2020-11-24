<template>
  <div class="tiles1">
    <h1 class="is-size-3 has-text-weight-semibold has-text-centered">事業１</h1>
    <div class="columns  is-multiline is-centered">
      <div class="column is-3" id="column1">
        <div class="card has-text-centered bm--card-equal-height">
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
            <a href="/News" class="card-footer-item">お知らせ</a>
          </footer>
        </div>
      </div>
      <div class="column is-3" id="column2">
        <div class="card has-text-centered bm--card-equal-height">
          <div class="card-content">
            <div class="card-title block">
              <h1 class="title is-4">検診予約</h1>
            </div>
            <div class="card-icon has-text-primary block">
              <b-icon pack="fas" icon="stethoscope" size="fa-3x"></b-icon>
            </div>
            <div class="card-text block">
              <p>検診の予約・空き状況の確認をします。</p>
            </div>
          </div>
          <footer class="card-footer">
            <router-link :to="{path: '/Reservation'}" exact class="card-footer-item"><a>進む</a></router-link>
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
        <div class="card has-text-centered bm--card-equal-height">
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
            <a href="/Reservation2" class="card-footer-item">予約をする</a>
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
}
</script>

<style lang="scss">
#font-small{
  font-size: 15px;
}
.bm--card-equal-height {
   display: flex;
   flex-direction: column;
   height: 100%;
}
.bm--card-equal-height .card-footer {
   margin-top: auto;
}
// .has-padding{
//   padding: 10px;
// }
</style>
