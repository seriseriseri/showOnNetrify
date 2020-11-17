<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">ご希望の条件を選択してください。</p>
      <button type="button" class="delete" @click="$emit('close')"/>
    </header>
    <section class="modal-card-body">
      <b-field label="実施月">
        <b-select v-model="tuki" placeholder="">
         <option value="202009">2020年9月</option>
         <option value="202010">2020年10月</option>
         <option value="202011">2020年11月</option>
         <option value="202012">2020年12月</option>
       </b-select>
      </b-field>
      の予定を表示する
      <hr>
      <b-field label="会場">
        <b-select v-model="kaijo" placeholder="">
         <option value="none">指定しない</option>
         <option value="aozora">青空市役所</option>
       </b-select>
      </b-field>
      <hr>
      <b-field label="受診したい検診（選択なしも可）">
        <b-checkbox v-model="kenshin1">特定健康診査</b-checkbox>
        <b-checkbox v-model="kenshin2">胃がん検診</b-checkbox>
        <b-checkbox v-model="kenshin3">大腸がん検診</b-checkbox>
      </b-field>
      <hr>
      <b-field label="検索方法">
        <b-radio-button v-model="searchValue" name="search" native-value="1" type="is-success">
          <span>同日実施のみ</span>
        </b-radio-button>
        <b-radio-button v-model="searchValue" name="search" native-value="2" type="is-success">
          <span>別日でも可</span>
        </b-radio-button>
      </b-field>
      
    </section>
    <footer class="modal-card-foot">
      <b-button type="is-primary" @click="doSearch">検索する</b-button>
    </footer>
  </div>
</template>

<script>

export default {
  props: {
    arg: Object
  },
  data() {
    return {
      tuki: "202009",
      kaijo: "none",
      kenshin1: '',
      kenshin2: '',
      kenshin3: '',
      searchValue: '',
    }
  },
  methods: {
    doSearch: function () {
      this.$emit('close', { msg: "ok" })
    }
    // doCancel: function () {
    //   this.$emit('close')
    // }
  }
}
</script>

<style scoped>
</style>
