package com.bishe.log.controller;

import com.bishe.common.vo.Result;
import com.bishe.log.model.Log;
import com.bishe.log.service.LogService;
import com.bishe.log.vo.LogQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 获取用户信息
 * 可以为分页
 */

@Controller
@RequestMapping("/log")
public class LogController {

    @Autowired
    private LogService logService;

    /**
     * 数据表格页面
     * @return
     */
    @GetMapping("")
    public String toLogListUI(){
        return "log/logList";
    }

    @GetMapping("/list")
    @ResponseBody
    public Result<Object> getLogList(LogQuery param){//请求参数
        List<Log> list= logService.getLogList(param);
        Long count = logService.countLogList(param);//总数据量
        return Result.success(list,count);
    }

}
