package com.belval.maniadepets.repository;

import com.belval.maniadepets.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    // Método para encontrar o usuário com base no email e senha
    Optional<User> findByUserEmailAndUserSenha(String userEmail, String userSenha);

    // Aqui, não precisamos de consulta customizada. Apenas utilizamos save para atualizar.
}


/*package com.belval.maniadepets.repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.belval.maniadepets.model.User;

import jakarta.transaction.Transactional;
public interface UserRepository extends JpaRepository<User, Integer> {
   Optional<User> findByUserEmailAndUserSenha(String userEmail, String userSenha);

@Transactional
@Modifying
@Query("UPDATE User u SET u.nome = :User_Name, u.email = :User_Email WHERE u.email = :email")
int updateUserByEmail(@Param("User_Name") String userName, @Param("User_Email") String userEmail, @Param("email") String email);
}
*/