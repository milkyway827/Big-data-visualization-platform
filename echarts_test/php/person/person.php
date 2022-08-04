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

//用户信息
$sql_m="select * from user where username='$username'";
$result_m=mysqli_query($conn,$sql_m);
$data_m ='';
$array_m=array();
//使用时间
$sql_h="select * from p_time where user_name='$username'";
$result_h=mysqli_query($conn,$sql_h);
$data_h ='';
$array_h=array();
//路程
$sql_d="select * from p_distance where user_d='$username'";
$result_d=mysqli_query($conn,$sql_d);
$data_d ='';
$array_d=array();

class test_m{
    // 个人信息 
    public $username;
    public $name;
    public $sex;
    public $age;
    public $birthday;
    public $phone;
    public $address;
    public $equipment_id;
    //使用时间
    public $user_name;
    public $day_p;
    public $hours_p;
    //路程
    public $user_d;
    public $month_d;
    public $shang;
    public $zhong;
    public $xia;
    public $total_d;
}
// class test_h{
//     //使用时间
//     public $user_name;
//     public $day_p;
//     public $hours_p;
// }
// class test_d{
//     //路程
//     public $user_d;
//     public $month_d;
//     public $shang;
//     public $zhong;
//     public $xia;
//     public $total_d;
// }
//用户信息
while($row=mysqli_fetch_array($result_m, MYSQLI_ASSOC) 
        and $row1=mysqli_fetch_array($result_h, MYSQLI_ASSOC) 
        and $row2=mysqli_fetch_array($result_d, MYSQLI_ASSOC)){
    $test = new test_m();
    $test->username=$row['username'];
    $test->name=$row['name'];
    $test->sex=$row['sex'];
    $test->age=$row['age'];
    $test->birthday=$row['birthday'];
    $test->phone=$row['phone'];
    $test->address=$row['address'];
    $test->equipment_id=$row['equipment_id'];

    $test->user_name=$row1['user_name'];
    $test->day_p=$row1['day_p'];
    $test->hours_p=$row1['hours_p'];

    $test->user_d=$row2['user_d'];
    $test->month_d=$row2['month_d'];
    $test->shang=$row2['shang'];
    $test->zhong=$row2['zhong'];
    $test->xia=$row2['xia'];
    $test->total_d=$row2['total_d'];

    $array_m[] = $test;
}
$data_m =json_encode($array_m);
echo $data_m;
//使用时间
// while($row=mysqli_fetch_array($result_h, MYSQLI_ASSOC)){
//     $test = new test_h();
//     $test->user_name=$row['user_name'];
//     $test->day_p=$row['day_p'];
//     $test->hours_p=$row['hours_p'];
//     $array_h[] = $test;
// }
// $data_h =json_encode($array_h);
// echo $data_h;
//路程
// while($row=mysqli_fetch_array($result_d, MYSQLI_ASSOC)){
//     $test = new test_d();
//     $test->user_d=$row['user_d'];
//     $test->month_d=$row['month_d'];
//     $test->shang=$row['shang'];
//     $test->zhong=$row['zhong'];
//     $test->xia=$row['xia'];
//     $test->total_d=$row['total_d'];
//     $array_d[] = $test;
//     // print_r($result_array);
// }

mysqli_close($conn);
// $data_d =json_encode($array_d);
// echo $data_d;


exit;