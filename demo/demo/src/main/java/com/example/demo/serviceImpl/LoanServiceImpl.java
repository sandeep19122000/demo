package com.example.demo.serviceImpl;

import com.example.demo.JPA.LoanJpa;
import com.example.demo.entity.Loan;

import java.util.List;

import com.example.demo.service.LoanService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoanServiceImpl implements LoanService {
    private LoanJpa loanJpa;
    public List<Loan> getAllLoan() {
        return loanJpa.findAll();
    }
    public Loan getLoanByLoanNumber(int loanNumber)
    {
        return loanJpa.findByLoanNumber(loanNumber);
    }
    public Loan createLoan(Loan loan) {


        return loanJpa.save(loan);
    }
    public void  deleteLoanByLoanNumber(int loanNumber) {
        loanJpa.deleteByLoanNumber(loanNumber);
    }
}
