//引入express
const express=require("express");
const userRouter=require("./rout/user");
const app=express();

//处理req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//静态资源托管
app.use(express.static("public"));
//引入各种路由中间件
app.use("/api",userRouter);

app.listen(3000);
