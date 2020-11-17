<template>
  <div class="header">
    <div>
      TOP > {{ $t("headerItem.signin") }}
    </div>
    <div>
      <div class="columns">
        <div class="column">
          <!-- <b-icon class="icon" pack="fas" icon="address-card" size="is-large" type="is-primary"></b-icon>
          <h2>
            {{ $t("headerItem.signin") }}
          </h2> -->
        </div>
        <div class="column">
          <b-steps
            size="is-small"
            v-model="activeStep"
            :animated="isAnimated"
            :rounded="isRounded"
            :has-navigation="false"
            :label-position="labelPosition"
            :mobile-mode="null">
            <b-step-item step="1" :label="$t('headerItem.question')"></b-step-item>
            <b-step-item step="2" :label="$t('headerItem.search')"></b-step-item>
            <b-step-item step="3" :label="$t('headerItem.choice')"></b-step-item>
            <b-step-item step="4" :label="$t('headerItem.input')"></b-step-item>
            <b-step-item step="5" :label="$t('headerItem.confirm')"></b-step-item>
            <b-step-item step="6" :label="$t('headerItem.done')"></b-step-item>
          </b-steps>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeStep: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    vertical-align: middle;
  }
  h2 {
    display: inline-block;
    vertical-align: middle;
    font-size: 21px;
    font-weight: bold;
    padding: 0 10px;
  }
</style>
