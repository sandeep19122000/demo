package com.example.demo.serviceImpl;

import com.example.demo.JPA.BranchJpa;
import com.example.demo.entity.Branch;
import com.example.demo.service.BranchService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BranchServiceImpl implements BranchService {
    private BranchJpa branchJpa;
    public Branch createBranch(Branch branch) {


        return branchJpa.save(branch);
    }
}
