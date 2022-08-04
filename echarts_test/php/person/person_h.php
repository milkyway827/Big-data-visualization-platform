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
//4.选择数据库
mysqli_select_db($conn,"test2");
//查询当前登录的用户名
$sql_re="select * from login_re where id=(select max(id) from login_re)";
//6.发送sql语句
$result_re=mysqli_query($conn,$sql_re);
//取出当前登录的用户名
$row1=mysqli_fetch_array($result_re, MYSQLI_ASSOC);
$test2=$row1['username'];
$username=$test2;

//查询当前的用户名的记录
$sql="select * from p_time where user_name='$username'";
$result=mysqli_query($conn,$sql);

$data ='';
$array=array();

class test{
    // var username = Array(); 
    public $user_name;
    public $day_p;
    public $hours_p;
}

while($row=mysqli_fetch_array($result, MYSQLI_ASSOC)){
    $test = new test();
    $test->user_name=$row['user_name'];
    $test->day_p=$row['day_p'];
    $test->hours_p=$row['hours_p'];
    $array[] = $test;
    // print_r($result_array);
}

mysqli_close($conn);
$data =json_encode($array);
echo $data;
exit;