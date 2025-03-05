#models 说明

models目录下存放的是数据库模型文件，每个文件对应一个数据库表。

1，File
    储存在mongoDB中一个files数据库下的实际文件
    _id: 文件的id，由mongoDB自动生成
    fileName: 文件名
    fileType: 文件类型
    fileContent: 文件内容

2,Directory
    储存在mongoDB中一个directories数据库下的记录目录内容和指向File中对应文件的id的描述关系的文件
    _id: 文件夹的id，由mongoDB自动生成
    directoryName: 文件名
    directoryType: 文件类型 enum {file, directory}
    directoryParent: 文件目录（一路过来都要存，使用一个数组）
    directoryChildren: 文件子（使用一个数组，按顺序储存，这样移动的时候就可以直接改了！）
    fileId: 如果是文件，那么就储存对应在files数据库下的文件的id，如果是目录，那么就是empty

3,User
    储存在mongoDB中一个users数据库下的用户信息
    _id: 用户的id，由mongoDB自动生成
    name: 用户名
    password: 密码
    email: 邮箱
    role: 角色