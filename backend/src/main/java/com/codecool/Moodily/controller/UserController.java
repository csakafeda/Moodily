package com.codecool.Moodily.controller;

import com.codecool.Moodily.database.models.UserEntity;
import com.codecool.Moodily.database.models.dto.UserDTO;
import com.codecool.Moodily.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user/")
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

    @GetMapping("id")
    public UserEntity getUser(@RequestParam Long id) {
        return null;
    }

    @PostMapping
    public UserEntity saveNewUser(@RequestBody UserEntity user) {
        return userService.saveNewUser(user);
    }
}
