package com.belval.maniadepets.controller;

import com.belval.maniadepets.model.User;
import com.belval.maniadepets.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cadastro-admin")
public class CadastroAdminController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> cadastrarAdmin(@RequestBody User newAdmin) {
        // Verifica se o e-mail já está cadastrado
        User existingUser = userRepository.findByEmail(newAdmin.getUserEmail());
        if (existingUser != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email já cadastrado.");
        }

        // Criptografa a senha antes de salvar
        String hashedPassword = BCrypt.hashpw(newAdmin.getUserSenha(), BCrypt.gensalt());
        newAdmin.setUserSenha(hashedPassword);
        newAdmin.setAdmin(true); // Define que este usuário é um administrador

        // Salva o novo administrador no banco de dados
        userRepository.save(newAdmin);

        return ResponseEntity.status(HttpStatus.CREATED).body("Administrador cadastrado com sucesso.");
    }
}
