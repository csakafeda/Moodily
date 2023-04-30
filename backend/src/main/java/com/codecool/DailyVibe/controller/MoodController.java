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
    public Mood saveMood(@RequestBody MoodRequestDTO moodRequestDTO) throws Exception {
        if (moodService.isPostedToday(LocalDate.now())) {
            throw new IllegalArgumentException("You already posted today");
        }
        Mood newMood = Mood
                .builder()
                .moodRate(moodRequestDTO.moodRate())
                .moodDescription(moodRequestDTO.moodDescription())
                .moodMusic(moodRequestDTO.moodMusic())
                .moodPicture(moodRequestDTO.moodPicture())
                .created(LocalDate.now())
                .moodDate(LocalDate.now())
                .build();
        return moodService.saveMood(newMood);
    }

}
