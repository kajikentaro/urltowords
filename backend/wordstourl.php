<?php
ini_set('display_errors',1);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true ');
try {
	$dbh = new PDO( 'sqlite:urltowords.db');
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$dbh->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	$prepare = $dbh->prepare('select * from urltowords where word1 = ? and word2 = ? and word3 = ?');
	$prepare->bindValue(1,$_POST['word1'],PDO::PARAM_STR); 
	$prepare->bindValue(2,$_POST['word2'],PDO::PARAM_STR); 
	$prepare->bindValue(3,$_POST['word3'],PDO::PARAM_STR); 
	$prepare->execute();
       	$result = $prepare->fetchAll(PDO::FETCH_BOTH);
	$output = null;
	if(count($result) < 1){
		$output = array("status" => 404);
	}else{
		$output = array("status" => 200, "category" => $result[0]['category'], "value" => $result[0]['value']);
	}
	echo json_encode($output);
} catch (PDOException $e) {
	$error = $e->getMessage();
	die("pdo接続に失敗<br>$error");
} catch (Exception $e){
	$error = $e->getMessage();
	die("接続に失敗<br>$error");
}

?>
