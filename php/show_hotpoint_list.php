<?php
require("db_cnt_info.php");
$count=1;
$dm =0;
   echo '<div class="hot_list_di">
                <p class="point_one">名次</p>
                <p class="point_two">網頁名</p>
                <p class="point_three">點擊率</p>
                <p class="point_four"> 作者</p>
            </div>';
  foreach($dbcnt->query('select * from htmlclass.hotlist ORDER BY page_hotpoint DESC') as $row) {
    if($row['member_name']=="|notmember|"){
        $name ="路人甲";
    }else{
        $name = $row['member_name'];
    } 
   
      echo '<div class="hot_list_di" onclick="open_search_page(\''.$row['page_name'].'\',\''.$row['member_name'].'\')">
                <p class="point_one">'.$count.'.</p>
                <p class="point_two">'.$row['page_name'].'</p>
                <p class="point_three">'.$row['page_hotpoint'].'次</p>
                <p class="point_four"> '.$name.'</p>
            </div>';
           $count +=1;
      $dm +=1;
      if($dm>=5){
          return;
      }

  }

?>