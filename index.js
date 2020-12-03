window.onload = ()=>{
    var word1 = document.getElementById("word1");
    var word2 = document.getElementById("word2");
    var word3 = document.getElementById("word3");
    word1.focus();
    document.getElementById("home-submit").onclick = submit_func;
    word1.onkeypress = word2.onkeypress = word3.onkeypress = (e)=>{
        const key = e.keyCode || e.charCode || 0;
        if (key == 13) {
	    submit_func();
        }
    }
}
var submit_func = function(){
    var w1 = word1.value;
    var w2 = word2.value;
    var w3 = word3.value;
    wordstourl(w1,w2,w3);
}
function geted_value(result){
    if(result['status']==404){
        alert("この単語は登録されていません。間違っていませんか？")
    }else{
        clear_words();
        var textarea = document.getElementById("textarea");
        if(result['category'] == 'text'){
            textarea.value  = result['value'];
            textarea.classList.add("geted-result");
        }else if(result['category'] == 'url'){
            window.open(result['value']);
            textarea.value  = result['value'];
            textarea.classList.add("geted-result");
        }
    }
}
function clear_words(){
    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
    document.getElementById("word3").value = "";
}
