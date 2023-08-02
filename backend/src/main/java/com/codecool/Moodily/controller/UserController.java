package com.codecool.Moodily.controller;

import com.codecool.Moodily.database.models.UserEntity;
import com.codecool.Moodily.database.models.dto.CredentialDTO;
import com.codecool.Moodily.database.models.dto.UserDTO;
import com.codecool.Moodily.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserDTO> getAllUsers(){
        return userService.getAllUser();
    }

    @GetMapping("byId/{id}")
    public UserEntity getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("login")
    public UserDTO getUserByUsernameAndPassword(@RequestBody CredentialDTO credentialDTO){
        return userService.getUserByUsernameAndPassword(credentialDTO.username(), credentialDTO.password());
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
