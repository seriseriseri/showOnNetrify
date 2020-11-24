<template>
    <div class="columns is-centered">
        <div class="column is-6">
            <div class="block">
                <h1 class="title is-3">予約内容の確認</h1>
                <h1 class="title is-4 has-text-danger">※※ まだ申し込みは完了していません。 ※※</h1>
            </div>
            <div class="panel is-primary panel-color">
                <p class="panel-heading">予約内容</p>
                <div class="control has-padding">
                    <div class="block">
                        <label><strong>日時</strong></label>
                        <div>2020年12月25日(金) 10:00～</div>
                    </div>
                    <div class="block">
                        <label><strong>会場</strong></label>
                        <div>健康センター</div>
                    </div>
                    <div class="block">
                        <label><strong>ご希望の健(検)診</strong></label>
                        <div>胃がん検診</div>
                    </div>
                </div>
            </div>
            <div class="panel is-primary panel-color">
                <p class="panel-heading">受診者情報</p>
                <div class="control has-padding">
                    <div class="block">
                        <label><strong>お名前</strong></label>
                        <div>健康 太郎</div>
                    </div>
                    <div class="block">
                        <label><strong>フリガナ</strong></label>
                        <div>ケンコウ タロウ</div>
                    </div>
                    <div class="block">
                        <label><strong>性別</strong></label>
                        <div>男性</div>
                    </div>
                    <div class="block">
                        <label><strong>生年月日</strong></label>
                        <div>2000年4月1日</div>
                    </div>
                    <div class="block">
                        <label><strong>電話番号</strong></label>
                        <div>09012345678</div>
                    </div>
                    <div class="block">
                        <label><strong>メールアドレス</strong></label>
                        <div>kenko@xxx.jp</div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="block">
                    <div>
                        <p class="has-text-weight-semibold">上記の内容に問題が無ければ、「申し込む」、</p>
                        <p class="has-text-weight-semibold">修正内容がある場合は、「修正する」を選択してください。</p>
                    </div>
                </div>
                <div class="buttons is-centered">
                    <button class="button is-info" @click="doBack">修正する</button>
                    <button class="button is-danger" @click="doNavigate('/confirm2')">申し込む</button>
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
.has-padding{
    padding: 10px;
}
</style>