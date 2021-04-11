package com.ashish.TodoList.controller;

import com.ashish.TodoList.model.User;
import com.ashish.TodoList.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController
{
    @Autowired
    public UserService userService;
    @RequestMapping(value="/users",method= RequestMethod.POST)
    public String main(@RequestBody User user)
    {
        userService.insertdata(user);
        String response ="{\"success\":true,\"message\":\"Post has been added successfully\"}";
        return response;
    }
}
