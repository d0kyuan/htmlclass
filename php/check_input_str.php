<?php



function check_str($l1)
{
    print("\r\n 2"+$l1);
    $l2 = "&,',\",<,>,!,%,#,$,@,=,?,/,(,),[,],{,},.,+,*,_, ,";
    $I2 = explode(',', $l2);
    $I2[] = ",";
 
    foreach ($I2 as $v) {
       if (strpos($l1, $v) !== false) {
           return 2;
       }
    }
    return 1;
}





?>