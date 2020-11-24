<template>
    <div id="search">
        <h1 class="has-text-centered is-size-3">性別・生年月日の選択画面</h1>
        <div class="buttons is-centered">
                <button class="button is-primary" @click="doBack">{{ $t('sample2.back') }}</button>
                <button class="button is-primary" @click="doNavigate('/reservationQuestion')">{{ $t('sample2.next') }}</button>
        </div>
    </div>
</template>

<script>
export default {
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