package com.belval.maniadepets.repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.belval.maniadepets.model.User;
public interface UserRepository extends JpaRepository<User, Integer> {
   Optional<User> findByUserEmailAndUserSenha(String userEmail, String userSenha);
}