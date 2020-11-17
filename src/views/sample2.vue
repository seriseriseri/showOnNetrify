<template>
  <div class="root">
    <headerItem>
    </headerItem>
    <section class="pt-5">
      {{ $t('sample2.q') }}
      <hr>
      <div class="columns">
        <div class="column is-1">１．</div>
        <div class="column is-7">{{ $t('sample2.q1') }}</div>
        <div class="column is-4">
          <b-field>
            <b-radio-button v-model="q1" native-value="yes" type="is-success" size="is-medium">
              <span>{{ $t('sample2.yes') }}</span>
            </b-radio-button>
            <b-radio-button v-model="q1" native-value="no" type="is-success" size="is-medium">
              <span>{{ $t('sample2.no') }}</span>
            </b-radio-button>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column is-1">２．</div>
        <div class="column is-7">{{ $t('sample2.q2') }}</div>
        <div class="column is-4">
          <b-field>
            <b-radio-button v-model="q2" native-value="yes" type="is-success" size="is-medium">
              <span>{{ $t('sample2.yes') }}</span>
            </b-radio-button>
            <b-radio-button v-model="q2" native-value="no" type="is-success" size="is-medium">
              <span>{{ $t('sample2.no') }}</span>
            </b-radio-button>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column is-1">３．</div>
        <div class="column is-7">{{ $t('sample2.q3') }}</div>
        <div class="column is-4">
          <b-field>
            <b-radio-button v-model="q3" native-value="yes" type="is-success" size="is-medium">
              <span>{{ $t('sample2.yes') }}</span>
            </b-radio-button>
            <b-radio-button v-model="q3" native-value="no" type="is-success" size="is-medium">
              <span>{{ $t('sample2.no') }}</span>
            </b-radio-button>
          </b-field>
        </div>
      </div>
      <div class="has-background-white-ter columns mt-4 pt-5 pb-5">
        <b-button type="is-info" class="column is-2 is-offset-4 mt-2 has-text-weight-semibold" @click="doBack">{{ $t('sample2.back') }}</b-button>
        <b-button type="is-info" class="column is-2 is-offset-1 mt-2 has-text-weight-semibold" @click="doNavigate('/sample3')">{{ $t('sample2.next') }}</b-button>
      </div>
    </section>
  </div>
</template>

<script>
import headerItem from '@/views/headerItem.vue'

export default {
  components: {
    headerItem
  },
  data() {
    return {
      q1: '',
      q2: '',
      q3: '',
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

</style>
