<?php
require("db_cnt_info.php");
$friend_name1 = $_POST['friend_name'];
$member_name1 = $_POST['member_name'];
$msg_pr_code=$_POST['msg_pr_code'];
$id = $_POST['id'];
$dn = 0;

$friend_name=md5($friend_name1);
$member_name = md5($member_name1);

$result =$dbcnt ->query("select * from user_".$friend_name.".msg_".$msg_pr_code."_nice where account like '".$member_name."'");
$row = $result->fetch(PDO::FETCH_ASSOC);

$result1 =$dbcnt ->query("select * from user_".$friend_name.".msg_box WHERE msg_pr_code like '".$msg_pr_code."'");
$row1 = $result1->fetch(PDO::FETCH_ASSOC);

$dn = $row1['nice_count'] +1;
if ($row<=0){
    if($row1>0){
        $result1 = $dbcnt->exec("UPDATE  user_".$friend_name.".msg_box SET nice_count = '".$dn."' WHERE  msg_pr_code like '".$msg_pr_code."'");
        $result1 = $dbcnt->exec("INSERT INTO user_".$friend_name.".msg_".$msg_pr_code."_nice(msg_pr_code,account)
    	VALUES('".$msg_pr_code."','".$member_name."')");
    }
}

echo '<p class="rep_done_btn" id="nice_btn'.$id.'">您已經按過贊了('.$dn.')</p>'; 




?>