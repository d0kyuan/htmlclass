<?php
require("db_cnt_info.php");
$friend_name1 = $_GET['friend_name'];
$member_name1 = $_GET['member_name'];

$friend_name=md5($friend_name1);
$member_name = md5($member_name1);
$result = $dbcnt->exec("INSERT INTO user_".$friend_name.".friend_req(account)
	VALUES('".$member_name."')");

$result =$dbcnt ->query("select * from user_".$friend_name.".friend_req where account like '".$member_name."'");
$row = $result->fetch(PDO::FETCH_ASSOC);
if($row>0){
    echo '|addfriendsess|';
}else{
    echo '|addfriendfail|';
}
?>