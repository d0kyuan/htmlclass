<?php
require("db_cnt_info.php");
$statement = $dbcnt->query('SELECT * FROM htmlclass.userinfo');

while($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    echo $row['id'] . ' ' . $row['account'];
}


?>