package com.bishe.log.service;

import com.bishe.log.model.Log;
import com.bishe.log.vo.LogQuery;

import java.util.List;

public interface LogService {
    List<Log> getLogList(LogQuery param);

    Long countLogList(LogQuery param);
}
