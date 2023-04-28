package com.codecool.DailyVibe.controller;

public record MoodRequestDTO(Integer moodRate,
                             String moodDescription,
                             String moodPicture,
                             String moodMusic) {
}
