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
   public ResponseEntity<Object> atualizarAgendamento(@PathVariable(value = "id") Integer id, @RequestBody AgenVis agenVisDetails) {
       try {
           System.out.println("Dados recebidos: " + agenVisDetails);  // Log para depuração

           // Busca o agendamento pelo ID
           Optional<AgenVis> agenVisEncontrado = agenVisRepository.findById(id);
           if (agenVisEncontrado.isEmpty()) {
               return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Agendamento não encontrado.");
           }

           AgenVis agendamentoExistente = agenVisEncontrado.get();

           // Atualiza os campos do agendamento
           if (agenVisDetails.getAgenTipo() != null) {
               agendamentoExistente.setAgenTipo(agenVisDetails.getAgenTipo());
           }
           if (agenVisDetails.getAgenDataAgen() != null) {
               agendamentoExistente.setAgenDataAgen(agenVisDetails.getAgenDataAgen());
           }

           // Mantém o mesmo InfoPet (não altera a chave estrangeira)
           // Não fazemos nada com o campo `InfoPet` para garantir que o pet associado ao agendamento não será alterado.
           // O `InfoPet` do agendamento será mantido conforme estava antes, mesmo que o `InfoPet` seja enviado na requisição.
           if (agenVisDetails.getInfoPet() != null) {
               // Não atualizamos o InfoPet para garantir que a chave estrangeira seja preservada.
               // agendamentoExistente.setInfoPet(agenVisDetails.getInfoPet());  // Comentado para não alterar o pet
           }

           // Salva o agendamento atualizado no banco
           agenVisRepository.save(agendamentoExistente);

           // Retorna um status de sucesso com uma mensagem
           return ResponseEntity.status(HttpStatus.OK).body("Agendamento atualizado com sucesso.");

       } catch (Exception e) {
           // Em caso de erro, retorna um status 500 com a mensagem de erro
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao atualizar agendamento");
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
