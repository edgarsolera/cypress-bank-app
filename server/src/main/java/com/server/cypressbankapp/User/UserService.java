package com.server.cypressbankapp.User;

import lombok.AllArgsConstructor;
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
}
