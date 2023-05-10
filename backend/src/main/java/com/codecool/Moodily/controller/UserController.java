package com.codecool.Moodily.controller;

import com.codecool.Moodily.controller.dto.UserDTO;
import com.codecool.Moodily.database.repository.UserEntity;
import com.codecool.Moodily.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user/")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("id")
    public UserEntity getUser(@RequestParam Long id) {
        return null;
    }

    @PostMapping
    public UserEntity saveNewUser(@RequestBody UserDTO userDTO) {
        return userService.saveNewUser(userDTO);
    }
}
