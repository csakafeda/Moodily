package com.codecool.DailyVibe.service;

import com.codecool.DailyVibe.database.Mood;
import com.codecool.DailyVibe.database.MoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class MoodService {

    private final MoodRepository moodRepository;

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

    public boolean isPostedToday(LocalDate localDate) {
        return moodRepository.findAll()
                .stream()
                .anyMatch(e -> e.getMoodDate().equals(localDate));
    }

    public Mood getTodaysMood() {
        return moodRepository.findAll()
                .stream()
                .filter(m -> m.getMoodDate().equals(LocalDate.now()))
                .findFirst().get();
    }
}

