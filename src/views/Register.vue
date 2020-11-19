<template>
<div class="register" id="register">
    <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
            <GoBackToPage/>
            <h1 class="title is-3 has-text-centered">アカウント登録</h1>
            <div class="panel is-primary panel-color">
                <p class="panel-heading">登録情報</p>
                <div class="control has-padding">
                    <label><strong>氏名（姓）</strong></label>
                    <p class="help is-danger">必須<p>
                    <input class="input has-margin-bottom" type="text" placeholder="健診">
                    <label><strong>氏名（名）</strong></label>
                    <input class="input has-margin-bottom" type="text" placeholder="太郎">
                    <label><strong>カナ氏名（姓）</strong></label>
                    <input class="input" type="text" placeholder="ケンコウ">
                    <p class="help is-success has-margin-bottom">全角カタカナで入力してください。</p>
                    <label><strong>カナ氏名（名）</strong></label>
                    <input class="input" type="text" placeholder="タロウ">
                    <p class="help is-success has-margin-bottom">全角カタカナで入力してください。</p>
                    <label><strong>性別</strong></label>
                    <p>
                        <label class="radio has-margin-bottom">
                        <input type="radio" name="answer">
                        男性
                        </label>
                        <label class="radio has-margin-bottom">
                        <input type="radio" name="answer">
                        女性
                        </label>
                    </p>
                    <label><strong>生年月日</strong></label>
                    <p>
                    <div class="select has-margin-bottom">
                        <select>
                            <option>年</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                        </select>
                    </div> 
                    <div class="select has-margin-bottom">
                        <select>
                            <option>月</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div class="select has-margin-bottom">
                        <select>
                            <option>日</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <p>
                    <label><strong>メールアドレス</strong></label>
                    <input class="input has-margin-bottom" type="text">
                    </p>
                    <label><strong>電話番号</strong></label>
                    <input class="input has-margin-bottom" type="text">
                </div>
            </div>
            <div class="panel is-primary panel-color">
                <p class="panel-heading">アカウント情報</p>
                <div class="control has-padding">
                    <label><strong>パスワード</strong></label>
                    <input class="input has-margin-bottom" type="text">
                    <label><strong>パスワード（確認）</strong></label>
                    <input class="input has-margin-bottom" type="text">
                </div>
            </div>
            <div class="has-text-centered">
                <label class="checkbox has-margin-bottom">
                    <input type="checkbox">
                    規約に同意する
                </label>
            </div>
            <div class="buttons is-centered">
                <button class="button is-primary">登録</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import GoBackToPage from '../components/GoBackToPage.vue';

export default {
  components: { GoBackToPage }
}
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