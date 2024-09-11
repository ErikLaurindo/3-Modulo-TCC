/*package com.belval.maniadepets.service;
import com.belval.maniadepets.model.User;
import com.belval.maniadepets.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
@Service
public class CustomUserDetailsService implements UserDetailsService {
   @Autowired
   private UserRepository userRepository;
   @Override
   public UserDetails loadUserByUsername(String useremail) throws UsernameNotFoundException {
       User user = ((Object) userRepository.findByUsername(useremail))
               .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
       return new org.springframework.security.core.userdetails.User(user.getUserEmail(), user.getUserSenha(),
               new ArrayList<>());
   }
}
*/