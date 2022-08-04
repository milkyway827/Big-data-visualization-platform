package com.bishe;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.bishe.*.mapper")
public class XAadminApplication {
    public static void main(String[] args) {
        SpringApplication.run(XAadminApplication.class);
    }
}
