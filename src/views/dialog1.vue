<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">ご希望の条件を選択してください。</p>
      <button type="button" class="delete" @click="$emit('close')"/>
    </header>
    <section class="modal-card-body">
      <div class="block">
        <div class="has-text-weight-bold"><label>実施月</label></div>
        <b-select v-model="tuki" placeholder="">
          <option value="202009">2020年9月</option>
          <option value="202010">2020年10月</option>
          <option value="202011">2020年11月</option>
          <option value="202012">2020年12月</option>
        </b-select>
        の予定を表示する
      </div>
      <hr>
      <!-- <b-field label="会場">
        <b-select v-model="kaijo" placeholder="">
         <option value="none">指定しない</option>
         <option value="aozora">青空市役所</option>
       </b-select>
      </b-field> -->
      <hr>

      <div class="block">
        <div class="has-text-weight-bold"><label>受診を希望する検診（選択なしも可）</label></div>
        <b-checkbox size="is-medium" v-model="kenshin1">特定健康診査</b-checkbox>
        <b-checkbox size="is-medium" v-model="kenshin2">胃がん検診</b-checkbox>
        <b-checkbox size="is-medium" v-model="kenshin3">大腸がん検診</b-checkbox>
        <b-checkbox size="is-medium" v-model="kenshin4">特定健康診査</b-checkbox>
        <b-checkbox size="is-medium" v-model="kenshin5">胃がん検診</b-checkbox>
        <b-checkbox size="is-medium" v-model="kenshin6">大腸がん検診</b-checkbox>
      </div>
      <hr>
      <div class="block">
        <div class="has-text-weight-bold"><label>検索方法</label></div>
        <b-field>
          <b-radio-button v-model="searchValue" name="search" native-value="1" type="is-success">
            <span>同日実施のみ</span>
          </b-radio-button>
          <b-radio-button v-model="searchValue" name="search" native-value="2" type="is-success">
            <span>別日でも可</span>
          </b-radio-button>
        </b-field>
      </div>
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
      kenshin1: 'true',
      kenshin2: 'true',
      kenshin3: '',
      kenshin4: '',
      kenshin5: '',
      kenshin6: '',
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
