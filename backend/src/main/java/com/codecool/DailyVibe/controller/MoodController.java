package com.codecool.DailyVibe.controller;

import com.codecool.DailyVibe.database.Mood;
import com.codecool.DailyVibe.service.MoodService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "You have posted today");
        }
        return moodService.saveMood(moodRequestDTO);
    }

    @GetMapping("today")
    public Mood getTodaysMood() {
        try {
            return moodService.getTodaysMood();
        } catch (Exception exc) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "You have not posted today", exc);
        }
    }

    @PatchMapping("update/{id}")
    public Mood patchTodaysMood(@PathVariable("id") Integer id, MoodRequestDTO moodRequestDTO) {
        return moodService.updateTodaysMood(id, moodRequestDTO);
    }


}
