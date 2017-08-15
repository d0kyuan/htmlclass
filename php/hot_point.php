<?php
require("db_cnt_info.php");
$page_name = $_GET['page_name'];
$member_name= $_GET['member_name'];
$result = $dbcnt->query("select * from htmlclass.hotlist where page_name like '".$page_name."' AND  member_name like '".$member_name."'");
$row = $result->fetch(PDO::FETCH_ASSOC);
try{
    $dbcnt -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$dbcnt -> beginTransaction();
if(count($row)<=1){
    $dbcnt->exec( "INSERT INTO  htmlclass.hotlist(page_name,page_hotpoint,member_name)
        VALUES('".$page_name."','0','".$member_name."') 
    ");
        
     $point = 1;
}else{
    $point = $row['page_hotpoint']+1;
}
$dbcnt->exec("UPDATE  htmlclass.hotlist SET page_hotpoint = '".$point ." ' WHERE page_name like '".$page_name."' AND  member_name like '".$member_name."'");
$dbcnt -> commit();
}catch (PDOException $e ){
	$dbcnt->rollBack();
	echo $e->getMessage();
}

?>