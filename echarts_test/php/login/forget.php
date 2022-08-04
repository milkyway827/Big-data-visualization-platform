<?php

    header("Content-type=text/json;charset=UTF-8");
    header('Access-Control-Allow-Origin:*');

    $mydbhost = "localhost";
    $mydbuser = "root";
    $mydbpass = '123456';
    $dbname = "test2";

    // $phone = $_POST['phone'];//获取phone的值
    $user = $_POST['username'];//获取username的值  
    $phone = $_POST['phone'];//获取phone的值
    $psw = $_POST['password'];//获取password的值
    $ispsw = $_POST['ispassword'];//获取password的值
    
    //日志信息编码
    $code="103";
    //获取当前日期
    //date_default_timezone_set();     //将date函数默认时间设置中国区时间
    $currenttime=date("Y-m-d H:i:s");   //给变量赋值，调用date函数，格式为 年-月-日 时:分:秒

    //开始判断
 
    if($user == "" && $psw == "" && $ispsw == ""){
        echo "<script> alert('都还没填呢！'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if($user == "" && $psw == ""){
        echo "<script> alert('账号和密码都还没填呢'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if ($psw == "" && $ispsw == "") {
        echo "<script> alert('密码都还没填呢'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if($user == "" && $ispsw == ""){
        echo "<script> alert('账号和重复密码还没填呢'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if ($user == "") {
        echo "<script> alert('账号还没填呢'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if ($phone == "") {
        echo "<script> alert('手机号还没填呢'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if ($psw == "") {
        echo "<script> alert('密码还没填呢'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if ($ispsw == "") {
        echo "<script> alert('重复密码还没填呢'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if ($psw !== $ispsw) {
        echo "<script> alert('两次输入密码不一样呢'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if (strlen($user) < 4){
        echo "<script> alert('账号不能小于4位数'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if (strlen($phone) > 11 && strlen($phone)<11){
        echo "<script> alert('手机号码格式不正确'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if (strlen($psw) < 8){
        echo "<script> alert('密码不能小于8位数'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if (preg_match('/^[\x{4e00}-\x{9fa5}]+$/u', $user)>0){
        echo "<script> alert('用户名不能为中文'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if (preg_match('/[\x{4e00}-\x{9fa5}]/u', $user)>0){
        echo "<script> alert('用户名不能存在中文'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else if(preg_match("/[\'.,:;*?~`!@#$%^&+=)(<>{}]|\]|\[|\/|\\\|\"|\|/",$user)){
        echo "<script> alert('用户名不能存在特殊符号'); </script>";
        echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
    }else{
        // 数据库连接
        $conn = mysqli_connect($mydbhost, $mydbuser, $mydbpass ,$dbname);

        //查询数据库该用户信息是否对应
        $sql="SELECT * FROM user WHERE username = '$user'and phone = '$phone'";		
        $result = mysqli_query($conn, $sql);
        $exist_result = mysqli_num_rows($result);
        if($exist_result){
            //如果用户名和手机号对应，更改密码
            $sql2= "update user set password='$psw' where username = '$user'and phone = '$phone'";
            $result2 = mysqli_query($conn, $sql2);

            //插入日志
            $sql3="INSERT INTO log (log_date, code,reason) VALUES ('$currenttime', '$code','$user 更改密码成功！')";		
            $result3 = mysqli_query($conn, $sql3);
            //返回信息
            echo "<script> alert('密码重置成功！'); </script>";
            echo "<script>location.href='http://localhost:8080/html/login.html'</script>";
        }else{

            //插入日志
            $sql4="INSERT INTO log (log_date, code,reason) VALUES ('$currenttime', '$code','$user 更改密码失败，所填信息有误！')";		
            $result4 = mysqli_query($conn, $sql4);
            //返回信息
            echo "<script> alert('填写信息错误'); </script>";
            echo "<script>location.href='http://localhost:8080/html/forget.html'</script>";
        }
    }
    mysqli_close($conn);

?>