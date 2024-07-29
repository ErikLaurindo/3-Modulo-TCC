
package com.belval.maniadepets.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.belval.maniadepets.model.User;

import com.belval.maniadepets.repository.UserRepository;

@RestController

public class UserController {

    @Autowired

    private UserRepository userRepository;

    @PostMapping("/users")

    public ResponseEntity<String> createUser(@RequestBody User user) {

        try {

            userRepository.save(user);

            return ResponseEntity.status(HttpStatus.OK).body("Sucesso");

        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar usuário");

        }

    }

    @GetMapping("/users/{id}")

    public ResponseEntity<Object> buscarProdutoPorId(@PathVariable Integer id) {

        try {

            Optional<User> produto = userRepository.findById(id);

            if (!produto.isPresent()) {

                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado.");

            }

            return ResponseEntity.status(HttpStatus.OK).body(produto.get());

        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao buscar usuário");

        }

    }

    
    
    
    @DeleteMapping("/users/{id}")

    public ResponseEntity<Object> apagar(@PathVariable Integer id) {

        try {

            Optional<User> user = userRepository.findById(id);

            if (!user.isPresent()) {

                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado.");

            }

            userRepository.delete(user.get());

            return ResponseEntity.status(HttpStatus.OK).body("Usuário apagado com sucesso!");

        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao apagar usuário");

        }

    }

    @PutMapping("/users/{id}")

    public ResponseEntity<Object> atualizarProduto(@PathVariable(value = "id") Integer id, @RequestBody User produto) {

        try {

            Optional<User> produtoEncontrado = userRepository.findById(id);

            if (produtoEncontrado.isEmpty()) {

                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado.");

            }

            produto.setUserId(id);

            userRepository.save(produto);

            return ResponseEntity.status(HttpStatus.OK).body("Usuário atualizado com sucesso.");

        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao atualizar usuário");

        }

    }

}