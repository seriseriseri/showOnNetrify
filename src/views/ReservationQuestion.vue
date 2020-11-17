<template>
    <div class="columns is-centered">
        <div class="column is-6">
            <div class="tile is-ancestor block">
                <div class="tile is-vertical is-parent">
                    <div class="tile is-child box">
                        <p class="block"><strong>{{ $t('sample2.q') }}</strong></p>
                        <hr>
                        <div class="content">
                            <div class="columns">
                                <div class="column is-8">
                                    <b-field>
                                        <li type="1">妊娠中、または妊娠の可能性がありますか？</li>
                                    </b-field>
                                </div>
                                <div class="column is-4">
                                    <b-field position="is-right">
                                        <b-radio-button v-model="q1" native-value="yes" type="is-primary" size="is-small">
                                            <span>{{ $t('sample2.yes') }}</span>
                                        </b-radio-button>
                                        <b-radio-button v-model="q1" native-value="no" type="is-primary" size="is-small">
                                            <span>{{ $t('sample2.no') }}</span>
                                        </b-radio-button>
                                    </b-field>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="buttons is-centered">
                                <button class="button is-light" @click="doBack">{{ $t('sample2.back') }}</button>
                                <button class="button is-primary" @click="doNavigate('/reservationSearch')">{{ $t('sample2.next') }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
            return {
                q1: ''
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

<style lang="scss">
// .has-padding{
//     padding: 10px;
// }
</style>