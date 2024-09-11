/*package com.belval.maniadepets.config;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import java.util.Date;
@Component
public class JwtUtil {
   @Value("${jwt.secret}")
   private String secretKey;
   @Value("${jwt.expiration}")
   private long jwtExpirationInMs;
   // Gera um token JWT com o nome de usuário
   public String generateToken(String username) {
       return Jwts.builder()
               .setSubject(username) // Define o nome de usuário como o assunto do token
               .setIssuedAt(new Date()) // Define a data e hora de emissão
               .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationInMs)) // Define a data de expiração
               .signWith(SignatureAlgorithm.HS256, secretKey) // Assina o token com o algoritmo HS256 e a chave secreta
               .compact(); // Compacta e gera o token JWT
   }
   // Extrai as Claims do token JWT
   public Claims extractClaims(String token) {
       return Jwts.parser()
               .setSigningKey(secretKey) // Define a chave secreta para verificar a assinatura
               .parseClaimsJws(token) // Analisa o token e retorna as Claims
               .getBody();
   }
   // Extrai o nome de usuário do token JWT
   public String extractUsername(String token) {
       return extractClaims(token).getSubject(); // Retorna o assunto do token
   }
   // Verifica se o token JWT está expirado
   public boolean isTokenExpired(String token) {
       return extractClaims(token).getExpiration().before(new Date()); // Compara a data de expiração com a data atual
   }
   // Valida o token JWT
   public boolean validateToken(String token, UserDetails userDetails) {
       String extractUsername = extractUsername(token);
	return (userDetails.equals(extractUsername) && !isTokenExpired(token)); // Verifica se o nome de usuário e a expiração são válidos
   }
}
*/ /*<!-- https://mvnrepository.com/artifact/org.springframework.security/spring-security-jwt -->
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-jwt</artifactId>
    <version>1.1.1.RELEASE</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-security -->

<!-- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-api -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.12.6</version>
</dependency>

<!-- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-impl -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.12.6</version>
    <scope>runtime</scope>
</dependency>

<!-- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-jackson -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.12.6</version>
    <scope>runtime</scope>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
*/