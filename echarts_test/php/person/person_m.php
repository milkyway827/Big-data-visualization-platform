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

$sql_re="select * from login_re where id=(select max(id) from login_re)";
//6.发送sql语句
$result_re=mysqli_query($conn,$sql_re);
//取出当前登录的用户名
$row1=mysqli_fetch_array($result_re, MYSQLI_ASSOC);
$test2=$row1['username'];
// echo $test2;
$username=$test2;

//5.写入sql语句
$sql="select * from user where username='$username'";
//6.发送sql语句
$result=mysqli_query($conn,$sql);
$data ='';
$array=array();
$sql_td="select sum(total_d) as td from p_distance where user_d='$username'";
$result_td=mysqli_query($conn,$sql_td);
$sql_th="select sum(hours_p) as th from p_time where user_name='$username'";
$result_th=mysqli_query($conn,$sql_th);

class test{
    // var username = Array(); 
    public $username;
    public $name;
    public $sex;
    public $age;
    public $birthday;
    public $phone;
    public $address;
    public $equipment_id;

    public $distance_t;
    public $hours_t;

}

while($row=mysqli_fetch_array($result, MYSQLI_ASSOC)
        and $row_td=mysqli_fetch_array($result_td, MYSQLI_ASSOC)
        and $row_th=mysqli_fetch_array($result_th, MYSQLI_ASSOC)){
    $test = new test();
    $test->username=$row['username'];
    $test->name=$row['name'];
    $test->sex=$row['sex'];
    $test->age=$row['age'];
    $test->birthday=$row['birthday'];
    $test->phone=$row['phone'];
    $test->address=$row['address'];
    $test->equipment_id=$row['equipment_id'];

    $test->distance_t=$row_td['td'];
    $test->hours_t=$row_th['th'];

    $array[] = $test;
    // print_r($result_array);
}
//读取到数据后清除数据
$sql_delete="DELETE from login_re";
$result_delete=mysqli_query($conn,$sql_delete);

mysqli_close($conn);
$data =json_encode($array);
echo $data;
exit;