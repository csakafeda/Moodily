package com.codecool.DailyVibe.service;

import com.codecool.DailyVibe.controller.MoodRequestDTO;
import com.codecool.DailyVibe.database.Mood;
import com.codecool.DailyVibe.database.MoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;

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

    public Mood saveMood(MoodRequestDTO moodRequestDTO) {
        Mood newMood = Mood
                .builder()
                .moodRate(moodRequestDTO.moodRate())
                .moodDescription(moodRequestDTO.moodDescription())
                .moodMusic(moodRequestDTO.moodMusic())
                .moodPicture(moodRequestDTO.moodPicture())
                .created(LocalDate.now())
                .moodDate(LocalDate.now())
                .build();
        return moodRepository.save(newMood);
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
                .findFirst()
                .orElseThrow(() -> new NoSuchElementException("You have not posted today."));
    }
}

