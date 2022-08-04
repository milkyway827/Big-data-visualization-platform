package com.bishe.user.controller;
import com.bishe.common.vo.Result;
import com.bishe.user.model.Equipment;
import com.bishe.user.model.User;
import com.bishe.user.service.UserService;
import com.bishe.user.vo.UserQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 获取用户信息
 * 可以为分页
 */

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 数据表格页面
     * @return
     */
    @GetMapping("")
    public String toUserListUI(){
        return "user/userList";
    }

    @GetMapping("/list")
    @ResponseBody
    public Result<Object> getUserList(UserQuery param){//请求参数
        List<User> list= userService.getUseList(param);
        Long count = userService.countUserList(param);//总数据量
        return Result.success(list,count);
    }
    /**
     * 弹出页面 添加数据
     * @param user
     * @return
     */
    @PostMapping("")
    @ResponseBody
    public Result<Object> addUser(User user){
        userService.addUser(user);
        return Result.success("新增用户成功");
    }

    @GetMapping("/add/ui")
    public String toAddUI(Model model){
        List<Equipment> equipmentList = userService.getAllEquipment();
        model.addAttribute("equipmentList",equipmentList);
        return "user/userAdd";
    }

    /**
     * 通过前端取到id来删除数据
     * @param ids
     * @return
     */
    @DeleteMapping("/{ids}")
    @ResponseBody
    public Result<Object> deleteUserByIds(@PathVariable("ids") String ids){
        userService.deleteUserByIds(ids);
        return Result.success("删除用户成功");
    }

    /**
     * 根据id查询用户接口
     * 根据id查询数据是get请求
     * 同步请求，返回视图名称,返回model对象
     */
    @GetMapping("/{id}")
    public String getUserById(@PathVariable("id") Integer  id,Model model,Model model2){
        User user = userService.getUserById(id);
        //将数据放入modle中
        model.addAttribute("user",user);
        model.addAttribute("equipmentList",userService.getAllEquipment());
        /*List<Equipment> equipmentList = userService.getAllEquipment();
        model2.addAttribute("equipmentList",equipmentList);*/
        //返回到编辑页面
        return "user/userEdit";
    }


    /**
     * 修改接口
     * @param user
     * @return
     */
    @PutMapping("")
    @ResponseBody   //返回的是json数据
    public Result<Object> updateUser(User user){
        userService.updateUser(user);
        return Result.success("用户信息修改成功！");
    }
}
