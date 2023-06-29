package com.example.demo.entity;


// Java Program to Illustrate Department File



// Importing required classes
        import com.fasterxml.jackson.annotation.JsonIgnore;
        import lombok.AllArgsConstructor;
        import lombok.Builder;
        import lombok.Data;
        import lombok.NoArgsConstructor;


        import jakarta.persistence.*;

        import java.util.ArrayList;
        import java.util.List;
        import java.util.Set;

// Annotations
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

// Class
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String email;
    private String password;
    private String aadhaarNo;
    private String panNo;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")
            }
    )
    private Set<Role> role;

}
