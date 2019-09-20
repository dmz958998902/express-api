## 注册接口
1. 接口地址：http：//localhost：3000/api/register
2. 请求方式：post
3. 请求参数
|参数名字|参数类型|是否必须|描述|
|-------|-------|--------|---|
|username|string|y       |用户名|
|password|string|y       |用户密码|
4.响应结果：
```js
{
    code:0,
    message:"注册成功"
}
```
## 登录接口
1. 接口地址：http：//localhost：3000/api/login
2. 请求方式：post
3. 请求参数：
|参数名字|参数类型|是否必须|描述|
|-------|-------|--------|---|
|username|string|y       |用户名|
|password|string|y       |用户密码|
4. 响应结果：
```js
{
    code:0//表示成功 -1表示失败
    message：“登陆成功”
    data：{
        user：{
            username：xx，
            email：yy
            avatar：xxxxx
            id：1
        }
    }
}
```