package com.server.cypressbankapp.User;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class UserService {
       private UserRepository userRepository;


       public List<User> getAllUsers(){
           return userRepository.findAll();
       }

       public User insertUser(User user){
           return userRepository.save(user);
       }

       public ResponseEntity<String> register (User user){

           if (userRepository.findByEmail(user.getEmail()).isPresent()) {

               return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("The user already exist");

           }
           userRepository.save(user);
                return ResponseEntity.ok("User registered successfully");
       }
}
