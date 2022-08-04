package com.bishe.test;

import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.util.DigestUtils;

public class CrypTest {

    @Test
    public void test(){
        //md5 spring提供的加密方法，加盐得自己处理
       /* String s1 = DigestUtils.md5DigestAsHex("123456".getBytes());
        String s2 = DigestUtils.md5DigestAsHex("123456".getBytes());
        System.out.println(s1);
        System.out.println(s2);*/

        //spring 安全框架提供的加密方法，可以自动加盐，无需自己保存盐值
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encode1 = passwordEncoder.encode("admin");
        String encode2 = passwordEncoder.encode("123456");
        String encode3 = passwordEncoder.encode("123456");
        System.out.println(encode1);
        System.out.println(encode2);
        System.out.println(encode3);

        //验证
        boolean matches1 = passwordEncoder.matches("admin","$2a$10$0.qv6MIZoojVHVkB6xXNee0PwvrnwoPrir654kvdM3dMCjrc01WGm");
        boolean matches2 = passwordEncoder.matches("123456","$2a$10$7YBuDBkzoRgTmXIP/FQY2OoLjKRfAS5Kl6dlPNg/vBeGoNMBv1qoy");
        boolean matches3 = passwordEncoder.matches("123456","$2a$10$ZX1oP.IvIVBM4kTTbTvxceYcpa.UVslEEoE4wp32Ka1l8Y/E.6Wxq");

        System.out.println(matches1);
        System.out.println(matches2);
        System.out.println(matches3);
    }
}
