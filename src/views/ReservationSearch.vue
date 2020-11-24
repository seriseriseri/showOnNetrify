<template>
  <div class="root">
    <div class="columns is-centered">
      <div class="column is-6">
        <headerItem>
        </headerItem>
        <div class="box">
          <b-field label="選択された条件">
            <b-taginput
              :value="['2020年9月', '胃がん検診']"
              ellipsis
              icon="label">
            </b-taginput>
          </b-field>
          <!-- ↓ダイアログを開きたい -->
          <button class="button is-primary is-medium is-fullwidth" @click="doNavigate('/reservationSearch')">条件を設定し直す</button>
        </div>
        <div class="box">
          <FullCalendar :options="calendarOptions" />
          <div class="box">
              <div class="buttons is-centered">
                <button class="button is-light" @click="doBack">{{ $t('sample3.back') }}</button>
                <button class="button is-primary" @click="doNavigate('/confirm')">{{ $t('sample2.next') }}</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import headerItem from '@/views/headerItem.vue'
import common from '@/scripts/common.js'
import dialog1 from '@/views/dialog1.vue'

export default {
  components: {
    FullCalendar,
    headerItem
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth'
      },
    }
  },
  mounted: async function() {
    let ret = await common.showDialog(dialog1, { val1: "引数1", val2: "引数2" });
    if (ret) {
      //alert(ret.msg);
    } else {
      //alert("戻り値なし");
    }

  },
  methods: {
    doBack: function () {
      this.$router.back();
    },
    doNavigate: function (url) {
      this.$router.push(url);
    }
  }
}
</script>

<style lang="scss" scoped>
// .root {
//   margin: 10px;
//   padding: 10px;
//   border-radius: 7px;
//   background-color: #E1E1E1;
// }
// .root > * {
//   margin-bottom: 10px;
//   padding: 10px 20px;
//   border-radius: 5px;
//   background-color: white;
// }
// .root > *:last-child {
//   margin-bottom: 0;
// }
</style>
