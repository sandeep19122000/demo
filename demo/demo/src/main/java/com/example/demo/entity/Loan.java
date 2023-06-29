package com.example.demo.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import jakarta.persistence.*;

// Annotations
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int loanNumber;
    private int amount;
    private String status;
    private String request;
    @ManyToOne
    private Account account;

}
