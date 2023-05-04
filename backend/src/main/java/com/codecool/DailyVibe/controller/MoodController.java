package com.codecool.DailyVibe.controller;

import com.codecool.DailyVibe.database.Mood;
import com.codecool.DailyVibe.service.MoodService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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
        if (moodService.isPostedToday(LocalDate.now())) {
            //ResponseStatusException
            throw new IllegalArgumentException("You already posted today");
        }
        return moodService.saveMood(moodRequestDTO);
    }

    @GetMapping("/today")
    public Mood getTodaysMood() {
        if (!moodService.isPostedToday(LocalDate.now())) {
            throw new IllegalArgumentException("You have not posted today");
        }
        return moodService.getTodaysMood();
    }



}
