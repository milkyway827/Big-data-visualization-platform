package com.bishe.admin.controller;

import com.bishe.common.vo.Result;
import com.bishe.admin.model.Admin;
import com.bishe.admin.service.AdminService;
import com.wf.captcha.utils.CaptchaUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * @RestController 注解： 所有的返回都为json格式
 */
@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public Result login(Admin param, @RequestParam("captcha") String captcha, HttpServletRequest request, HttpSession session){//session填入数据

        if (!CaptchaUtil.ver(captcha, request)) {
            //CaptchaUtil.clear(request);  // 清除session中的验证码
            return Result.fail("验证码错误！");
        }

        Admin admin = adminService.login(param);
        if(admin != null){

            BCryptPasswordEncoder passwordEncoder =new BCryptPasswordEncoder();
            //参数1是请求密码，参数2是数据库中加密的值
            boolean matchess = passwordEncoder.matches(param.getPassword(),admin.getPassword());
            System.out.println(matchess);
            if(matchess) {
                //登陆成功
                admin.setPassword(null);
                session.setAttribute("adminInfo", admin);
                return Result.success();
            }
        }
        //登陆失败
        return Result.fail("用户名或密码错误！");
    }


}
