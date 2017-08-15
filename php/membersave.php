<?PHP
 $account1 = $_GET['account'];
 $name = $_GET['name'];
 $word = $_GET['word'];
$account = md5($account1);
 $fp=fopen("../member_web/".$account."/". $name.".html","w");


 fputs($fp,'<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="css/style.css">
<title>'.$name.'</title>
</head>

<body>
	
'.$word.'

</body>
</html>' );
 fclose($fp);






echo '<script>window.location.href="../member_web/'.$account.'/'.$name.'.html";</script>';
?>