<?php
require("db_cnt_info.php");

$key_word = $_GET['key_word'];


$count =0;

$temp_str = "";




$dh=opendir("../member_web/");

while ($dave=readdir($dh))
{
    if ($dave != "." && $dave != ".." && $dave != "ajaxhtml" && $dave != "index.html") { 
        $result = $dbcnt->query("select * from htmlclass.userinfo where account like '".$dave."'");
        $row = $result->fetch(PDO::FETCH_ASSOC);
        if($row['share']==0){
            $dh1=opendir("../member_web/".$dave."/");
            while ($dave1=readdir($dh1))
            {
         
                if ($dave1 != "." && $dave1 != ".."  && $dave1 != "index.html") {
                    if(stristr($dave1,$key_word)){
                        $name = explode(".",$dave1);
                        $tmp_name = str_replace($key_word,"<span style='color:white'>".$key_word."</span>",$name[0]);
                        $temp_str .= '<div class="hot_page_list">
                                <div class="page_name_zone">
                                    <p class="title_name">網站名稱 : </p>
                                    <p class="page_name">'. $tmp_name.'</p>
                                 </div>
                                 <div class="hot_page_list_area">
                                    <p class="creater">作者 : </p>
                                    <p class="creater_name">'.$row['username'].'</p>
                                    <a class="hot_page_list_btn" onClick="open_search_page(\''.$name[0].'\',\''.$row['username'].'\')">前往
                                    </a>
                                 </div>
                                </div>||';
                        $count+=1;
                   }   
                   
                }
            }
            closedir ($dh1);    
        }

    } 
}
closedir ($dh);








$notmember ="|notmember|";
$dh=opendir("../user_web/");

while ($dave=readdir($dh))
{
    if ($dave != "." && $dave != ".." && $dave != "ajaxhtml" && $dave != "index.html") { 
        if(stristr($dave,".html")){
            if(stristr($dave,$key_word)){
                 $name = explode(".",$dave);
                 $tmp_name = str_replace($key_word,"<span style='color:white'>".$key_word."</span>",$name[0]);
                 $temp_str .= '<div class="hot_page_list">
                                    <div class="page_name_zone">
                                        <p class="title_name">網站名稱 : </p>
                                        <p class="page_name">'.$tmp_name .'</p>
                                     </div>
                                     <div class="hot_page_list_area">
                                        <p class="creater">作者 : </p>
                                        <p class="creater_name">路人甲</p>
                                        <a class="hot_page_list_btn" onClick="open_search_page(\''.$name[0].'\',\''.$notmember.'\')">前往
                                        </a>
                                     </div>
                                    </div>||';
                 $count+=1;
            }
        }

    } 
}
closedir ($dh);





if($count==0){
   echo'<div class="hot_page_list">
                 <div class="no_find">
                        <p style="text-align: center;">抱歉,沒有找到相關網頁!!請換個關鍵字後再次查詢</p>
                 </div>
             </div>';

}else{
    echo $temp_str ;
}

?>