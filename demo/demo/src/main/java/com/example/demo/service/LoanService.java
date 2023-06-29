package com.example.demo.service;

import com.example.demo.entity.Loan;

import java.util.List;

public interface LoanService {
    public List<Loan> getAllLoan();
    public Loan getLoanByLoanNumber(int loanNumber);
    public Loan createLoan(Loan loan);
    public void  deleteLoanByLoanNumber(int loanNumber);
}
