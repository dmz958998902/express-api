const express=require("express");
const PostModel=require("../models/post");
const router=express.Router();
router.get("/posts",async(req,res)=>{
    //获取前端传过来的数据
    let pageNum=parseInt(req.query.pageNum||1);
    let pageSize=parseInt(req.query.pageSize||5);

    //查询数据库
    let num=await PostModel.find().countDocuments();
    let total=Math.ceil(num/pageSize);//多少页
    //根据条件去查询要求新添加的文章先出现
    await PostModel.find()
    .skip((pageNum-1)*pageSize)
    .limit(pageSize)
    .sort({updatedAt:-1})
})
module.exports=router;