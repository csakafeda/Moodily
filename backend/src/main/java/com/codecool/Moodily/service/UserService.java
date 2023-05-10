package com.codecool.Moodily.service;

import com.codecool.Moodily.controller.dto.UserDTO;
import com.codecool.Moodily.database.UserRepository;
import com.codecool.Moodily.database.repository.User;
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
    public List<User> getAllUser() {
        return null;
    }

    //get user by id
    public User getUserById(Long id) {
        return null;
    }

    //save new user
    public User saveNewUser(UserDTO user) {
        return null;
    }

    //update user by id
    public User updateUser(Long id) {
        return null;
    }

}
