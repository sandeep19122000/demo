package com.example.demo.serviceImpl;
import com.example.demo.JPA.BankJpa;
import com.example.demo.JPA.BranchJpa;
import com.example.demo.JPA.RoleJpa;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.*;
import com.example.demo.JPA.UserJpa;
import lombok.AllArgsConstructor;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.HashSet;
import java.util.List;

import java.util.Set;

@Service
@AllArgsConstructor
public class UserServiceImpl {
    private UserJpa userRepository;
    private RoleJpa roleJpa;
    private BankJpa bankJpa;
    private BranchJpa branchJpa;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private ModelMapper modelMapper;



    public User createUser(User user) {
//        User userCheck=userRepository.findByEmail(user.getEmail());
//        if(userCheck!=null) {
//            return null;
//        }
        Role role = roleJpa.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setPassword(getEncodedPassword(user.getPassword()));

        return userRepository.save(user);
    }

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleJpa.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for newly created record");
        roleJpa.save(userRole);

//        User adminUser = new User();
//        adminUser.setEmail("admin123");
//        adminUser.setPassword(getEncodedPassword("admin@pass"));

//        Set<Role> adminRoles = new HashSet<>();
//
//        Role admin = new Role();
//        admin.setRoleName("Admin");
//        admin.setRoleDescription("Admin role");
//        adminRoles.add(admin);
//        adminUser.setRole(adminRoles);
//        Role role = roleJpa.findById(1).get();
//        Set<Role> adminRoles = new HashSet<>();
//        adminRoles.add(role);
//        adminUser.setRole(adminRoles);
//        userRepository.save(adminUser);
    }
    public User createAdmin(){
        User adminUser = new User();
        adminUser.setEmail("admin@gmail.com");
        adminUser.setPassword(getEncodedPassword("Admin1234"));


    Role role = roleJpa.findById("Admin").get();
    Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        adminUser.setRole(userRoles);
        userRepository.save(adminUser);
        return adminUser;
    }
    public void savebankdetails(){
        Bank bank1=new Bank();
        Bank bank2=new Bank();
        Bank bank3=new Bank();
        bank1.setBankName("Axis");
        bank2.setBankName("Hdfc");
        bank3.setBankName("City");
        bankJpa.save(bank1);
        bankJpa.save(bank2);
        bankJpa.save(bank3);
    }
    public void saveBranchDetails(){
        Branch branch1=new Branch();
        Branch branch2=new Branch();
        Branch branch3=new Branch();
        branch1.setBranchName("goregaon");
        branch2.setBranchName("malad");
        branch3.setBranchName("borivali");
        branch1.setBranchAddress("goregaonWest");
        branch2.setBranchAddress("maladWest");
        branch3.setBranchAddress("borivaliWest");
        branchJpa.save(branch1);
        branchJpa.save(branch2);
        branchJpa.save(branch3);


    }

    public User getUserById(int id) {
        User optionalUser = userRepository.findById(id);
        return optionalUser;
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


//    public UserService updateUser(UserService user) {
//        UserService existingUser = userRepository.findById(user.getId()).get();
//        existingUser.setFirstName(user.getFirstName());
//        existingUser.setLastName(user.getLastName());
//        existingUser.setEmail(user.getEmail());
//        UserService updatedUser = userRepository.save(existingUser);
//        return updatedUser;
//    }


    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
    public User login(User user) {
        User users = userRepository.findByEmailAndPassword(user.getEmail(),user.getPassword());

        return users;
    }
    public User findById(int id){
        return userRepository.findById(id);
    }

    public List<User> findByRoleName(String name){return userRepository.findByRoleRoleName(name);}

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
