<?php
require("db_cnt_info.php");
$friend_name1 = $_GET['friend_name'];
$member_name1 = $_GET['member_name'];

$friend_name=md5($friend_name1);
$member_name = md5($member_name1);


$result = $dbcnt->query("select * from user_".$friend_name .".friend_req where account like '".$member_name."'");
$row = $result->fetch(PDO::FETCH_ASSOC);
if($row>0){
    echo '|same_req|';
}else{
   $result = $dbcnt->query("select * from user_".$friend_name .".friend_list where account like '".$member_name."'");
    $row1 = $result->fetch(PDO::FETCH_ASSOC); 
    if($row1>0){
        echo '|friend|';
    }else{
        echo '|noconnecct|';
    }
}



?>