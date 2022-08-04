package com.bishe.admin.service.impl;

import com.bishe.admin.mapper.AdminMapper;
import com.bishe.admin.model.Admin;
import com.bishe.admin.service.AdminService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class AdminServiceImpl implements AdminService {

    @Resource
    private AdminMapper adminMapper;



    @Override
    public Admin login(Admin admin) {
        //System.out.println(adminMapper.getAdmin(admin));
        return adminMapper.getAdmin(admin);
    }
}
