# AngularCodeTest


## 过程记录
### 2017.12.26
1.测试angular使用引入jquery获取html中一个元素id并且在component里面调用$('#id').click();
#### 安装的步骤
+ Install jquery with npm
```
    npm install jquery --save
```
+ Add typings
```
    npm install --save-dev @types/jquery
```
+ Add scripts to angular-cli.json
```
    "apps": [{
        ...
        "scripts": [
            "../node_modules/jquery/dist/jquery.min.js",
        ],
        ...
}]
```
+ 在component中添加引用
```
    declare var jquery:any; declare var $ :any;
```
[参考地址](https://stackoverflow.com/questions/43934727/how-to-use-jquery-plugin-with-angular-4)

2.在github上面建立一个仓库在上传的时候传不上去
+ 首先复制在github上面地址
+ 然后在命令行中添加git的远程仓库,提交代码到远程库
```
    git remote add origin https://github.com/yyicon/angular-code-test.git
    git push -u origin master
```
+ 因为在本地创建项目的时候也创建了.md文件，在github上面创建repositories也创建了，所以就push不上去，使用 -f 强制提交
```
    git push -u origin master -f
```
[参考地址](https://www.jianshu.com/p/e9dd2849cfb0)

3.在vscode中使用markdown
+ 安装 **Markdown Preview Enhanced** 插件
+ 熟悉markdown语法

4.未完成的
- [ ] 图片上传显示

[参考地址1 用vscode写markdown的正确姿势](http://blog.csdn.net/u013597671/article/details/77914638)

[参考地址2: Markdown，你只需要掌握这几个](https://www.cnblogs.com/jpfss/articles/6567686.html)

### 2017.12.27
#### 从pass访问