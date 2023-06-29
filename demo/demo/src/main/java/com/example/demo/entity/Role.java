package com.example.demo.entity;

//import javax.persistence.Entity;
//import javax.persistence.Id;
import jakarta.persistence.*;
@Entity
public class Role {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int id;
    private String roleName;
    private String roleDescription;

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleDescription() {
        return roleDescription;
    }

    public void setRoleDescription(String roleDescription) {
        this.roleDescription = roleDescription;
    }
}