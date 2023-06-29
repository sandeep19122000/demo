package com.example.demo.exceptionHandling.exceptionHandler;

import com.example.demo.exceptionHandling.UserException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserExceptionHandler {
    @ExceptionHandler
    public ResponseEntity<Object> myMessage(UserException c){
        return new ResponseEntity<>(c.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
