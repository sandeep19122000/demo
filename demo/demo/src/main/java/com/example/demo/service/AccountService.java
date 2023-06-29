package com.example.demo.service;

import com.example.demo.entity.Account;

import java.util.List;

public interface AccountService {
    public Account createAccount(Account account);
    public List<Account> getAccountByUserId(int id);
    public void  deleteAccountByAccountNumber(int accountNumber);
    public Account getAccountByAccountNumber(int accountNumber);
    public List<Account> getAllAccount();
}