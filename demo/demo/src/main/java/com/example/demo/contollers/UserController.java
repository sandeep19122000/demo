package com.example.demo.contollers;

import com.example.demo.dto.UserDto;
import com.example.demo.dtoConvertor.UserDtoConvertor;
import com.example.demo.entity.JwtRequest;
import com.example.demo.entity.JwtResponse;
import com.example.demo.exceptionHandling.UserException;
import com.example.demo.serviceImpl.JwtServiceImpl;
import com.example.demo.serviceImpl.UserServiceImpl;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import com.example.demo.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private UserServiceImpl userServiceimpl;
    private JwtServiceImpl jwtServiceImpl;
    private UserDtoConvertor userDtoConvertor;


    @PostConstruct
    public void initRoleAndUser() {
        userServiceimpl.initRoleAndUser();
        userServiceimpl.savebankdetails();
        userServiceimpl.saveBranchDetails();

    }
    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody User user){



        User savedUser = userServiceimpl.createUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
    @PostMapping("/createAdmin")
    public  User createAdmin(){

      User user= userServiceimpl.createAdmin();
return user;
    }
    @GetMapping("/getAll")
    @PreAuthorize("hasRole('Admin')")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userServiceimpl.getAllUsers();

        return new ResponseEntity<>(users, HttpStatus.OK);
    }

//    @PostMapping("/login")
//    public ResponseEntity<User> login(@RequestBody User user) {
//        User savedUser = userService.login(user);
//        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
//
//    }

    @PostMapping({"/login"})
    public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        System.out.print("hi1");
        return jwtServiceImpl.createJwtToken(jwtRequest);

    }
    @GetMapping("/getUserById/{id}")
    public ResponseEntity <UserDto> getUserById(@PathVariable int id) throws UserException {

                User user = userServiceimpl.findById(id);

            if(user==null) {
                throw new UserException();
            }
            else {
                UserDto userDto = userDtoConvertor.convertEntityToDto(user);
                return new ResponseEntity<>(userDto, HttpStatus.OK);
            }






    }
    @GetMapping("/getUserByRoleName/{name}")
    @PreAuthorize("hasRole('Admin')")
    public ResponseEntity <List<User>> getUserById(@PathVariable String name){
        List<User> userList = userServiceimpl.findByRoleName(name);
        return new ResponseEntity<>(userList, HttpStatus.OK);

    }


    }


