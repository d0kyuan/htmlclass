<?php

require("db_cnt_info.php");
$friend_name1 = $_POST['friend_name'];
$member_name1 = $_POST['member_name'];
$msg = $_POST['msg'];
$friend_name = md5($friend_name1);
$member_name = md5($member_name1);


$result =$dbcnt ->query("select max(id) from user_".$friend_name.".msg_box");
$row = $result->fetch(PDO::FETCH_ASSOC);



$pr_code = date(Ymd).$row['max(id)']+1;

$result = $dbcnt->exec("INSERT INTO user_".$friend_name.".msg_box(account,msg,msg_pr_code)
	VALUES('".$member_name."','".$msg."','".$pr_code ."')");



$result = $dbcnt->exec("CREATE TABLE user_".$friend_name.".msg_".$pr_code."_nice (
                            msg_pr_code varchar(255) DEFAULT NULL ,
                            account varchar(255) NOT NULL,
                            PRIMARY KEY (`account`)
                            )"); 
$result = $dbcnt->exec("CREATE TABLE user_".$friend_name.".msg_".$pr_code."_rep (
                            id int(11) NOT NULL AUTO_INCREMENT,
                            msg_pr_code varchar(255) DEFAULT NULL ,
                            account varchar(255) DEFAULT NULL,
                            msg varchar(255) DEFAULT NULL,
                            PRIMARY KEY (`id`)
                            )"); 

$result =$dbcnt ->query("select * from user_".$friend_name.".msg_box where account like '".$member_name."' AND msg like '".$msg."'");
$row = $result->fetch(PDO::FETCH_ASSOC);
if($row>0){
    echo '|addmsgsess|';
}else{
    echo '|addmsgfail|';
}


?>