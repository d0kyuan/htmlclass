<?php
require("db_cnt_info.php");
$msg_pr_code=$_POST['msg_pr_code'];
$msg = $_POST['msg'];
$id = $_POST['id'];
$dn = 0;

$friend_name1 = $_POST['friend_name'];
$member_name1 = $_POST['member_name'];
$friend_name = md5($friend_name1);
$member_name = md5($member_name1);

$result1 =$dbcnt ->query("select * from user_".$friend_name.".msg_box where  msg_pr_code like '".$msg_pr_code."'");
$row1 = $result1->fetch(PDO::FETCH_ASSOC);

$dn = $row1['feedback_count'] +1;

if($row1>0){
    $result1 = $dbcnt->exec("UPDATE user_".$friend_name.".msg_box SET feedback_count = '".$dn."' WHERE account like '".$member_name."' AND msg_pr_code like '".$msg_pr_code."'");
    $result1 = $dbcnt->exec("INSERT INTO user_".$friend_name.".msg_".$msg_pr_code."_rep(msg_pr_code,account,msg)
    	VALUES('".$msg_pr_code."','".$member_name."','".$msg."')");
}


echo $member_name1."|".$msg;

?>