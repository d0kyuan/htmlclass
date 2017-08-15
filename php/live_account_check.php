<?php
require("db_cnt_info.php");
$account1 = $_POST['account'];
$account = md5($account1);
$result = $dbcnt->query("select * from htmlclass.userinfo where account like '".$account."'");
$row = $result->fetch(PDO::FETCH_ASSOC);
if($row>0){
	echo "|sameaccount|";
	
}

?>