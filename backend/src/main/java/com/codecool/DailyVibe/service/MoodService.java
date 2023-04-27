package com.codecool.DailyVibe.service;

import com.codecool.DailyVibe.database.Mood;
import com.codecool.DailyVibe.database.MoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoodService {
    @Autowired
    private MoodRepository moodRepository;

    public List<Mood> getAllMoods() {
        return moodRepository.findAll();
    }

    public Mood getMoodById(Long id) {
        return moodRepository.findById(id).orElse(null);
    }

    public Mood saveMood(Mood mood) {
        return moodRepository.save(mood);
    }
}
