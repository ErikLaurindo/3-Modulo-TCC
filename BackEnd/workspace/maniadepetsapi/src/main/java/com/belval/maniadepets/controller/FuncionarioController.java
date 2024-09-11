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
 
import com.belval.maniadepets.model.Funcionario;
 
import com.belval.maniadepets.repository.FuncionarioRepository;
 
@RestController
 
public class FuncionarioController {
 
    @Autowired
 
    private FuncionarioRepository funcionarioRepository;
 
    @PostMapping("/funcionario")
 
    public <S> ResponseEntity<String> createFuncionario(@RequestBody Funcionario funcionario) {
 
        try {
 
            funcionarioRepository.save(funcionario);
 
            return ResponseEntity.status(HttpStatus.OK).body("Sucesso");
 
        } catch (Exception e) {
 
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar funcionário");
 
        }
 
    }
 
    @GetMapping("/funcionario/{id}")
 
    public ResponseEntity<Object> buscarProdutoPorId(@PathVariable Integer id) {
 
        try {
 
            Optional<Funcionario> produto = funcionarioRepository.findById(id);
 
            if (!produto.isPresent()) {
 
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionário não encontrado.");
 
            }
 
            return ResponseEntity.status(HttpStatus.OK).body(produto.get());
 
        } catch (Exception e) {
 
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao buscar funcionário");
 
        }
 
    }
 
    

    @DeleteMapping("/funcionario/{id}")
 
    public ResponseEntity<Object> apagar(@PathVariable Integer id) {
 
        try {
 
            Optional<Funcionario> Funcionario = funcionarioRepository.findById(id);
 
            if (!Funcionario.isPresent()) {
 
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionário não encontrado.");
 
            }
 
            funcionarioRepository.delete(Funcionario.get());
 
            return ResponseEntity.status(HttpStatus.OK).body("Usuário apagado com sucesso!");
 
        } catch (Exception e) {
 
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao apagar usuário");
 
        }
 
    }
 
    @PutMapping("/funcionario/{id}")
 
    public ResponseEntity<Object> atualizarProduto(@PathVariable(value = "id") Integer id, @RequestBody Funcionario produto) {
 
        try {
 
            Optional<Funcionario> produtoEncontrado = funcionarioRepository.findById(id);
 
            if (produtoEncontrado.isEmpty()) {
 
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionário não encontrado.");
 
            }
 
            produto.setFunId(id);
 
            funcionarioRepository.save(produto);
 
            return ResponseEntity.status(HttpStatus.OK).body("Funcionário atualizado com sucesso.");
 
        } catch (Exception e) {
 
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao atualizar funcionário");
 
        }
 
    }
 
}