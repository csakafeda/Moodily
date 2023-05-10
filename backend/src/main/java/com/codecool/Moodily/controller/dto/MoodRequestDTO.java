package com.codecool.Moodily.controller.dto;

import com.codecool.Moodily.database.repository.User;

import java.time.LocalDate;

public record MoodRequestDTO(Integer moodRate,
                             String moodDescription,
                             String moodPicture,
                             String moodMusic,
                             LocalDate created,
                             LocalDate moodDate,
                             User user) {
}
