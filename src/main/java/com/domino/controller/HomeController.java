package com.domino.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    // 기존 정적 사이트의 .html 링크와 AJAX 헤더/푸터 요청을 유지합니다.
    @GetMapping("/{page:index|menu|login|sign_up|gift|store_search|franchise|notification_news|costomer_compliment|ecoupon_order|ecoupon_instruction|eventAff_event|eventAff_Affiliation|eventAff_Affilliation_hcard|header|footer|404}.html")
    public String page(@PathVariable("page") String page) {
        return page;
    }
}
