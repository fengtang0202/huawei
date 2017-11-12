<?php
require_once('../init.php');
$sql='select * from banner';
echo json_encode(sql_execute($sql));