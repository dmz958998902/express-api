//引入express
const express=require("express");
const userRouter=require("./rout/user");
const postsRouter=require("./rout/posts");
const app=express();

//处理req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//前后端分离跨域处理
app.use((req,res,next)=>{
    res.set("Access-Control-Allow-Origin","*");
    next();
});
//静态资源托管
app.use(express.static("public"));
//引入各种路由中间件
app.use("/api",userRouter);
app.use("/api",postsRouter);
app.listen(3000);
