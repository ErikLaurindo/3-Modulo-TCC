/*package com.belval.maniadepets.model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.belval.maniadepets.repository.UserRepository;
@Service
public class UserService {
   @Autowired
   private UserRepository userRepository;
   private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
   public boolean authenticate(String email, String senha) {
       User user = userRepository.findByEmail(email);
       if (user != null) {
           return passwordEncoder.matches(senha, user.getPassword());
       }
       return false;
   }
}*/