package com.codecool.DailyVibe.controller;

import java.time.LocalDate;

public record MoodRequestDTO(Integer moodRate,
                             String moodDescription,
                             String moodPicture,
                             String moodMusic,
                             LocalDate created,
                            LocalDate moodDate) {
}
