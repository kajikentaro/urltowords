<?php
ini_set('display_errors',1);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true ');
try {
	$dbh = new PDO( 'sqlite:urltowords.db');
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$dbh->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	$prepare = $dbh->prepare('select * from words order by random() limit 3');
	$prepare->execute();
	$words = $prepare->fetchALL(PDO::FETCH_BOTH);

	$prepare = $dbh->prepare('insert into urltowords (value,category,word1,word2,word3) values(?,?,?,?,?)');
	$prepare->bindValue(1,$_POST['value'],PDO::PARAM_STR); 
	$prepare->bindValue(2,$_POST['category'],PDO::PARAM_STR); 
	$prepare->bindValue(3,$words[0]['word'],PDO::PARAM_STR); 
	$prepare->bindValue(4,$words[1]['word'],PDO::PARAM_STR); 
	$prepare->bindValue(5,$words[2]['word'],PDO::PARAM_STR); 
	$prepare->execute();
       	$result = $prepare->fetchAll(PDO::FETCH_BOTH);
	$output = array("status" => 200,"word1" => $words[0]['word'],"word2" => $words[1]['word'],"word3" => $words[2]['word']);
	echo json_encode($output);
} catch (PDOException $e) {
	$error = $e->getMessage();
	die("pdo接続に失敗<br>$error");
} catch (Exception $e){
	$error = $e->getMessage();
	die("接続に失敗<br>$error");
}

?>
