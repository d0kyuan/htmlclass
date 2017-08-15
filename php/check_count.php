<?php

$dh=opendir("../user_web");
$i=-4;
while ($dave=readdir($dh))
{
if ($dave != "." && $dave != "..") { 
	$i+=1;
} 
}
closedir ($dh);

echo $i;

?>