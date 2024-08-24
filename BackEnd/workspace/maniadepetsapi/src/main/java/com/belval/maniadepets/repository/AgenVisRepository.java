package com.belval.maniadepets.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.belval.maniadepets.model.AgenVis;
public interface AgenVisRepository extends JpaRepository<AgenVis, Integer> {
   // Métodos de consulta personalizados podem ser adicionados aqui, se necessário
}