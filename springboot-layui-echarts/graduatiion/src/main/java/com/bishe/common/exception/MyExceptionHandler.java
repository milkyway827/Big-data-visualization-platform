package com.bishe.common.exception;

import com.bishe.common.vo.Result;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class MyExceptionHandler {

    @ResponseBody  //返回json
    @ExceptionHandler(Exception.class)
    public Result<Object> myHandler(Exception e){
        return Result.fail("系统错误"+e.getMessage());
    }
}
