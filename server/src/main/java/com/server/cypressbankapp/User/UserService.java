package com.server.cypressbankapp.User;

import lombok.AllArgsConstructor;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Optional;

@AllArgsConstructor
@Service
public class UserService {
       private UserRepository userRepository;

            public boolean login(String email, String password) {
                Optional<User> user = userRepository.findByEmail(email);
                if (!user.isPresent()) {
                    return false;
                }

                String storedPassword = user.get().getPassword();

                return BCrypt.checkpw(password,storedPassword);
            }

        public boolean register(User user) {
            Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
            if (existingUser.isPresent()) {
                return false; // User already exists
            }

            String plainPassword = user.getPassword();
            String salt = BCrypt.gensalt();
            String hashedPassword = BCrypt.hashpw(plainPassword, salt);
            user.setPassword(hashedPassword);
            userRepository.save(user);
            return true; // Registration successful
        }
}
