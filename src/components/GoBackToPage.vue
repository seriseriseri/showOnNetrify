<template>
    <a @click="doBack"><b-icon pack="fas" icon="arrow-left" class="has-text-primary"></b-icon>前のページに戻る</a>
</template>

<script>
export default {
  name: 'GoBackToPage',
  methods: {
    doBack: function () {
        this.$router.back();
    }
  }
}
</script>

<style lang="scss">
</style>
