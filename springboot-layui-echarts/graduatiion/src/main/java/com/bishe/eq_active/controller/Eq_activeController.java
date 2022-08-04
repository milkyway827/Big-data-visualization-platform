package com.bishe.eq_active.controller;
import com.bishe.common.vo.Result;
import com.bishe.eq_active.model.Eq_active;
import com.bishe.eq_active.vo.Eq_activeQuery;
import com.bishe.eq_active.service.Eq_activeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 获取用户信息
 * 可以为分页
 */

@Controller
@RequestMapping("/eq_active")
public class Eq_activeController {

    @Autowired
    private Eq_activeService eq_activeService;

    /**
     * 数据表格页面
     * @return
     */
    @GetMapping("")
    public String toEq_activeListUI(){
        return "eq_active/eq_activeList";
    }

    @GetMapping("/list")
    @ResponseBody
    public Result<Object> getEq_activeList(Eq_activeQuery param){//请求参数
        List<Eq_active> list= eq_activeService.getEq_activeList(param);
        Long count = eq_activeService.countEq_activeList(param);//总数据量
        return Result.success(list,count);
    }
//    /**
//     * 弹出页面 添加数据
//     * @param eq_active
//     * @return
//     */
//    @PostMapping("")
//    @ResponseBody
//    public Result<Object> addEq_active(Eq_active eq_active){
//        eq_activeService.addEq_active(eq_active);
//        return Result.success("新增用户成功");
//    }
//
//    @GetMapping("/add/ui")
//    public String toEq_activeUI(Model model){
//        List<Eq_active> equipmentList = eq_activeService.getAllEquipment();
//        model.addAttribute("Eq_activetList",eq_activeList);
//        return "eq_active/eq_activeAdd";
//    }
//
//    /**
//     * 通过前端取到id来删除数据
//     * @param ids
//     * @return
//     */
//    @DeleteMapping("/{ids}")
//    @ResponseBody
//    public Result<Object> deleteEq_activeByIds(@PathVariable("ids") String ids){
//        eq_activeService.deleteEq_activeByIds(ids);
//        return Result.success("删除用户成功");
//    }
//
//    /**
//     * 根据id查询用户接口
//     * 根据id查询数据是get请求
//     * 同步请求，返回视图名称,返回model对象
//     */
//    @GetMapping("/{id}")
//    public String getUserById(@PathVariable("id") Integer  id,Model model,Model model2){
//        User user = userService.getUserById(id);
//        //将数据放入modle中
//        model.addAttribute("user",user);
//        model.addAttribute("equipmentList",userService.getAllEquipment());
//        /*List<Equipment> equipmentList = userService.getAllEquipment();
//        model2.addAttribute("equipmentList",equipmentList);*/
//        //返回到编辑页面
//        return "user/userEdit";
//    }
//
//
//    /**
//     * 修改接口
//     * @param user
//     * @return
//     */
//    @PutMapping("")
//    @ResponseBody   //返回的是json数据
//    public Result<Object> updateUser(User user){
//        userService.updateUser(user);
//        return Result.success("用户信息修改成功！");
//    }
}
