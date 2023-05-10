package com.codecool.Moodily.controller.dto;

import com.codecool.Moodily.database.enums.Role;
import com.codecool.Moodily.database.repository.Mood;

import java.util.List;

public record UserDTO(String username,
                      String email,
                      String password) {
}
