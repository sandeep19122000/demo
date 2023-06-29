package com.example.demo.serviceImpl;

import com.example.demo.JPA.BankJpa;
import com.example.demo.entity.Bank;
import com.example.demo.service.BankService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BankServiceImpl implements BankService {
    private BankJpa bankJpa;
    public Bank createBank(Bank bank) {


        return bankJpa.save(bank);
    }
}
