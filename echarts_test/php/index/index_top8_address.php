<?php
header("Content-type=text/json;charset=UTF-8");
header('Access-Control-Allow-Origin:*');
//1.连接数据库 mysqli连接
$db_host="localhost";
$db_name="root";
$db_pwd="123456";
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
$sql="select * from index_top_address";
//6.发送sql语句
$result=mysqli_query($conn,$sql);
//7.处理sql语句
$data ='';
$array=array();

class test{//定义实体类
    public $address_top;
    public $number_of_address;
}

while($row=mysqli_fetch_array($result, MYSQLI_ASSOC)){
    $test = new test();
    $test->address_top=$row['address_top'];
    $test->number_of_address=$row['number_of_address'];
    $array[] = $test;
}

mysqli_close($conn);//关闭数据库连接
$data =json_encode($array);//转为json格式
echo $data;//发送数据
exit;