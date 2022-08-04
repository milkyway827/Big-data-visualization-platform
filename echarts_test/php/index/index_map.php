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
$sql="select * from index_map";
//6.发送sql语句
$result=mysqli_query($conn,$sql);
// var_dump($result);
//7.处理sql语句
// $result_array=mysqli_fetch_array($result);
$data ='';
$array=array();

class test{
    public $province;
    public $number_of_province;
}

while($row=mysqli_fetch_array($result, MYSQLI_ASSOC)){
    $test = new test();
    $test->province=$row['province'];
    $test->number_of_province=$row['number_of_province'];
    $array[] = $test;
}

mysqli_close($conn);
$data =json_encode($array);
// var_dump($data1);
echo $data;
exit;