package com.bishe.eq_active.vo;

import com.bishe.common.vo.Page;
import lombok.Data;

/**
 * 按姓名进行查询
 * 按生日进行查询
 */

@Data
public class Eq_activeQuery extends Page {
    private Integer equipmentId;

    private Integer startDistance;

    private Integer endDistance;

   /* @DateTimeFormat(pattern="yyyy-MM-dd")
    private Data startDate;

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Data endDate;*/
}
