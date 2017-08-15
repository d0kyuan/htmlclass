<?PHP
$name = $_GET['name'];
$dirname= "../".$name."_class";
$dh=opendir($dirname);
while ($dave=readdir($dh))
{
    if ($dave != "." && $dave != "..") { 
        $a =pathinfo($dave, PATHINFO_FILENAME );
        print('<a href="#" id="'.$a.'" class="classbutton" onClick="selectionclass(\''.$a.'\')">'.$a.'</a><br>');
    } 
}
closedir ($dh);
?>