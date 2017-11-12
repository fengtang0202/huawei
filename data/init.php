<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin:*');
$conn=mysqli_connect('127.0.0.1','root','','hw_mall',3306);
mysqli_query($conn,'set names utf8');
function sql_execute($sql){
  global $conn;
  $result = mysqli_query($conn, $sql);
  if(!$result){
    return  "查询执行失败！请检查SQL语法：$sql";
  }else {
    if(stripos($sql,"select")===0){
      return $rowList = mysqli_fetch_all($result,MYSQLI_ASSOC);
    }else{
      return $result;
    }
  }
}