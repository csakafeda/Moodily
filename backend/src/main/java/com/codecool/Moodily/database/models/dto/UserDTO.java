package com.codecool.Moodily.database.models.dto;

public record UserDTO( Long userId,
                       String username,
                       String email,
                       String password) {
}
