package com.example.demo.JPA;

import com.example.demo.entity.Account;
import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountJpa extends JpaRepository<Account,Integer> {
    public List<Account> findByUserId(int id);
    public Account findByAccountNumber(int accountNumber);

    public void deleteByAccountNumber(int accountNumber);
}
