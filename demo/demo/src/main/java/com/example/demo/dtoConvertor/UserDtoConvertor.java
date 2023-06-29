package com.example.demo.dtoConvertor;

import com.example.demo.dto.UserDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDtoConvertor {
    @Autowired
    private ModelMapper modelMapper;
    public UserDto convertEntityToDto(com.example.demo.entity.User user){
        UserDto userDto =new UserDto();
        userDto=modelMapper.map(user,UserDto.class);
        return userDto;

    }
}
