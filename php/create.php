<?PHP
$temp="";
$ip = $_GET['ip'];
$word = $_GET['word'];
$member = $_GET['member'];
$membername = $_GET['membername'];
$temp_word = "";
$temp_word = $word;
if($member==1){
	$temp=$word.'<div id="btn_box">
		<a href="#inline_content" id="save_web" class="inline addbutton" onClick="check_save()">保存網頁</a></div>';
}else{

$temp=$word;
}
 $fp=fopen("../user_web/".$ip.".html","w");


 fputs($fp,'<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" type="text/css" href="../colorbox-master/colorbox.css">
<script src="../js/jquery.min.js"></script>
<script src="../colorbox-master/jquery.min.js"></script>
<script src="../colorbox-master/jquery.colorbox.js"></script>
<script>
	$(document).ready(function(){
		//Examples of how to assign the Colorbox event to elements
			$(".inline").colorbox({inline:true, width:"50%"});
		});
</script>
<script src="./js/goto_save.js"></script>
<title>編號:'.$ip.'的練習網頁</title>
</head>

<body onUnload="">
	
'.$temp.'
<div id="pop" style="display:none;">
	<div id="inline_content" style="color:black;display:block;">
		<div id="big_box">
			<div class="group">      
					<input id="filename_input" onkeyup="value=value.replace(/[^\w\.\/]/ig,\'\')" required>
					<span class="highlight"></span>
					<span class="bar"></span>
					<label>檔案名稱</label>
					</div>
			</div>
			<div id="sure_btn_box">
				<a href="#" class="addbutton" id="save_btn" onClick="go_save(\''.$temp_word.'\',\''.$membername.'\',\''.$ip.'\')" >儲存</a>
			</div>
		</div>
	</div>
</div>
</body>
</html>' );
 fclose($fp);

?>