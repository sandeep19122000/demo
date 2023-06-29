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

public class Branch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int branchCode;
    private String branchName;
    private String branchAddress;

}
