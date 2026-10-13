package com.domino.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("projectName", "Domino Pizza Backend");
        model.addAttribute("message", "Spring Boot와 Thymeleaf 연결에 성공했습니다.");
        return "index";
    }
}
