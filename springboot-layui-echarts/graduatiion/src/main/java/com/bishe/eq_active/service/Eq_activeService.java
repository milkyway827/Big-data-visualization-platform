package com.bishe.eq_active.service;

import com.bishe.eq_active.model.Eq_active;
import com.bishe.eq_active.vo.Eq_activeQuery;
import org.springframework.stereotype.Service;

import java.util.List;

public interface Eq_activeService {
    List<Eq_active> getEq_activeList(Eq_activeQuery param);

    Long countEq_activeList(Eq_activeQuery param);
}
