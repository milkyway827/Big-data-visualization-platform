package com.bishe.eq_active.mapper;

import com.bishe.eq_active.model.Eq_active;
import com.bishe.eq_active.model.Eq_activeExample;
import java.util.List;

import com.bishe.eq_active.vo.Eq_activeQuery;
import org.apache.ibatis.annotations.Param;

public interface Eq_activeMapper {
    long countByExample(Eq_activeExample example);

    int deleteByExample(Eq_activeExample example);

    int deleteByPrimaryKey(Integer acId);

    int insert(Eq_active record);

    int insertSelective(Eq_active record);

    List<Eq_active> selectByExample(Eq_activeExample example);

    Eq_active selectByPrimaryKey(Integer acId);

    int updateByExampleSelective(@Param("record") Eq_active record, @Param("example") Eq_activeExample example);

    int updateByExample(@Param("record") Eq_active record, @Param("example") Eq_activeExample example);

    int updateByPrimaryKeySelective(Eq_active record);

    int updateByPrimaryKey(Eq_active record);

    List<Eq_active> getEq_activeList(Eq_activeQuery param);

    Long countEq_activeList(Eq_activeQuery param);
}