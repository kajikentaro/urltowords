<?php
require("header.php");
?>
<div id="description">テキストを入力してね</div>
<div id="input-button">
	<div id="url-input-wrapper">
		<textarea id="url-input" type="text" placeholder="ここにテキストを入力"></textarea>
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
	#tab-text{
		background: var(--coldark);
		font-weight:bold;
		color:white;
	}
	.submit{
		height:110px;
		line-height:110px;
	}
	#url-input-wrapper{
		vertical-align:middle
	}
	#url-input{
		height:250px;
	}

</style>
<?php
require("footer.php");
?>
<script type="text/javascript" src="text.js"></script>
