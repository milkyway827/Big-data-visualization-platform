package com.bishe.common.vo;

import lombok.Data;

import java.io.Serializable;

/**
 * 分页参数
 */
@Data
public class Page implements Serializable {
    private Integer page;
    private Integer limit;

    //得到分页的开始页,1L 让结果为Long型
    public Long getStart(){
        return (page - 1L)*limit;
    }
}
