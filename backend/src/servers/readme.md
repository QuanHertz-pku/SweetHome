#servers 说明

定义一系列元操作，供controller 和 function 调用

1，fileserver
    1.1 添加文件:addFile()
        删除文件:deleteFile()
        更新文件:updateFile()
        查询文件(查询一个文件是否存在):isHaveFileById(),isHaveFileByName()
        获取文件列表:getFileList()
        获取文件内容:getFileContent()
    
    1.2 添加文件夹:addFolder()
        删除文件夹:deleteFolder()
        更新文件夹:updateFolder() //由于我们把文件的信息什么的都放在json文件中，所以可以直接改文件夹的json，通过updateFolder()即可
        查询文件夹(查询一个文件夹是否存在):isHaveFolderById(),isHaveFolderByName()
        获取文件夹列表:getFolderList()

2，userserver
    2.1 添加用户:addUser()
        删除用户:deleteUser()
        更新用户:updateUser()  //基础信息和参数设置
        查询用户(查询一个用户是否存在):isHaveUserById(),isHaveUserByName()
        获取用户列表:getUserList()
        获取用户信息:getUserInfo()
        获取用户数据:getUserToken()

    2.2 用户登录检验:loginCheck()