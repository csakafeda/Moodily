package com.codecool.Moodily.controller;

import com.codecool.Moodily.controller.dto.UserDTO;
import com.codecool.Moodily.database.repository.User;
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
    public User getUser(@RequestParam Long id) {
        return null;
    }

    @PostMapping
    public User saveNewUser(@RequestBody UserDTO userDTO) {
        return userService.saveNewUser(userDTO);
    }
}
