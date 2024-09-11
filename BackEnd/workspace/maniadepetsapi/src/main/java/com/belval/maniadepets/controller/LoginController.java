package com.belval.maniadepets.controller;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.belval.maniadepets.model.Login;
import com.belval.maniadepets.model.User;
import com.belval.maniadepets.repository.UserRepository;
@RestController
public class LoginController {
   @Autowired
   private UserRepository userRepository;
   @PostMapping("/login")
   public ResponseEntity<String> login(@RequestBody Login loginData) {
      System.out.println("Email: " + loginData.getUserEmail());
      System.out.println("Senha: " + loginData.getUserSenha());
      Optional<User> foundUser = userRepository.findByUserEmailAndUserSenha(
              loginData.getUserEmail(), loginData.getUserSenha());
      if (foundUser.isPresent()) {
          return ResponseEntity.ok("Login realizado com sucesso!");
      } else {
          return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou senha incorretos.");
      }
   }
}