# SweetHome

## 技术手册：

### 1,关于项目的创建：
    后端：IDEA，＋SpringBoot框架 (JDK 1.8 Java 8)
    2024.10.22 添加依赖 Spring starter web

    前端：VS code ＋Vue3框架
    2024.10.22 添加依赖 vue-router,vuex,jquery,bootstrap

    项目规划；
        1.0版本内容：
            1,Views层，实现Start,Home,User
            2,Components层，实现NavBar，IntroScroll，Directory，WorkSpace，Column，InfoSpace
            3,Service层，实现Try
            4,Http层，实现Sender
            5,Controller层，实现Test
            6,Method层，实现Fnid
            7,Data层，实现UserTable
### 2,改动日志
    backend src resources application.properties 改动
        sever.port=8081


### 3,技术日志
#### 一，实现前后端通信 (使用Jquery.ajax技术)

```
//后端代码实例
package com.hertzquan.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/try/")
public class TryConnectController {

    @RequestMapping("get/")
    public String index() {
        return "HertzQuan";
    }
}

```
```
//解决跨域问题
package com.hertzquan.backend.config;

import org.springframework.context.annotation.Configuration;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Configuration
public class CorsConfig implements Filter {
    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        HttpServletRequest request = (HttpServletRequest) req;

        String origin = request.getHeader("Origin");
        if(origin!=null) {
            response.setHeader("Access-Control-Allow-Origin", origin);
        }

        String headers = request.getHeader("Access-Control-Request-Headers");
        if(headers!=null) {
            response.setHeader("Access-Control-Allow-Headers", headers);
            response.setHeader("Access-Control-Expose-Headers", headers);
        }

        response.setHeader("Access-Control-Allow-Methods", "*");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Credentials", "true");

        chain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) {

    }

    @Override
    public void destroy() {
    }
}
```
```
//前端代码 App.vue
<template>
  <div>
    <div> username: {{ username }}</div>
  </div>
  <router-view/>
</template>

<script>

import $ from 'jquery';
import { ref } from 'vue';

export default {
  name:"App",
  setup() {
    let username = ref("");

    $.ajax({
      url : "http://127.0.0.1:8081/try/get/",
      type : "get",
      success: resp => {
        //console.log(resp);
        username.value=resp;
      }
    });
    return {username}
  },
}
</script>


<style>

</style>

```


