
/*package com.belval.maniadepets.controller;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.belval.maniadepets.config.JwtUtil;
import com.belval.maniadepets.model.AuthenticationRequest; // Certifique-se de que essa classe está no pacote correto
import com.belval.maniadepets.service.CustomUserDetailsService;
@RestController
public class AuthenticationController {
   @Autowired
   private AuthenticationManager authenticationManager;
   @Autowired
   private JwtUtil jwtUtil;
   @Autowired
   private CustomUserDetailsService userDetailsService;
   @PostMapping("/Login")
   public ResponseEntity<?> createToken(@RequestBody AuthenticationRequest request, HttpServletResponse response) {
       try {
           authenticationManager.authenticate(
               new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
           );
           final String jwtToken = jwtUtil.generateToken(request.getUsername());
           // Define o cookie com o token JWT
           javax.servlet.http.Cookie cookie = new javax.servlet.http.Cookie("JWT_TOKEN", jwtToken);
           cookie.setHttpOnly(true); // Segurança adicional para evitar acesso via JavaScript
           cookie.setPath("/"); // Define o caminho para o qual o cookie é válido
           cookie.setMaxAge(60 * 60); // Define a expiração do cookie (1 hora, por exemplo)
           response.addCookie(cookie);
           return ResponseEntity.ok("Login successful");
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username/password");
       }
   }
}
*/
