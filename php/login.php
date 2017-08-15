<?php
require("db_cnt_info.php");
require_once("check_input_str.php");
$account1 = $_POST['account'];
$password1 = $_POST['password'];
print($account1,$password1)
if(check_str($account1) && check_str($password1)){
    $account = md5($account1);
    $password = md5($password1);
    $result = $dbcnt->query("SELECT password from htmlclass.userinfo where account like '".$account."'");
    $row = $result->fetch(PDO::FETCH_ASSOC);
    if($row>1){
        if(strcmp($password,$row['password'])== 0){
            echo "|loginss|";
        }else{
            echo $password."|".$password1;
        }
    }else{
        echo "noaccount";
    }
}else{
    echo "error";
}
?>
