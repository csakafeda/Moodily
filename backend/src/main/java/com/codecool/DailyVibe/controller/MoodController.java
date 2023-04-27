package com.codecool.DailyVibe.controller;

import com.codecool.DailyVibe.database.Mood;
import com.codecool.DailyVibe.service.MoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
public class MoodController {

    private final MoodService moodService;

    @Autowired
    public MoodController(MoodService moodService) {
        this.moodService = moodService;
    }
    @GetMapping
    public List<Mood> getAllMoods() {
        return moodService.getAllMoods();
    }

    @GetMapping("/{id}")
    public Mood getMoodById(@PathVariable Long id) {
        return moodService.getMoodById(id);
    }

    @PostMapping
    public Mood saveMood(@RequestBody Mood mood) {
        return moodService.saveMood(mood);
    }
}
