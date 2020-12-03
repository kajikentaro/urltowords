window.onload = ()=>{
    document.getElementById("url-submit").onclick = submit_func;
    var url_input = document.getElementById("url-input");
    url_input.focus();
    url_input.onkeydown = (e)=>{
        const key = e.keyCode || e.charCode || 0;
        if (key == 13 && e.shiftKey) {
	    submit_func();
            e.preventDefault();
        }
    }
}
function submit_func(){
    var text = document.getElementById("url-input").value;
    if(!text){
        alert("テキストを入力してください");
    }else{
        texttowords(text);
    }
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
