package com.belval.maniadepets.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.belval.maniadepets.model.AgenVis;
import com.belval.maniadepets.repository.AgenVisRepository;
@RestController
@RequestMapping("/Agen_Vis")
@CrossOrigin(origins = "*")
public class AgenVisController {
   @Autowired
   private AgenVisRepository agenVisRepository;
   @GetMapping
   public ResponseEntity<List<AgenVis>> getAllAgenVis() {
       try {
           return ResponseEntity.status(HttpStatus.OK).body(agenVisRepository.findAll());
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
       }
   }
   @GetMapping("/{id}")
   public ResponseEntity<Object> getAgenVisById(@PathVariable Integer id) {
       try {
           Optional<AgenVis> agenVis = agenVisRepository.findById(id);
           if (agenVis.isPresent()) {
               return ResponseEntity.status(HttpStatus.OK).body(agenVis.get());
           } else {
               return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Agendamento não encontrado.");
           }
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
       }
   }
   @PostMapping
   public ResponseEntity<String> createAgenVis(@RequestBody AgenVis agenVis) {
       try {
           agenVisRepository.save(agenVis);
           return ResponseEntity.status(HttpStatus.OK).body("Agendamento criado com sucesso.");
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao criar agendamento.");
       }
   }
   @PutMapping("/{id}")
   public ResponseEntity<Object> updateAgenVis(@PathVariable Integer id, @RequestBody AgenVis agenVisDetails) {
       try {
           Optional<AgenVis> agenVis = agenVisRepository.findById(id);
           if (agenVis.isPresent()) {
               AgenVis existingAgenVis = agenVis.get();
               existingAgenVis.setAgenTipo(agenVisDetails.getAgenTipo());
               existingAgenVis.setAgenDataAgen(agenVisDetails.getAgenDataAgen());
               existingAgenVis.setInfoPet(agenVisDetails.getInfoPet());
               AgenVis updatedAgenVis = agenVisRepository.save(existingAgenVis);
               return ResponseEntity.status(HttpStatus.OK).body(updatedAgenVis);
           } else {
               return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Agendamento não encontrado.");
           }
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao atualizar agendamento.");
       }
   }
   @DeleteMapping("/{id}")
   public ResponseEntity<String> deleteAgenVis(@PathVariable Integer id) {
       try {
           Optional<AgenVis> agenVis = agenVisRepository.findById(id);
           if (agenVis.isPresent()) {
               agenVisRepository.delete(agenVis.get());
               return ResponseEntity.status(HttpStatus.OK).body("Agendamento deletado com sucesso.");
           } else {
               return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Agendamento não encontrado.");
           }
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao deletar agendamento.");
       }
   }
}