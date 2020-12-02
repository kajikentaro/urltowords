window.onload = ()=>{
    document.getElementById("url-submit").onclick = function(){
        var text = document.getElementById("url-input").value;
        if(!text){
            alert("テキストを入力してください");
        }else{
            texttowords(text);
        }
    }
}
function geted_words(result){
    console.log(result);
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