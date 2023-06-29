package com.example.demo.serviceImpl;


import com.example.demo.JPA.UserJpa;
import com.example.demo.entity.JwtRequest;
import com.example.demo.entity.JwtResponse;
import com.example.demo.entity.User;
import com.example.demo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class JwtServiceImpl implements UserDetailsService {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserJpa userJpa;

    @Autowired
    private AuthenticationManager authenticationManager;

    public JwtResponse createJwtToken(JwtRequest jwtRequest) throws Exception {
        System.out.print("hi2");
        String email = jwtRequest.getEmail();
        String password = jwtRequest.getPassword();
        authenticate(email, password);
//use user from db to load UserDetail
        UserDetails userDetails = loadUserByUsername(email);
        String newGeneratedToken = jwtUtil.generateToken(userDetails);
        System.out.print(newGeneratedToken);
        User user = userJpa.findByEmail(email);
        //loads user from db
        return new JwtResponse(user, newGeneratedToken);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userJpa.findByEmail(email);

        if (user != null) {
            return new org.springframework.security.core.userdetails.User(
                    user.getEmail(),
                    user.getPassword(),
                    getAuthority(user)
            );
        } else {
            throw new UsernameNotFoundException("User not found with username: " + email);
        }
    }

    private Set getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        user.getRole().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRoleName()));
        });
        return authorities;
    }

    private void authenticate(String email, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}