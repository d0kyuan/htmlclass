<?php

require("db_cnt_info.php");
$member_name1 = $_GET['member_name'];

$member_name = md5($member_name1);

$count=0;
foreach($dbcnt->query("select * from user_".$member_name.".friend_list") as $row) {
    $result1 = $dbcnt->query("select * from htmlclass.userinfo where account like '".$row['account']."'");
    $row1 = $result1->fetch(PDO::FETCH_ASSOC);
    $count+=1;
    echo '<div class="friend_list">
            <div class="friend_name_area">
                <p class="friend_name_title">名稱 : </p>
                <p class="friend_name">'. $row1['username'].'</p>
             </div>
             <div class="accept_deny_btn_area">
                 <a class="accept_deny_btn" onClick="delete_friend(\''. $row1['username'].'\')">刪除好友</a>
                <a class="accept_deny_btn" onClick="show_creater(\''. $row1['username'].'\',1)">查看好友</a>
             </div>
            </div>';
}



if($count==0){
        echo '<div class="friend_list">
                 <div class="no_find">
                    <p style="text-align: center;">抱歉,目前沒有好友</p>
                 </div>
             </div>';
}
?>