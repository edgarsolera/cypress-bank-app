package com.server.cypressbankapp.User;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/v1/signup")
public class UserController {

    private static final List<User> USERS = Arrays.asList(
            new User("1","Nicolas"),
            new User("2", "Test")
    );

    @GetMapping(path = "{userId}")
    public User getUser(@PathVariable("userId") String id){
        return USERS.stream()
                .filter(user ->  id.equals(user.getUserId()))
                .findFirst()
                .orElseThrow(()-> new IllegalStateException("User " + id + "Does Not exist"));
    }
}
