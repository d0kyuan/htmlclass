<?php
require("db_cnt_info.php");

$account = $_POST['account'];

$result = $dbcnt->query("select * from htmlclass.userinfo where username like '".$account."'");
$row = $result->fetch(PDO::FETCH_ASSOC);
echo $row['username'];
?>