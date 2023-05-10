package com.codecool.Moodily.database.models.dto;

import com.codecool.Moodily.database.models.UserEntity;

public class DTOFactory {

    public static UserDTO createDTO(UserEntity user){
        return new UserDTO(user.getId(), user.getUsername(), user.getEmail(), user.getPassword());
    }
}
