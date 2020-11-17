<template>
    <div class="login" id="login">
        <div class="columns is-mobile">
            <div class="column is-three-fifths is-offset-one-fifth">
                <h1 class="title is-3 has-text-centered">ログイン</h1>
                <div class="panel is-primary panel-color">
                    <p class="panel-heading">ログイン情報</p>
                    <div class="control has-padding">
                        <label><strong>ユーザID</strong></label>
                        <p class="help is-danger">必須</p>
                        <input class="input has-margin-bottom" type="text">
                        <label><strong>パスワード</strong></label>
                        <p class="help is-danger">必須</p>
                        <input class="input has-margin-bottom" type="text">
                    </div>
                </div>
            </div>
        </div>
        <div class="buttons is-centered">
            <button class="button is-primary">ログイン</button>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
.has-padding{
    padding: 10px;
}
.has-margin-bottom{
    margin-bottom: 20px;
}
.panel-color{
    background-color: white;
}
</style>