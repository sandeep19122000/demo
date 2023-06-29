package com.example.demo.JPA;

import com.example.demo.entity.Account;
import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserJpa extends JpaRepository<User, Integer> {

    public User findByEmailAndPassword(String email, String password);
    public User findByEmail(String email);
    public User findById(int id);
    List<User> findByRoleRoleName(String name);
}
