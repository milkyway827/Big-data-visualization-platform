package com.bishe.common.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 简单的拦截器
 * @Component 注解：实现bean的注入，相当于<bean class= ""></bean>
 */

@Slf4j
@Component
public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //获取session,判断session中的用户信息是否存在

        Object user = request.getSession().getAttribute("adminInfo");//userInfo
        if(user == null){
            //未登录
            log.debug("未登录请求" + request.getRequestURI());
            response.sendRedirect(request.getContextPath() + "/login");
            return false;
        }
        log.debug("放行请求" + request.getRequestURI());
        return true;
    }
}
