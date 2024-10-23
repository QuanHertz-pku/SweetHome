package com.hertzquan.backend.controller.TestController;

import org.springframework.web.bind.annotation.*;

@RestController
@ResponseBody
@RequestMapping("/test")
public class TestController {
    @RequestMapping("/get")
    public String get(){
        return "Quan";
    }

    @PostMapping("/post")
    public TestControllerResult post(@RequestBody TestControllerParam body){
        TestControllerResult testController = new TestControllerResult();
        testController.setAns(body.getReq()+"Quan");
        return testController;
    }
}
