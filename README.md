# jQValidatorJs
可以兼容ie7+以上的ie浏览器及现代主流浏览器
version 2.0

新增修改如下：
身份证校验改为验证18位的，增加出生年月和X验证
新增语言判断，增加中文提示语、英文提示语以及其他自定义语言切换，参数：'language'
修改附件上传功能，现可限定附件文件类型
自定义提交按钮点击时，新增自动聚焦到第一个错误的file
新增验证模式，可选择插件修改后实时验证，还是离焦时再进行验证
新增参数 “ singleVis ” ：boolean, 错误提示语句是否单条显示，默认值为true
修改点击清除按钮错误提示语句显示数量问题，filed自动聚焦
新增提示语显示位置：固定位置显示及弹框显示
新增参数“ tipsWay ” ：提示语显示方式，默认值normal，tooltip
修改完善了表单重置功能
修改了空格占据字符数的bug，不允许输入空格
新增电话输入框限定只能输入数字，身份证输入框前17位只能是数字和最后一位只能是数字或X

插件具体API说明，请参考网址：http://www.cnblogs.com/TammyBlog/p/7376432.html
