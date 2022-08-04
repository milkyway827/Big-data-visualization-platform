<?php
include("login.php");

if($a['username']==$username && $username!=''){

    //插入日志
    $sql3="INSERT INTO log (log_date, code,reason) VALUES ('$currenttime', '$code','$username 登录成功！')";		
    $result3 = mysqli_query($conn, $sql3);

    $url='http://localhost:8080/person_message.html';
    echo "<script> alert('登录成功！'); </script>";
    echo "<script>location.href='$url'</script>";
    echo $username;
}else{

    //插入日志
    $sql4="INSERT INTO log (log_date, code,reason) VALUES ('$currenttime', '$code','$username 登录失败，所填信息有误！')";		
    $result4 = mysqli_query($conn, $sql4);

    $url='http://localhost:8080/html/login.html';
    echo "<script> alert('登录失败，请输入正确的用户名和密码，或注册账号！'); </script>"; 
    echo "<script>location.href='$url'</script>";
    
}