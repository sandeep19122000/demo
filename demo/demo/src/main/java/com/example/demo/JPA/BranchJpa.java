package com.example.demo.JPA;

import com.example.demo.entity.Branch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BranchJpa extends JpaRepository<Branch,Integer> {
}
