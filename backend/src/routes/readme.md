# routers 说明

只负责把路由发送到controller中，并把controller返回的数据返回给前端

1,/files
    /list GET               //其实是在folders中操作的

    /content/:id GET        //在files中操作的
    /addfile POST           //在files和folders中操作的
    /deletefile/:id POST    //在files和folders中操作的 id指的是folder的id
    /renamefile/:id POST    //在files和folders中操作的 id指的是folder的id
    /updatefile/:id POST    //在files中操作的

    /addfolder POST      //在folders中操作的
    /deletefolder/:id POST    //在files和folders中操作的 id指的是folder的id
    /movefile/:id POST      //在folders中操作的 id指的是folder的id

    /uploadfile POST        //上传文件

2，/auth 
    /login POST
    /register POST
    /bebug POST