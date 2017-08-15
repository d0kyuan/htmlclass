<?php
require("db_cnt_info.php");
include_once("check_input_str.php");

$username = $_POST['username'];
$account1 = $_POST['account'];
$password1 = $_POST['password'];
$loginq = $_POST['loginq'];
$logina= $_POST['logina'];
$share= $_POST['share'];


if(check_str($account1) && check_str($password1)){
    $account = md5($account1);
    $password = md5($password1);
    $result = $dbcnt->query("select * from htmlclass.userinfo where account like '".$account."'");
    $row = $result->fetch(PDO::FETCH_ASSOC);
    if($row>0){
        echo "|sameaccount|";

    }else{
        
        $result = $dbcnt->exec("INSERT INTO htmlclass.userinfo(username,account,password,loginq,logina,share)
	VALUES('".$username."','".$account."','".$password."','".$loginq."','".$logina."','".$share."')");

        mkdir(dirname(dirname(__FILE__)). "/member_web/".$account,'0777'); 

        $b = dirname(dirname(__FILE__)). "/member_web/".$account."/";
        copy("../user_web/index.html","../member_web/".$account."/index.html");


        $result = $dbcnt->exec("CREATE DATABASE user_".$account.";");

        $result = $dbcnt->exec("CREATE TABLE user_".$account.".friend_list (
                            id int(11) NOT NULL AUTO_INCREMENT,
                            account varchar(255) DEFAULT NULL,
                            PRIMARY KEY (`id`)
                            )");    

        $result = $dbcnt->exec("CREATE TABLE user_".$account.".friend_req (
                         id int(11) NOT NULL AUTO_INCREMENT,
                         account varchar(255) DEFAULT NULL,
                         PRIMARY KEY (`id`)
                         )");

        $result = $dbcnt->exec("CREATE TABLE user_".$account.".msg_box (
                         id int(11) NOT NULL AUTO_INCREMENT,
                         account varchar(255) DEFAULT NULL,
                         msg varchar(255) DEFAULT NULL,
                         nice_count int(255) DEFAULT '0',
                         feedback_count int(255) DEFAULT '0',
                         msg_pr_code varchar(255) NOT NULL,
                        PRIMARY KEY (`id`,`msg_pr_code`)
                         )");
        $result = $dbcnt->exec("CREATE TABLE user_".$account.".like_page (
                     id int(11) NOT NULL AUTO_INCREMENT,
                     creater_name varchar(255) DEFAULT NULL,
                     page_name varchar(255) DEFAULT NULL,
                     PRIMARY KEY (`id`)
                     )");



        echo "|accountsighup|";

    }
}else{
   echo "|error|";
  
}









?>
