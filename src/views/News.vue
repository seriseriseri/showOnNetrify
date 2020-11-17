<template>
  <div class="news" id="news">
    <div class="block">
      <div class="has-text-centered">
        <b-icon class="icon" pack="fas" icon="bell" size="fa-3x" type="is-primary"></b-icon>
        <h3 class="title is-1">  お知らせ</h3>
      </div>
    </div>
    <div class="block">
      <div class="columns is-centered">
        <div class="column is-6">
          <article class="message is-primary">
            <div class="message-header">
              <p>
                <b-icon pack="fas" icon="exclamation-circle" size="fa-lg"></b-icon>
                2020年11月12日
              </p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </article>
          <article class="message is-primary">
            <div class="message-header">
              <p>2020年11月10日</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
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