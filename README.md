# jQValidatorJs

> 可以兼容ie7+以上的ie浏览器及现代主流浏览器  **version 2.7.6**

## 2.7.6版本新增修改如下：

1. 删掉敏感词中的 http / https

## 2.7.5版本新增修改如下：

1. 删掉身份证省市号码验证
2. 修复ios自带输入法输入中文时多次触发input事件的bug

## 2.7.4版本新增修改如下：
1. 补充身份证省市号码

## 2.7.3版本新增修改如下：
1. remote验证统一回调数据形式，其验证获取的是ajax返回的值里的 result 对象里的valid值，即result{valid: true}

## 2.7.2版本新增修改如下：
1. 新增港澳手机号码校验,以及开启港澳手机校验的参数isOpenHKM，默认false

## 2.7.1 版本新增修改如下
1. 新增密码安全等级校验: pwdSafety，密码输入需至少包含两种字符
2. 修改identical校验的bug问题,并新增参数ismain：当前进行identical校验的控件是否为主体


## 2.7版本新增修改如下
1. 优化了电话验证的正则代码，在验证选择“ALL”选择时，改掉了其相关的bug问题；
2. 对电话号码输入长度进行限制，手机号码限制11位字符，其他类型限制18位字符；
3. 优化座机号码验证，可以输入 {3,4}位区号 + {5,8}位座机号码；
4. 优化表单重置功能：没有写在校验里的单选复选框，点击重置按钮时，也可以进行重置;
5. 新增银行卡校验: bankCard , 限制数字，字符长度16-19；
6. 新增QQ号码校验: QQNumber , 限制数字，字符长度15位以内；
7. 新增输入框敏感字符过滤： ["alert", "confirm", "prompt", "embed", "script", "onload", "position", "iframe", "http", "https", "location", "href", "meta", "object", "document", "onmouseover", "write", "autofocus", "onfocus", "SELECT", "like", "UNION", "UPDATE", "TRUNCATE"]
8. 新增出生日期和身份证号码关联校验功能： birthDate；
9. 新增性别和身份证号码关联校验功能：gender ，规定女性的input值为0，男性则为1；
10. 优化文件上传验证功能；
11. 修改了点击提交按钮只验证还未验证的控件功能的bug问题，已修改成点击提交所有控件都需要再次进行校验


## 2.6版本新增修改如下：
1. 新增身份证省份号码验证功能；
2. 新增动态添加文本框验证功能；
3. 新增移除验证功能；
4. 修改完善电话验证功能，座机验证新增可写区号和分机号验证功能；
5. 修改若身份证最后字符为'X'且用户输入小写时，自动将小写'x'转换为大写'X'


## 插件具体API说明，请参考网址：
1. http://www.cnblogs.com/TammyBlog/p/7376432.html
2. https://blog.csdn.net/langlang005/article/details/115298665
