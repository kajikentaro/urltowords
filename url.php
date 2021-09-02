<?php
require("header.php");
?>
<div id="description">URLを入力してね</div>
<div id="input-button">
	<div id="url-input-wrapper">
		<input id="url-input" type="text" placeholder="ここにURLを入力">
	</div><div id="submit-wrapper">
		<a href="#" id="url-submit" class="submit">登録する</a>
	</div>
</div>
<div id="url-output-wrapper">
	<p class="hide">登録できました！HOMEからこの順番で単語を入れればURLを取得できます</p>
	<input id="word1" class="result" type="text" placeholder="ここに結果が表示されます">
	<input id="word2" class="result" type="text" placeholder="ここに結果が表示されます">
	<input id="word3" class="result" type="text" placeholder="ここに結果が表示されます">
</div>
<style>
	.submit{
		height:110px;
		line-height:110px;
	}
	#url-input{
		margin:60px auto;
	}

</style>
<?php
require("footer.php");
?>
<script type="text/javascript" src="url.js"></script>
