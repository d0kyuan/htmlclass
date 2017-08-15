<?php
require("db_cnt_info.php");
$myaccount1 = $_GET['myaccount'];
$member_name1 = $_GET['member_name'];


$myaccount = md5($myaccount1);
$member_name = md5($member_name1);
$count=1;
$count1=0;
$temp="";
/*

    $result1 =$dbcnt ->query("select * from user_".$member_name.".msg_".$row['msg']."_nice where account like '".$row['account']."'");
    $row1 = $result1->fetch(PDO::FETCH_ASSOC);
    if($row1>0){
        $temp =  '<p class="rep_btn" id="nice_btn">您已經按過贊了('.$dn.')</p>';
    }else{
        $temp = '<p class="rep_btn" id="nice_btn'.$count.'" onclick="get_nice(\''.$row['id'].'\',\''.$count.'\')">讚('.$row['nice_count'].')</p>';
    }
*/

foreach($dbcnt->query("select * from user_".$member_name.".msg_box;") as $row) {

    $feedback="";


    foreach($dbcnt->query("select count(*) from user_".$member_name.".msg_".$row['msg_pr_code']."_nice WHERE account like '".$myaccount."';") as $row1) {
        if($row1['count(*)']>0){
            $temp =  '<p class="rep_done_btn" id="nice_btn'.$count.'">您已經按過贊了('.$row['nice_count'].')</p>';

        }else{
            $temp = '<p class="rep_btn" id="nice_btn'.$count.'" onclick="get_nice(\''.$count.'\')">讚('.$row['nice_count'].')</p>';

        }

    }


    if($row['feedback_count']>0){
        foreach($dbcnt->query("select * from user_".$member_name.".msg_".$row['msg_pr_code']."_rep") as $row2) {
            $result4 = $dbcnt->query("select * from htmlclass.userinfo where account like '".$row2['account']."'");
            $row4 = $result4->fetch(PDO::FETCH_ASSOC);
            $count1+=1;
            $feedback .= '<div id="req_msg'.$count1.'" class="msg_rep">
                            <p class="member_name">'.$row4['username'].' <span>說 : </span></p>
                            <p id="msg_context'.$count1.'" class="msg">'.$row2['msg'].'</p>
                        </div>';


        }

    }else{
        $feedback ="";
    }
    $result3 = $dbcnt->query("select * from htmlclass.userinfo where account like '".$row['account']."'");
    $row3 = $result3->fetch(PDO::FETCH_ASSOC);
    $temp1.= '
        <div class="msg_list">
            <div class="msg_area">
                <p class="member_name">'.$row3['username'].' <span>說 : </span></p>
                <p id="msg_context'.$count.'" class="msg">'.$row['msg'].'</p>
            </div>
            <div id="msg_rep'.$count.'">
                '.$feedback.'
            </div>
            <div class="feed_back" id="feed_back'.$count.'">
            </div>
            <div id="temp_nice'.$count.'">
            '.$temp.'
            </div>
            <p class="rep_btn" id="rep_btn'.$count.'" onclick="rep_msg(\''.$count.'\')">回復留言</p>
        </div>
    ';
    $temp2 .=$row['msg_pr_code']."||";
    $count+=1;
}

if($count==1){
    echo'<div class="msg_list">
                 <div class="no_msg">
                    <p style="text-align: center;">抱歉,目前沒有留言</p>
                 </div>
             </div>';
}else{
    echo $temp1."||".$temp2;
}




?>
