<?php
require_once('../init.php');
$sql="Select * from hw_product";
echo json_encode(sql_execute($sql));