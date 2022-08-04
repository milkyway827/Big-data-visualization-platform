package com.bishe.user.mapper;

import com.bishe.user.model.User;
import com.bishe.user.model.UserExample;
import java.util.List;

import com.bishe.user.vo.UserQuery;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {
    long countByExample(UserExample example);

    int deleteByExample(UserExample example);

    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    List<User> selectByExample(UserExample example);

    User selectByPrimaryKey(Integer userId);

    int updateByExampleSelective(@Param("record") User record, @Param("example") UserExample example);

    int updateByExample(@Param("record") User record, @Param("example") UserExample example);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    //通过查询统计用户数量接口
    List<User> getUserList(UserQuery param);
    //通过查询统计用户数量接口
    Long countUserList(UserQuery param);
    //增加用户接口
    void addUser(User user);
    //删除用户信息接口
    void deleteUserByIds(String ids);
    //通过id得到用户信息接口
    User getUserById(Integer id);
    //修改用户信息接口
    void updateUser(User user);
}