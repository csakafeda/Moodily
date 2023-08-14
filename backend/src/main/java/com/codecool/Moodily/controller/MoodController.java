package com.codecool.Moodily.controller;

import com.codecool.Moodily.database.models.Mood;
import com.codecool.Moodily.database.models.dto.MoodRequestDTO;
import com.codecool.Moodily.service.MoodService;
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

    @GetMapping("/{id}")
    public List<Mood> getAllMoodByUserId(@PathVariable("id") Long userId) {
        return moodService.getAllMoodsByUserId(userId);
    }

    @GetMapping("post/{id}")
    public Mood getMoodById(@PathVariable("id") Long postId) {
        return moodService.getMoodById(postId);
    }

    @PostMapping
    public Mood saveMood(@RequestBody MoodRequestDTO moodRequestDTO) {
        if (moodService.isPostedToday(LocalDate.now(), moodRequestDTO.userId())) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "You have posted today");
        }
        return moodService.saveMood(moodRequestDTO);
    }

    @GetMapping("today/{userId}")
    public Mood getTodaysMood(@PathVariable("userId") Long userId) {
        try {
            return moodService.getTodaysMood(userId);
        } catch (Exception exc) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "You have not posted today", exc);
        }
    }

    @PatchMapping("update/{id}")
    public Mood patchTodaysMood(@PathVariable("id") Long id, @RequestBody MoodRequestDTO moodRequestDTO) {
        return moodService.updateTodaysMood(id, moodRequestDTO);
    }

    @DeleteMapping("delete/{id}")
    public void deleteMood(@PathVariable("id") Long id) {
        moodService.deleteMood((id));
    }

}
