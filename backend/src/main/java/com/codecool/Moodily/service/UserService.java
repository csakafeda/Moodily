package com.codecool.Moodily.service;

import com.codecool.Moodily.database.models.dto.UserDTO;
import com.codecool.Moodily.database.repository.UserRepository;
import com.codecool.Moodily.database.models.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    public UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //getAll users
    public List<UserEntity> getAllUser() {
        return null;
    }

    //get user by id
    public UserEntity getUserById(Long id) {
        return null;
    }

    //save new user
    public UserEntity saveNewUser(UserDTO user) {
        return null;
    }

    //update user by id
    public UserEntity updateUser(Long id) {
        return null;
    }

}
