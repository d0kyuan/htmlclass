<?php
require("db_cnt_info.php");

$member_name1 = $_GET['member_name'];

$member_name = md5($member_name1);

foreach($dbcnt->query("select * from user_".$member_name.".like_page") as $row) {
    $result1 = $dbcnt->query("select * from htmlclass.userinfo where account like '".$row['creater_name']."'");
    $row1 = $result1->fetch(PDO::FETCH_ASSOC);
    $count+=1;
    echo '<div class="like_page_list">
            <div class="like_page_area">
                <p id="like_page_name_title">名稱:</p>
                <p id="like_page_name">'. $row['page_name'].'</p>
                <p id="creater_name_title">作者</p>
                <p id="like_page_creater_name">'.$row1['username'].'</p>
             </div>
             <div class="open_remove_like_page_btn_area">
                 <p class="open_remove_like_page_btn" onClick="open_show_page(\''.$row1['username'].'\',\''.$row['page_name'].'\')">查看</p>
                 <p class="open_remove_like_page_btn" onClick="remove_like_page(\''.$row1['username'].'\',\''.$row['page_name'].'\')">移除收藏</p>
             </div>
        </div>';
}


if($count==0){
        echo '<div class="friend_list">
                 <div class="no_find">
                    <p style="text-align: center;">抱歉,目前沒有收藏網頁</p>
                 </div>
             </div>';
}

?>