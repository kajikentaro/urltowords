window.onload = ()=>{
    document.getElementById("home-submit").onclick = function(){
        var word1 = document.getElementById("word1").value;
        var word2 = document.getElementById("word2").value;
        var word3 = document.getElementById("word3").value;
        wordstourl(word1,word2,word3);
    }
}
function geted_value(result){
    if(result['status']==404){
        alert("この単語は登録されていません。間違っていませんか？")
    }else{
        clear_words();
        if(result['category'] == 'text'){
            var textarea = document.getElementById("textarea");
            textarea.value  = result['value'];
            textarea.classList.add("geted-result");
        }else if(result['category'] == 'url'){
            window.open(result['value']);
        }
    }
}
function clear_words(){
    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
    document.getElementById("word3").value = "";
}