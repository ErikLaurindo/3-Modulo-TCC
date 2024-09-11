package com.belval.maniadepets.repository;
 
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
 
import com.belval.maniadepets.model.Funcionario;
 
@Repository
public interface FuncionarioRepository extends CrudRepository<Funcionario, Integer> {

 
}