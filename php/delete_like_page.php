



<?php
require("db_cnt_info.php");

$member_name1 = $_GET['member_name'];
$creater_name1 = $_GET['creater_name'];
$page_name = $_GET['page_name'];

$member_name = md5($member_name1);
$creater_name = md5($creater_name1);


$result = $dbcnt->query("select * from user_".$member_name.".like_page where creater_name like '".$creater_name."' AND page_name like '".$page_name."'");
$row = $result->fetch(PDO::FETCH_ASSOC);

if($row>0){
    $dbcnt->exec("DELETE FROM user_".$member_name .".like_page WHERE creater_name like '".$creater_name."'  AND page_name like '".$page_name."'");
}

?>

