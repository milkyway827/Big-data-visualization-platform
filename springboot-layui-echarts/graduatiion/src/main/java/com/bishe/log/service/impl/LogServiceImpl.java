package com.bishe.log.service.impl;
import com.bishe.log.mapper.LogMapper;
import com.bishe.log.model.Log;
import com.bishe.log.service.LogService;
import com.bishe.log.vo.LogQuery;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class LogServiceImpl implements LogService {

    @Resource
    private LogMapper logMapper;

    @Override
    public List<Log> getLogList(LogQuery param) {
        return logMapper.getLogList(param);
    }

    @Override
    public Long countLogList(LogQuery param) {
        return logMapper.countLogList(param);
    }

}
