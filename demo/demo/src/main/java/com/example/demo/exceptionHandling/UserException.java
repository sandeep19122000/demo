package com.example.demo.exceptionHandling;

public class UserException extends Exception {
    public UserException(){
        super("user doesnt exist");
    }
}
