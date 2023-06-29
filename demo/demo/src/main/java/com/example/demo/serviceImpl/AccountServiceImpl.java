package com.example.demo.serviceImpl;

import com.example.demo.JPA.AccountJpa;
import com.example.demo.entity.Account;

import java.util.List;

import com.example.demo.service.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AccountServiceImpl implements AccountService {
    private AccountJpa accountJpa;

    public Account createAccount(Account account) {


        return accountJpa.save(account);
    }

    public List<Account> getAccountByUserId(int id)
{
    return accountJpa.findByUserId(id);
}
    public void  deleteAccountByAccountNumber(int accountNumber) {
        accountJpa.deleteByAccountNumber(accountNumber);
    }
    public Account getAccountByAccountNumber(int accountNumber)
    {
        return accountJpa.findByAccountNumber(accountNumber);
    }
    public List<Account> getAllAccount() {
        return accountJpa.findAll();
    }
//    public void update(account Account, int id)
//    {

//        accountJpa.save(account);
//    }
}
