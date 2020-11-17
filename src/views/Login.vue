<template>
  <div class="columns is-mobile">
    <div class="column is-three-fifths is-offset-one-fifth">
      <GoBackToPage/>
      <div class="root">
        <!-- <headerItem>
        </headerItem> -->
        <section class="pt-5">
          <b-field :label="$t('sample1.userid')">
            <b-input v-model="name"></b-input>
          </b-field>
          <b-field :label="$t('sample1.password')">
            <b-input type="password" password-reveal></b-input>
          </b-field>
          <p class="has-text-right is-size-7 mt-4">
            <a>{{ $t("sample1.forgotUserid") }}</a>
          </p>
          <p class="has-text-right is-size-7 mt-4">
            <a>{{ $t("sample1.forgotPassword") }}</a>
          </p>
          <p class="block"></p>
          <div class="box">
            <div class="has-text-centered">{{ $t("sample1.confirmCreateAccount") }}</div>
            <div class="buttons">
              <b-button type="is-primary is-medium" expanded @click="doNavigate('/register')">{{ $t("sample1.gotoAccountCreate") }}</b-button>
              <b-button type="is-primary is-medium" expanded @click="doNavigate('/personalInfo')">{{ $t("sample1.signin") }}</b-button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import GoBackToPage from '../components/GoBackToPage.vue';
// import headerItem from '@/views/headerItem.vue'

//import { format } from 'date-fns'
//import { en, ja } from 'date-fns/locale'

export default {
  components: { GoBackToPage },
  // components: {
  //   headerItem
  // },
  mounted() {
//    console.log(this.lodash.random(100));
//    console.log(this._.random(100));
//    alert(format(new Date(), 'yyyy/MM/dd'));
//    alert(format(new Date(2014, 1, 11), 'PPPP', {locale: en}));
//    alert(format(new Date(2014, 1, 11), 'PPPP', {locale: ja}));
  },
  methods: {
    doNavigate: function (url) {
      this.$router.push(url);
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  margin: 10px;
  padding: 10px;
  border-radius: 7px;
  background-color: #E1E1E1;
}
.root > * {
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: white;
}
.root > *:last-child {
  margin-bottom: 0;
}
// .has-padding{
//   padding: 10px;
// }
</style>
