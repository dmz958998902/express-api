const express=require("express");
const bcryptjs=require("bcryptjs");
const UserModel=require("../models/user");//构造函数
const router=express.Router();

router.post("/register",async(req,res)=>{
    // res.send("注册")
    //1.获取前端传递过来的参数
    let username=req.body.username;
    let password=req.body.password;
    let email=req.body.email;
    //2.注册界面不能为空的
    if(!username||!password||!email){
        res.send("输入不能有空");
        return;
    }
    //3.判断邮箱的唯一性
    let data=await UserModel.findOne({email:email});
    if(data){
        res.send({
            code:-1,
            ms:"邮箱已被注册"
        });
        return;
    }else{
        //保存数据到数据库
        let user=new UserModel({
            username:username,
            password:bcryptjs.hashSync(password,10),
            email:email
        });
        await user.save();
        res.send({
            code:0,
            ms:"注册成功"
        })
    }
});
router.post("/login",(req,res)=>{
    res.send("登录");
});
module.exports=router;