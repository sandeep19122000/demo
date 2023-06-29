package com.example.demo.JPA;

import com.example.demo.entity.Account;
import com.example.demo.entity.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoanJpa extends JpaRepository<Loan,Integer> {
    public Loan findByLoanNumber(int loanNumber);
    public void deleteByLoanNumber(int loanNumber);
}
