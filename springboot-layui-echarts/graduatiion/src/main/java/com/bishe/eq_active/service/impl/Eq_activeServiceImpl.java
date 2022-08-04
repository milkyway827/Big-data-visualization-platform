package com.bishe.eq_active.service.impl;

import com.bishe.eq_active.mapper.Eq_activeMapper;
import com.bishe.eq_active.model.Eq_active;
import com.bishe.eq_active.service.Eq_activeService;
import com.bishe.eq_active.vo.Eq_activeQuery;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class Eq_activeServiceImpl implements Eq_activeService {

    @Resource
    private Eq_activeMapper eq_activeMapper;

    @Override
    public List<Eq_active> getEq_activeList(Eq_activeQuery param) {
        return eq_activeMapper.getEq_activeList(param) ;
    }

    @Override
    public Long countEq_activeList(Eq_activeQuery param) {
        return eq_activeMapper.countEq_activeList(param) ;
    }
}
