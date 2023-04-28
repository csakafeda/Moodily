package com.codecool.DailyVibe.service;

import com.codecool.DailyVibe.controller.MoodRequestDTO;
import com.codecool.DailyVibe.database.Mood;
import com.codecool.DailyVibe.database.MoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoodService {

    private MoodRepository moodRepository;

    @Autowired
    public MoodService(MoodRepository moodRepository) {
        this.moodRepository = moodRepository;
    }

    public List<Mood> getAllMoods() {
        return moodRepository.findAll();
    }

    public Mood saveMood(Mood mood) {
        return moodRepository.save(mood);
    }
}
