<?php
require("db_cnt_info.php");

$page_name = $_GET['page_name'];

$friend_name1 = $_GET['friend_name'];
$creater_name1 = $_GET['$creater_name'];

$friend_name=md5($friend_name1);
$creater_name = md5($creater_name1);

$result = $dbcnt->query("select * from user_".$member_name.".like_page where creater_name like '".$creater_name."' AND page_name like '".$page_name."'");
$row = $result->fetch(PDO::FETCH_ASSOC);

if($row <= 0){
    echo "|nolikepage|";
}else{
    echo "|samelikepage|";
}


?>