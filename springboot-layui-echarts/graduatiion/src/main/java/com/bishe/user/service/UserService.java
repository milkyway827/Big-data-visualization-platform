package com.bishe.user.service;

import com.bishe.user.model.Equipment;
import com.bishe.user.model.User;
import com.bishe.user.vo.UserQuery;

import java.util.List;

public interface UserService {

    List<User> getUseList(UserQuery param);

    Long countUserList(UserQuery param);

    void addUser(User user);

    List<Equipment> getAllEquipment();

    void deleteUserByIds(String ids);

    User getUserById(Integer id);

    void updateUser(User user);
}
