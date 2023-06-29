package com.example.demo.JPA;

import com.example.demo.entity.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleJpa extends CrudRepository<Role, String> {

}