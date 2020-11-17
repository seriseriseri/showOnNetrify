<template>
  <div class="root">
    <headerItem>
    </headerItem>
    <section>
      あいうえお<br>
      かきくけこ<br>
    </section>
    <section>
      <div>
        <b-button type="is-info" class="" @click="doBack">{{ $t('template.back') }}</b-button>
        <b-button type="is-info" class="" @click="doNavigate('/')">{{ $t('template.next') }}</b-button>
      </div>
    </section>
  </div>
</template>

<script>
import headerItem from '@/views/headerItem.vue'

export default {
  components: {
    headerItem,
  },
  data() {
    return {
    }
  },
  mounted: async function() {
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

  > * {
    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: white;
  }

  > *:last-child {
    margin-bottom: 0;
  }
}
</style>
