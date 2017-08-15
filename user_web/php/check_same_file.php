<?php
$file_name = $_GET['$file_name'];
$membername = $_GET['membername'];
$dh=opendir( "../../member_web/".$membername."/");
$same = 0;
while ($dave=readdir($dh))
{
     if ($dave != "." && $dave != ".." && $dave != "ajaxhtml" && $dave != "index.html") { 
         if($dave==$file_name.".html"){
             $same=1;
            break;
         }
    } 
}
if($same==0){
    echo "|nonesame|";
}else{
   echo "|samefile|";
}

?>