package com.bishe.log.vo;

import com.bishe.common.vo.Page;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * 按code进行查询
 * 按日期进行查询
 */

@Data
public class LogQuery extends Page {
    private Integer code;

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date startDate;

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date endDate;
}
