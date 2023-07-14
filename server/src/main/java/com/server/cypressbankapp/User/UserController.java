package com.server.cypressbankapp.User;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

        @PostMapping("/login")
        public ResponseEntity<String> login(@RequestBody User user) {
            boolean loginSuccess = userService.login(user.getEmail(), user.getPassword());
            if (loginSuccess) {
                return ResponseEntity.status(HttpStatus.ACCEPTED).body("{\"message\":\"Login successful\"}");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\":\"User or Password doesnt exist\"}");
            }
        }

        @PostMapping("/register")
        public ResponseEntity<String> registerUser(@Valid @RequestBody User user) {
            boolean registrationSuccess = userService.register(user);
            if (registrationSuccess) {
                return ResponseEntity.status(HttpStatus.ACCEPTED).body("{\"message\":\"User registered successfully\"}");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\":\"The user already exists\"}");
            }
        }
}
