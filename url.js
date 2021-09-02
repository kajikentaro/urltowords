window.onload = ()=>{
    document.getElementById("url-submit").onclick = submit_func;
    var url_input = document.getElementById("url-input")
    url_input.focus();
    url_input.onkeypress = (e) =>{
        const key = e.keyCode || e.charCode || 0;
        if (key == 13) {
	    submit_func();
        }
    }
    var active_tab = document.getElementById("tab-url");
    active_tab.classList.add("hilite");
}
var submit_func =  function(){
    var url = document.getElementById("url-input").value;
    if(!url){
        alert("URLを入力してください");
    }else if(isValidHttpUrl(url)==false){
        alert("正しいURLではありません");
    }else{
        urltowords(url);
    }
}
function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
    return url.protocol === "http:" || url.protocol === "https:";
}
function geted_words(result){
    document.getElementById("url-input").value = "";
    var word1 = document.getElementById("word1");
    var word2 = document.getElementById("word2");
    var word3 = document.getElementById("word3");
    word1.value = result['word1'];
    word2.value = result['word2'];
    word3.value = result['word3'];
    word1.classList.add("geted-words");
    word2.classList.add("geted-words");
    word3.classList.add("geted-words");
    document.getElementsByClassName("hide")[0].classList.add("nohide");
}
