//引入 mongoose
const mongoose=require("mongoose");
//定义一个mongodb的链接地址
const url="mongodb://127.0.0.1:27017/express"
//与mongodb链接
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("与数据库连接成功");
})
.catch(()=>{
    console.log("与数据库连接失败");
});
//将mongoose暴露出去
module.exports=mongoose;