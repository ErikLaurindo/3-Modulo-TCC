package com.belval.maniadepets.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.belval.maniadepets.model.InfoPet;
import com.belval.maniadepets.repository.InfoPetRepository;

@RestController
@RequestMapping("/InfoPet")
public class InfoPetController {
   @Autowired
   private InfoPetRepository infoPetRepository;
   @PostMapping
   public ResponseEntity<String> createPet(@RequestBody InfoPet infoPet) {
       try {
           infoPetRepository.save(infoPet);
           return ResponseEntity.status(HttpStatus.OK).body("Pet cadastrado com sucesso");
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar o pet");
       }
   }
   @GetMapping("/InfoPet/{id}")
   public ResponseEntity<InfoPet> getPetById(@PathVariable Integer id) {
       try {
           InfoPet infoPet = infoPetRepository.findById(id).orElse(null);
           if (infoPet != null) {
               return ResponseEntity.status(HttpStatus.OK).body(infoPet);
           } else {
               return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
           }
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
       }
   }
}