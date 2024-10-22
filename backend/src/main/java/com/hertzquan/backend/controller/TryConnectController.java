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
