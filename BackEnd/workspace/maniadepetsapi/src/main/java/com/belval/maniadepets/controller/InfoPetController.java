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

import com.belval.maniadepets.model.InfoPet;
import com.belval.maniadepets.repository.InfoPetRepository;
@RestController
@RequestMapping("/Info_Pet")
@CrossOrigin(origins = "*")  // Permite requisições de qualquer origem
public class InfoPetController {
   @Autowired
   private InfoPetRepository infoPetRepository;
   @PostMapping
   public ResponseEntity<String> createPet(@RequestBody InfoPet infoPet) {
       try {
           infoPetRepository.save(infoPet);
           return ResponseEntity.status(HttpStatus.OK).body("Pet cadastrado com sucesso.");
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar o pet.");
       }
   }
   @GetMapping("/{id}")
   public ResponseEntity<InfoPet> getPetById(@PathVariable Integer id) {
       try {
           Optional<InfoPet> infoPet = infoPetRepository.findById(id);
           if (infoPet.isPresent()) {
               return ResponseEntity.status(HttpStatus.OK).body(infoPet.get());
           } else {
               return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
           }
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
       }
   }
   @GetMapping
   public ResponseEntity<List<InfoPet>> getAllPets() {
       try {
           List<InfoPet> allPets = (List<InfoPet>) infoPetRepository.findAll();
           return ResponseEntity.status(HttpStatus.OK).body(allPets);
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
       }
   }

   @PutMapping("/{id}")
   public ResponseEntity<Object> atualizarPet(@PathVariable Integer id, @RequestBody InfoPet updatedInfoPet) {
       try {
           // Verifica se o pet existe
           Optional<InfoPet> existingPet = infoPetRepository.findById(id);
           if (!existingPet.isPresent()) {
               return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet não encontrado.");
           }

           InfoPet pet = existingPet.get();

           // Atualiza os campos do pet, se não forem nulos
           if (updatedInfoPet.getInfEspecie() != null) pet.setInfEspecie(updatedInfoPet.getInfEspecie());
           if (updatedInfoPet.getInfRaca() != null) pet.setInfRaca(updatedInfoPet.getInfRaca());
           if (updatedInfoPet.getInfCor() != null) pet.setInfCor(updatedInfoPet.getInfCor());
           if (updatedInfoPet.getInfDataNasc() != null) pet.setInfDataNasc(updatedInfoPet.getInfDataNasc());
           if (updatedInfoPet.getInfPeso() != null) pet.setInfPeso(updatedInfoPet.getInfPeso());

           // Mantém o mesmo usuário (não altera a chave estrangeira)
           // Não é necessário fazer nada aqui, pois o usuário já está associado ao pet e será mantido.

           // Salva o pet atualizado
           infoPetRepository.save(pet);

           return ResponseEntity.status(HttpStatus.OK).body("Pet atualizado com sucesso.");
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao atualizar o pet.");
       }
   }


   /*@PutMapping("/{id}")
   public ResponseEntity<Object> atualizarPet(@PathVariable Integer id, @RequestBody InfoPet updatedInfoPet) {
       try {
           Optional<InfoPet> existingPet = infoPetRepository.findById(id);
           if (!existingPet.isPresent()) {
               return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet não encontrado.");
           }
           InfoPet pet = existingPet.get();
           pet.setInfEspecie(updatedInfoPet.getInfEspecie());
           pet.setInfRaca(updatedInfoPet.getInfRaca());
           pet.setInfCor(updatedInfoPet.getInfCor());
           pet.setInfDataNasc(updatedInfoPet.getInfDataNasc());
           pet.setInfPeso(updatedInfoPet.getInfPeso());
           pet.setUser(updatedInfoPet.getUser());
           infoPetRepository.save(pet);
           return ResponseEntity.status(HttpStatus.OK).body("Pet atualizado com sucesso.");
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao atualizar o pet.");
       }
   }

*/
  
@DeleteMapping("/{id}")
public ResponseEntity<String> deletePet(@PathVariable Integer id) {
    try {
        Optional<InfoPet> existingPet = infoPetRepository.findById(id);
        
        // Verifica se o pet existe
        if (!existingPet.isPresent()) {
            // Se não, retorna erro
            System.out.println("Pet não encontrado com ID: " + id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet não encontrado.");
        }

        // Exclui o pet
        infoPetRepository.delete(existingPet.get());
        System.out.println("Pet deletado com sucesso. ID: " + id);
        return ResponseEntity.status(HttpStatus.OK).body("Pet deletado com sucesso.");
        
    } catch (Exception e) {
        // Em caso de erro no processo de exclusão
        e.printStackTrace();  // Imprime a stack trace para depuração
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao deletar o pet.");
    }
}
}






/////////////////


/*package com.belval.maniadepets.controller;
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
@RequestMapping("/info_pet") // Corrigido para minúsculas
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
  
   @GetMapping("/{id}") // Corrigido para a URL desejada
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
}*/