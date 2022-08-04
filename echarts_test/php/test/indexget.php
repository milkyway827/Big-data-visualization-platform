<?php
header("Content-type=text/json;charset=UTF-8");
header('Access-Control-Allow-Origin:*');
//1.连接数据库 mysqli连接
$db_host="localhost";
$db_name="root";
$db_pwd="123456";
// $link=mysqli_connect($db_host,$db_name,$db_pwd);
$conn=mysqli_connect($db_host,$db_name,$db_pwd);
//2.判断是否连接成功
if(!$conn){
    echo"失败";
}
//3.设置字符集
mysqli_set_charset($conn,"uft8");
//4.选择数据库
mysqli_select_db($conn,"test2");
//5.写入sql语句
$sql="select * from test";
//6.发送sql语句
$result=mysqli_query($conn,$sql);
// var_dump($result);
//7.处理sql语句
// $result_array=mysqli_fetch_array($result);
$data ='';
$array=array();

class test{
    public $name;
    public $age;
}

while($row=mysqli_fetch_array($result, MYSQLI_ASSOC)){
    $test = new test();
    $test->name=$row['name'];
    $test->age=$row['age'];
    $array[] = $test;
    // print_r($result_array);
}

mysqli_close($conn);
// print_r($data);
// var_dump($data);

$data =json_encode($array);
// $data1=json_decode($data);
// print_r($data1);
echo $data;
exit;
//8.关闭数据库
//  mysqli_close($conn);

//  echo json_encode($result_array);
// $conn = mysqli_connect("localhost", "root", "123456") or die("连接数据库的过程失败！");

// $conn = mysql_connect("localhost", "root", "123456");
// if($conn){
//     echo"数据连接成功";
// }else{
//     echo"失败".mysql_error();
// }

/*
mysql_query("set names utf-8");
// mysql_select_db("test");
mysql_select_db("test2");//连接的数据库


// $resultset = mysql_query("select name, age  from echartsuser", $conn);
$resultset = mysql_query("select name, age  from test", $conn);
////////////////////////////////////////////////准备数据进行装填
$data = array();
////////////////////////////////////////////////实体类
class Test{
    public $username;
    public $age;
}
////////////////////////////////////////////////处理
while($row = mysql_fetch_array($resultset, MYSQL_ASSOC)) {
    $test = new Test();
    $test->username = $row['name'];//name age 为数据库中的字段
    $test->age = $row['age'];
    $data[] = $test;
}
$conn.close();
var_dump($data);
// 返回JSON类型的数据
echo json_encode($data);
*/
?>