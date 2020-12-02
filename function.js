url_urltowords = "http://localhost/urltowords/backend/urltowords.php"
url_wordstourl = "http://localhost/urltowords/backend/wordstourl.php"
function texttowords(text) {
    var request = createXmlHttpRequest();
    request.open('POST',url_urltowords);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.addEventListener('load', function (response) {
        var result = JSON.parse(this.responseText);
        geted_words(result);
    });
    request.send("category=text&value=" + text);
}
function urltowords(url) {
    var request = createXmlHttpRequest();
    request.open('POST',url_urltowords);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.addEventListener('load', function (response) {
        var result = JSON.parse(this.responseText);
        geted_words(result);
    });
    request.send("category=url&value=" + url);
}
function myfunc(tete){
	console.log(tete);
}
function wordstourl(word1, word2, word3) {
    var request = createXmlHttpRequest();
    request.open('POST', url_wordstourl);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.addEventListener('load', function (response) {
        var result = JSON.parse(this.responseText);
        geted_value(result);
    });
    request.send("word1=" + word1 + "&word2=" + word2 + "&word3=" + word3);
}
function createXmlHttpRequest() { var xmlhttp = null; if (window.ActiveXObject) { try { xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) { try { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e2) { } } } else if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } return xmlhttp; }
