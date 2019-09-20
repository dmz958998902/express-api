//user表的model文件
//引入已经链接mongodb的mongoose
const mongoose=require("../config/db");
const schema=new mongoose.Schema({
    username:String,
    password:String,
    email:String
});
const model=mongoose.model("user",schema);
//将model暴露出去
module.exports=model;