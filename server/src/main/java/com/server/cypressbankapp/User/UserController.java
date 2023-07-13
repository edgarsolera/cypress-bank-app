package com.server.cypressbankapp.User;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

    public List<User> fetchAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping(path = "/signup/{userId}")
    public User getUser(@PathVariable("userId") String id){
        List<User> USERS = fetchAllUsers();
        return USERS.stream()
                .filter(user ->  id.equals(user.get_id())).findFirst()
                .orElseThrow(()-> new IllegalStateException("User " + id + "Does Not exist"));
    }
    @PostMapping("/insert")
    public void addUser(@RequestBody User user){

        userService.insertUser(user);
    }

    @PostMapping("/register")
    public void registerUser(@Valid @RequestBody User user) {
        userService.register(user);
    }

}
