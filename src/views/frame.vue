<template>
  <div class="frame">
    <header>
      <!-- <div class="headerMobile">
        <div class="columns is-mobile">
          <div class="column is-1">
            <b-icon icon="bars" size="is-medium" type="is-primary" @click.native="hamburgerMenu = true" class="clickable"></b-icon>
          </div>
          <div class="column">
            <h1 class="title is-3 has-text-centered">{{ $t("frame.title") }}</h1>
          </div>
          <div class="column is-1"></div>
        </div>
        <b-sidebar
          type="is-light"
          :fullheight="true"
          :overlay="true"
          :right="false"
          v-model="hamburgerMenu"
        >
          <b-menu>
            <b-menu-list label="メニュー">
              <b-menu-item icon="info-circle" label="Info"></b-menu-item>
              <b-menu-item icon="language" label="Language"></b-menu-item>
              <b-menu-item icon="lock" :label="$t('frame.signin')"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </b-sidebar>
      </div>
      <div class="headerDesktop">
        <div class="columns">
          <div class="column is-3">
            <img class="logo" src="img/text_kenkou_shindan.png" v-if="this.$i18n.locale == 'ja'">
            <img class="logo" src="img/health-checkup.png" v-if="this.$i18n.locale == 'en'">
          </div>
          <div class="column">
            <h1 class="title is-3 has-text-centered">{{ $t("frame.title") }}</h1>
          </div>
          <div class="column is-1">
            <b-tooltip label="language" position="is-left">
              <b-dropdown aria-role="list" >
                <b-icon icon="language" size="is-large" slot="trigger" class="clickable"></b-icon>
                <b-dropdown-item aria-role="listitem" @click="setLocale('ja')">日本語</b-dropdown-item>
                <b-dropdown-item aria-role="listitem" @click="setLocale('en')">English</b-dropdown-item>
              </b-dropdown>
            </b-tooltip>
          </div>
          <div class="column is-2 icon-area">
            <div class="icon-box clickable">
              <b-icon icon="lock" size="is-medium" type="is-primary"></b-icon>
              <div class="icon-text">{{ $t("frame.signin") }}</div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="title is-3 has-text-centered" id="page-top">
        <h1 class="title is-3 has-text-centered">{{ $t("frame.title") }}</h1>
      </div> -->
      <div>
        <b-navbar class="menuBar is-mobile-burger">
          <template slot="brand">
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  <img
                      src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                      alt="Lightweight UI components for Vue.js based on Bulma"
                  >
              </b-navbar-item>
          </template>
          <template slot="start">
              <b-navbar-item>
                <router-link :to="{path: '/'}" exact><a><strong>TOP</strong></a></router-link>
              </b-navbar-item>
              <b-navbar-item>
                <router-link :to="{path: '/news'}" exact><a><strong>お知らせ</strong></a></router-link>
              </b-navbar-item>
              <b-navbar-item href="#">
                <router-link :to="{path: '/reservation'}" exact><a><strong>けんしん</strong></a></router-link>
              </b-navbar-item>
              <b-navbar-item href="#">
                <router-link :to="{path: '/reservation2'}" exact><a><strong>健康希望調査</strong></a></router-link>
              </b-navbar-item>
              <b-navbar-dropdown class="is-hoverable" label="その他">
                  <b-navbar-item href="#">
                    <router-link :to="{path: '/login'}" exact><a>サインイン</a></router-link>
                  </b-navbar-item>
                  <b-navbar-item href="#">
                    <router-link :to="{path: '/sample2'}" exact><a>サンプル２</a></router-link>
                  </b-navbar-item>
                  <b-navbar-item href="#">
                    <router-link :to="{path: '/reservationSearch'}" exact><a>サンプル３</a></router-link>
                  </b-navbar-item>
                  <b-navbar-item href="#">
                    <router-link :to="{path: '/reservationQuestion'}" exact><a>reserveQ</a></router-link>
                  </b-navbar-item>
              </b-navbar-dropdown>
          </template>

          <template slot="end">
            <div>
              <b-tooltip label="language" position="is-left">
                <b-dropdown aria-role="list" >
                  <b-icon icon="language" size="is-large" slot="trigger" class="clickable"></b-icon>
                  <b-dropdown-item aria-role="listitem" @click="setLocale('ja')">日本語</b-dropdown-item>
                  <b-dropdown-item aria-role="listitem" @click="setLocale('en')">English</b-dropdown-item>
                </b-dropdown>
              </b-tooltip>
            </div>
            <b-navbar-item tag="div">
              <div class="buttons">
                <a class="button is-primary is-outlined">
                  <router-link :to="{path: '/register'}" exact><a><b-icon pack="fas" icon="user-alt" size="fa-lg"></b-icon><strong>アカウント登録</strong></a></router-link>
                </a>
                <a class="button is-primary is-outlined">
                  <router-link :to="{path: '/login'}" exact><a><b-icon pack="fas" icon="sign-in-alt" size="fa-lg"></b-icon><strong>{{ $t("frame.signin") }}</strong></a></router-link>
                </a>
                <a class="button is-primary is-outlined">
                  <router-link :to="{path: '/setting'}" exact>
                    <a>
                      <b-icon pack="fas" icon="cog" size="fa-lg"></b-icon>
                      <strong>設定</strong>
                      <!-- <b-icon pack="fas" icon="cog" size="fa-lg"></b-icon> -->
                    </a>
                  </router-link>
                </a>
              </div>
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>
    </header>
    <section>
      <router-view/>
    </section>
    <footer class="footer footer-color">
      <div class="footer-border">
        <p class="has-text-centered">
          <small><strong>{{ $t("frame.title") }}</strong></small>
        </p>
        <p class="has-text-centered">
          <label><strong>お問い合わせ先</strong></label>
          <p class="has-text-centered">
          青空市保健福祉部  健康推進課<br>
          電話番号：000-000-0000<br>
          メール：xxxxx@yyy.jp
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      hamburgerMenu: false
    }
  },
  methods: {
    setLocale: function(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>



<style lang="scss" scoped>
  .frame {
    height: 100%;
  }
  header {
    padding-top: 30px;
    padding-bottom: 10px;
  }
  .logo {
    vertical-align: middle;
    height: 60px;
  }
  h1 {
    display: inline-block;
    // color: #a65f13;
    vertical-align: top;
    width: 100%;
  }
  .icon-area {
    text-align: right;
    padding-right: 25px;
  }
  .icon-box {
    display: inline-block;
    background-color: white;
    width: 70px;
    text-align: center;
    border-radius: 7px;
  }
  .icon-text {
    font-size: 7.5pt;
    margin-top: -5px;
    padding-bottom: 5px;
  }

  // footer {
  //   position: absolute;
  //   bottom: 0;
  //   width: 100%;
  //   padding: 10px;
  //   background-color: white;
  //   height: 50px;
  // }
  // footer p {
  //   text-align: center;
  // }
  .footer-color{
    // background-color: seashell;
    // background-color: rgb(252, 239, 249);
    background-color: rgb(250, 236, 239);
  }
  .footer-border{
    border-top:slateblue 1px solid;
  }
 
  .headerMobile {
    display: block;
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  .headerDesktop {
    display: none;
  }

  @media screen and (min-width : 768px){
    .headerMobile {
      display: none;
    }
    .headerDesktop {
      display: block;
    }
    header {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .clickable {
    cursor: pointer !important
  }

  .menuBar{
    // background-color: seashell;
    background-color: rgb(250, 236, 239);
    
  }
</style>
