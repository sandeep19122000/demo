package com.example.demo.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

// Annotations
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accountNumber;
    private int balance;
    @ManyToOne
    @JoinColumn(name="id")

    private User user;

    @ManyToOne
    @JoinColumn(name="bankCode")

    private Bank bank;

    @ManyToOne
    @JoinColumn(name="branchCode")
    private Branch branch;
}
