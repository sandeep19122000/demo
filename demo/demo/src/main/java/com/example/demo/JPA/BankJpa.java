package com.example.demo.JPA;

import com.example.demo.entity.Bank;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankJpa extends JpaRepository<Bank,Integer> {
}
