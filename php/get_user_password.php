<?php
require("db_cnt_info.php");

$account = $_POST['account'];

$re = $dbcnt->query("select * from htmlclass.userinfo WHERE account like '".$account."'");
$row = $re->fetch(PDO::FETCH_ASSOC);


echo $row['password'];
?>