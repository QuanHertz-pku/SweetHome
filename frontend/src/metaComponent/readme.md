#metaComponent

每一个metaComponent只是一个和 外观 相关的组件，不应该包含任何响应信息！响应逻辑请搞在multiComponent中，但是metaComponent需要暴露一些影响外观的接口，比如内容，大小，布局等等（因为大小和布局需要从multiComponent中获取）

首先，明确分类
一部分，是类似按钮（确定配色方案之后，只需要传递颜色的参数就可以啦），头像，图片，什么的图像类型的
配色方案：
background：pink-500 indigo-600 (渐变色)
container：slate-100 broder-slate-200
text：black
reminder/wraning：pink-500
themed text/button：pink-400 indigo-500
hoverd text/button：pink-500 indigo-600
text over pink/indigo：gray-300 hoverd-white

一部分是文字类型的，那么内容就只应该有文字！

一部分是容器类型的，就像是一个方形的框，那么就只需要描述这个框的颜色，边界
容器类型的也可以是带一个滑动框的