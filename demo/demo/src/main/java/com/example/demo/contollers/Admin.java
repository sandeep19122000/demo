package com.example.demo.contollers;
import com.example.demo.entity.*;
import com.example.demo.serviceImpl.AccountServiceImpl;
import com.example.demo.serviceImpl.BankServiceImpl;
import com.example.demo.serviceImpl.BranchServiceImpl;
import com.example.demo.serviceImpl.LoanServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class Admin {
    private LoanServiceImpl loanServiceImpl;
    private AccountServiceImpl accountServiceImpl;
    private BankServiceImpl bankServiceImpl;
    private BranchServiceImpl branchServiceImpl;
    @PostMapping("/createAccount")
    public Account createAccount(@RequestBody Account account){
        Account savedAccount = accountServiceImpl.createAccount(account);
        return savedAccount;
    }
    @PostMapping("/createLoan")
    public Loan createLoan(@RequestBody Loan loan){
        Loan savedLoan = loanServiceImpl.createLoan(loan);
        return savedLoan;
    }
    @PostMapping("/createBank")
    public ResponseEntity<Bank> createBank(@RequestBody Bank bank){
        Bank savedBank = bankServiceImpl.createBank(bank);
        return new ResponseEntity<>(savedBank, HttpStatus.CREATED);
    }

    @PostMapping("/createBranch")
    public ResponseEntity<Branch> createBranch(@RequestBody Branch branch){
        Branch savedBranch = branchServiceImpl.createBranch(branch);
        return new ResponseEntity<>(savedBranch, HttpStatus.CREATED);
    }
    @GetMapping("/getAllLoan")

    public ResponseEntity<List<Loan>> getAllLoan(){
        List<Loan> loan = loanServiceImpl.getAllLoan();
        return new ResponseEntity<>(loan, HttpStatus.OK);
    }
    @GetMapping("/getAllAccount")
    public ResponseEntity<List<Account>> getAllAccount(){
        List<Account> Account = accountServiceImpl.getAllAccount();
        return new ResponseEntity<>(Account, HttpStatus.OK);
    }

    @GetMapping("/getAccountById/{id}")
    public ResponseEntity<List<Account>> getAccountByUserId(@PathVariable int id){
        List<Account> Account = accountServiceImpl.getAccountByUserId(id);
        return new ResponseEntity<>(Account, HttpStatus.OK);

    }

    @GetMapping("/getAccountByAccountNumber/{accountNumber}")
    public ResponseEntity<Account> getAccountByAccountNumber(@PathVariable int accountNumber){
        Account Account = accountServiceImpl.getAccountByAccountNumber(accountNumber);
        return new ResponseEntity<>(Account, HttpStatus.OK);

    }
    @GetMapping("/getLoanByLoanNumber/{loanNumber}")
    public ResponseEntity<Loan> getLoanByLoanNumber(@PathVariable int loanNumber){
        Loan Loan = loanServiceImpl.getLoanByLoanNumber(loanNumber);
        return new ResponseEntity<>(Loan, HttpStatus.OK);

    }
    @DeleteMapping({"/DeleteAccount/{accountNumber}"})
    public void deleteAccountByAccountNumber(@PathVariable("accountNumber") int accountNumber) {
        accountServiceImpl.deleteAccountByAccountNumber(accountNumber);
    }
    @DeleteMapping({"/deleteLoanByLoanNumber/{loanNumber}"})
    public void deleteLoanByLoanNumber(@PathVariable("loanNumber") int loanNumber) {
        loanServiceImpl.deleteLoanByLoanNumber(loanNumber);
    }

}
