package com.codecool.Moodily.service;

import com.codecool.Moodily.controller.UserNotFoundException;
import com.codecool.Moodily.database.enums.Role;
import com.codecool.Moodily.database.models.Mood;
import com.codecool.Moodily.database.models.UserEntity;
import com.codecool.Moodily.database.models.dto.DTOFactory;
import com.codecool.Moodily.database.models.dto.UserDTO;
import com.codecool.Moodily.database.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    public UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> getAllUser() {
        return userRepository.findAll()
                .stream()
                .map(DTOFactory::createDTO)
                .collect(Collectors.toList());
    }

    public UserEntity getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(UserNotFoundException::new);
    }

    public UserDTO getUserByUsernameAndPassword(String username, String password) {
        return DTOFactory.createDTO(userRepository.findByUsernameAndPassword(username, password)
                .orElseThrow(UserNotFoundException::new));
    }

    public UserEntity saveNewUser(UserEntity user) {
        user.setRole(Role.USER);
        return userRepository.save(user);
    }

    //update user by id
    public UserEntity updateUser(Long id) {
        return null;
    }

    public List<LocalDate> getAllPostDate(Long userId) {
        UserEntity user = getUserById(userId);
        return user.getMoodList()
                .stream()
                .map(Mood::getMoodDate)
                .collect(Collectors.toList());
    }
}
