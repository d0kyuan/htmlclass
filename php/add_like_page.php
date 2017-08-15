<?php
require("db_cnt_info.php");



$creater_name1 = $_GET['creater_name'];
$page_name = $_GET['page_name'];

$member_name1 = $_GET['member_name'];

$creater_name=md5($creater_name1);
$member_name = md5($member_name1);


$result = $dbcnt->query("select * from user_".$member_name.".like_page where creater_name like '".$creater_name."' AND page_name like '".$page_name."'");
$row = $result->fetch(PDO::FETCH_ASSOC);

if($row <=0){
    $result = $dbcnt->exec("INSERT INTO user_".$member_name.".like_page(creater_name,page_name)
	VALUES('".$creater_name."','".$page_name."')");
    echo '|add_like_done|';
}
?>