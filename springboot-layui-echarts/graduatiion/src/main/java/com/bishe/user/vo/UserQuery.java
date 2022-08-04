package com.bishe.user.vo;

import com.bishe.common.vo.Page;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * 按姓名进行查询
 * 按年龄进行查询
 */

@Data
public class UserQuery extends Page {
    private String name;

    private Integer startAge;

    private Integer endAge;

   /* @DateTimeFormat(pattern="yyyy-MM-dd")
    private Data startDate;

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Data endDate;*/
}
