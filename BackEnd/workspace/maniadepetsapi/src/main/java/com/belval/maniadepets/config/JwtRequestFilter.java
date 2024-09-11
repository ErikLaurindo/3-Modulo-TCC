/*


/*package com.belval.maniadepets.config;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
@Component
public class JwtRequestFilter extends OncePerRequestFilter {
   @Autowired
   private JwtUtil jwtUtil;
   @Autowired
   private UserDetailsService userDetailsService;
   @Override
   protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
           throws ServletException, IOException {
       final Cookie[] cookies = request.getCookies();
       String jwtToken = null;
       String username = null;
       if (cookies != null) {
           for (Cookie cookie : cookies) {
               if ("JWT_TOKEN".equals(cookie.getName())) {
                   jwtToken = cookie.getValue();
                   username = jwtUtil.extractUsername(jwtToken);
                   break;
               }
           }
       }
       if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
           UserDetails userDetails = userDetailsService.loadUserByUsername(username);
           if (jwtUtil.validateToken(jwtToken, username)) { // Ajustado para passar o username
               UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                       userDetails, null, userDetails.getAuthorities());
               authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
               SecurityContextHolder.getContext().setAuthentication(authenticationToken);
           }
       }
       chain.doFilter(request, response);
   }
}
*/
