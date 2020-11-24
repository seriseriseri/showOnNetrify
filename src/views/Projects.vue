<template>
  <div class="projects">
    <div class="block"></div>
    <div class="columns  is-multiline is-centered">
      <div class="column is-3" id="column1">
        <div class="card has-text-centered bm--card-equal-height">
          <div class="card-content">
            <div class="card-title block">
              <h1 class="title is-4">検診事業</h1>
            </div>
            <div class="card-icon has-text-primary block">
              <b-icon pack="fas" icon="hospital" size="fa-3x"></b-icon>
            </div>
            <div class="card-text block">
              <p>事業についての説明はここです。</p>
            </div>
          </div>
          <footer class="card-footer">
            <a href="/tiles1" class="card-footer-item">進む</a>
          </footer>
        </div>
      </div>
      <div class="column is-3" id="column2">
        <div class="card has-text-centered bm--card-equal-height">
          <div class="card-content">
            <div class="card-title block">
              <h1 class="title is-4">予防接種</h1>
            </div>
            <div class="card-icon has-text-primary block">
              <b-icon pack="fas" icon="syringe" size="fa-3x"></b-icon>
            </div>
            <div class="card-text block">
              <p>予防接種についての説明はここです。</p>
            </div>
          </div>
          <footer class="card-footer">
            <a href="/tiles2" class="card-footer-item">進む</a>
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
