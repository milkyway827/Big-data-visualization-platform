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
$sql="select * from index_age_distribution";
//6.发送sql语句
$result=mysqli_query($conn,$sql);

$data ='';
$array=array();

class test{
    public $age_range;
    public $number_of_people;
}

while($row=mysqli_fetch_array($result, MYSQLI_ASSOC)){
    $test = new test();
    $test->age_range=$row['age_range'];
    $test->number_of_people=$row['number_of_people'];
    $array[] = $test;
}

mysqli_close($conn);
$data =json_encode($array);
echo $data;
exit;