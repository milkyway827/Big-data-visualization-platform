<?php

    header("Content-type=text/json;charset=UTF-8");
    header('Access-Control-Allow-Origin:*');

    $mydbhost = "localhost";
    $mydbuser = "root";
    $mydbpass = '123456';
    $dbname = "test2";

    $username = $_POST['username'];//获取username的值  
    $password = $_POST['password'];//获取password的值

    session_start();
    $_SESSION['user']= $username;
    // print_r($_SESSION['usern']);
    //日志信息编码
    $code="101";
    //获取当前日期
    //date_default_timezone_set();     //将date函数默认时间设置中国区时间
    $currenttime=date("Y-m-d H:i:s");   //给变量赋值，调用date函数，格式为 年-月-日 时:分:秒

    $conn = mysqli_connect($mydbhost, $mydbuser, $mydbpass ,$dbname);
    if(! $conn){
        die("连接失败: ");
    }
    else
    { 
        /*里面可以不写内容*/
    }
    $sql="select * from user where username='$username' and password='$password'";		
    $result = mysqli_query($conn, $sql);
    $a=mysqli_fetch_array($result);
    //向表中插入数据方便调用

    $sql_login="INSERT INTO login_re (username) VALUES ('$username')";
    $resul10 = mysqli_query($conn, $sql_login);

?>