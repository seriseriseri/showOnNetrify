<template>
    <div class="columns is-centered">
        <div class="column is-6">
            <div class="block">
                <h1 class="title is-3">仮予約申し込みの完了</h1>
                <p class="is-size-5 has-text-danger">ご登録されたメールアドレスに予約完了メールを送信いたしましたので、<br>内容をご確認ください。</p>
            </div>
            <div class="box">
                <div class="block">
                    <p class="has-text-danger">※ご注意</p>
                    <p>申込された予約は、後日メールにて予約可否をお知らせいたします。</p>
                    <p>ご予約内容は、<router-link :to="{path: '/reservation'}" exact><a>「予約内容を確認する」</a></router-link>よりご確認いただけます。</p>
                </div>
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
</style>