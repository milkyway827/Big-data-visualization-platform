package com.bishe.common.vo;

import lombok.Data;

/**
 * vo 展示层需要显示的数据。
 * 因使用 layui ，创建一个统一的结果类
 */

@Data
public class Result<T> {

    private Integer code;       //返回码，0 成功
    private String message;     //返回描述
    private T data;             //返回数据
    private Long count;         //分页查询总记录数

    private Result(){}  //无参构造

    private Result(Integer code, String message, T data, Long count) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.count = count;
    }

    public static Result<Object> success(){
        return new Result(0,"success,",null,null);
    }
    public static Result<Object> success(String message){
        return new Result(0,message,null,null);
    }

    //可以new出一个带有data和count的对象
    public static Result<Object> success(Object data,Long count){
        return new Result(0,"success,",data,count);
    }


    public static Result<Object> fail(String message){
        return new Result(-1,message,null,null);
    }
}
