package com.bishe.user.service.impl;

import com.bishe.user.mapper.EquipmentMapper;
import com.bishe.user.mapper.UserMapper;
import com.bishe.user.model.Equipment;
import com.bishe.user.model.User;
import com.bishe.user.service.UserService;
import com.bishe.user.vo.UserQuery;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service  //交给spring的容器管理（会帮我们创建bean）
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;
    @Resource
    private EquipmentMapper equipmentMapper;

    @Override
    public List<User> getUseList(UserQuery param) {
        return userMapper.getUserList(param);
    }

    @Override
    public Long countUserList(UserQuery param) {
        return userMapper.countUserList(param);
    }

    @Override
    public void addUser(User user) {
        userMapper.addUser(user);
    }

    @Override
    public List<Equipment> getAllEquipment() {
        return equipmentMapper.getAllEquipment();
    }

    @Override
    public void deleteUserByIds(String ids) {
        userMapper.deleteUserByIds(ids);
    }

    @Override
    public User getUserById(Integer id) {
        return userMapper.getUserById(id);
    }

    @Override
    public void updateUser(User user) {
        userMapper.updateUser(user);
    }
}
