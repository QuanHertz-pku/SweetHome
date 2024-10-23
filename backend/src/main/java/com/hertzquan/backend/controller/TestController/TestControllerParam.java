package com.hertzquan.backend.controller.TestController;

import com.sun.istack.internal.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data   //为接下来的类直接写访问器、getter、setter方法
@ToString  // 为类生成toString方法
@AllArgsConstructor // 为类生成全参构造方法
@NoArgsConstructor // 为类生成无参构造方法
public class TestControllerParam {
    @NotNull
    private String req;          // 要查询的 email
}
