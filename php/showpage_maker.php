<?php
$account1 = $_GET['account'];
$account = md5($account1);
$divmake = "";
$dh=opendir("../member_web/".$account);
$dm= 0;
while ($dave=readdir($dh))
{
    if ($dave != "." && $dave != ".." && $dave != "index.html") { 
        $dm+=1;
    $dave =iconv("BIG5", "UTF-8",$dave);
    $name = explode(".",$dave);
    $divmake .=' <div class="page_list">
                    <div class="page_name_zone">
                        <p class="title_name">網站名稱 : </p>
                        <p class="page_name">'.$name[0].'</p>
                     </div>
                     <div class="page_acv_sel">
                        <a class="page_acv_sel_btn" onClick="open_page(\''.$name[0].'\')">開啟</a>
                        <a class="page_acv_sel_btn" onClick="download_file(\''.$name[0].'\')">下載</a>
                        <a class="page_acv_sel_btn delete_btn" id="show_delete_btn" onClick="delete_page(\''.$name[0].'\')">刪除</a>
                     </div>
                </div>';
    }
}
closedir ($dh);




if($dm==0){
     $divmake .= '
            <div class="hot_page_list">
                            <div class="no_find">
                                <p style="text-align: center;">您目前還沒有製作過的網頁!請按返回開始製作網頁</p>
                         </div>
             </div>
        ';
}
echo '
<div id="all_list">
'.$divmake.'
<div  style="text-align:center;margin-bottom:1%;">
	<a href="#" id="goback" class="addbutton" style="margin:0 auto" onClick="goback_btn_click()">返回</a> 
</div>
</div>
 ';



?>