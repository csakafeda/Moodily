package com.codecool.DailyVibe.controller;

import com.codecool.DailyVibe.database.Mood;
import com.codecool.DailyVibe.service.MoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class MoodController {

    private final MoodService moodService;

    public MoodController(MoodService moodService) {
        this.moodService = moodService;
    }

    @GetMapping
    public List<Mood> getAllMoods() {
        return moodService.getAllMoods();
    }

    @PostMapping
    public Mood saveMood(@RequestBody MoodRequestDTO moodRequestDTO) {
        Mood newMood = Mood
                .builder()
                .moodRate(moodRequestDTO.moodRate())
                .moodDescription(moodRequestDTO.moodDescription())
                .moodMusic(moodRequestDTO.moodMusic())
                .moodPicture(moodRequestDTO.moodPicture())
                .build();
        return moodService.saveMood(newMood);
    }

}
