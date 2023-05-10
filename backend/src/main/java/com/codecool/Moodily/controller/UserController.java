package com.codecool.Moodily.controller;

import com.codecool.Moodily.database.enums.Role;
import com.codecool.Moodily.database.models.dto.UserDTO;
import com.codecool.Moodily.database.models.UserEntity;
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
    public UserEntity saveNewUser(@RequestBody UserEntity user) {
        user.setRole(Role.USER);
        return userService.saveNewUser(user);
    }
}
