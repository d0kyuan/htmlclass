<?php
require("db_cnt_info.php");
$friend_name1 = $_GET['friend_name'];
$member_name1 = $_GET['member_name'];

$friend_name=md5($friend_name1);
$member_name = md5($member_name1);

$result = $dbcnt->query("select * from user_".$member_name .".friend_list where account like '".$friend_name."'");
$row = $result->fetch(PDO::FETCH_ASSOC);


if($row>0){
    $dbcnt->exec("DELETE FROM user_".$member_name .".friend_list WHERE account like '".$friend_name."'");
}
$result = $dbcnt->query("select * from user_".$friend_name .".friend_list where account like '".$member_name."'");
$row = $result->fetch(PDO::FETCH_ASSOC);


if($row>0){
    $dbcnt->exec("DELETE FROM user_".$friend_name .".friend_list WHERE account like '".$member_name."'");
}

?>