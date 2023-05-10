package com.codecool.Moodily.controller;

import com.codecool.Moodily.database.models.UserEntity;
import com.codecool.Moodily.database.models.dto.DTOFactory;
import com.codecool.Moodily.database.models.dto.UserDTO;
import com.codecool.Moodily.database.repository.UserRepository;
import com.codecool.Moodily.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user/")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserService userService,
                          UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<UserDTO> getAllUsers(){
        return userService.getAllUser();
    }

    @GetMapping("id")
    public UserDTO getUser(@RequestParam Long id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public UserEntity saveNewUser(@RequestBody UserEntity user) {
        return userService.saveNewUser(user);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<?> handleMissingUser(){
        return ResponseEntity.notFound().build();
    }
}
