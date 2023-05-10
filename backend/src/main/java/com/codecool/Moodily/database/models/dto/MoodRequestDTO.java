package com.codecool.Moodily.database.models.dto;

import com.codecool.Moodily.database.models.UserEntity;

import java.time.LocalDate;

public record MoodRequestDTO(Integer moodRate,
                             String moodDescription,
                             String moodPicture,
                             String moodMusic,
                             LocalDate created,
                             LocalDate moodDate,
                             UserEntity user) {
}
