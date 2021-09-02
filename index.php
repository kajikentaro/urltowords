<?php
require("header.php");
?>
<div id="description">単語を3つ入力してね</div>
<div id="input-button">
	<div id="url-input-wrapper">
		<input id="word1" type="text" placeholder="単語1">
		<input id="word2" type="text" placeholder="単語2">
		<input id="word3" type="text" placeholder="単語3">
	</div><div id="submit-wrapper">
		<a href="#" id="home-submit" class="submit">取得する</a>
	</div>
</div>
<textarea class="result" id="textarea" placeholder="結果がここに表示、または別タブで開かれます">
</textarea>
<style>
	#textarea{
		height:300px;
	}
</style>
<?php
require("footer.php");
?>
<script type="text/javascript" src="index.js"></script>