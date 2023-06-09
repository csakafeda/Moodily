package com.codecool.Moodily.service;

import com.codecool.Moodily.database.models.dto.MoodRequestDTO;
import com.codecool.Moodily.database.repository.MoodRepository;
import com.codecool.Moodily.database.models.Mood;
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

    public Mood updateTodaysMood(Long id, MoodRequestDTO moodRequestDTO) {
        Mood moodToUpdate = moodRepository.findAll()
                .stream()
                .filter(m -> (m.getUser().getId()).equals(id))
                .filter(m -> m.getMoodDate().equals(LocalDate.now()))
                .findFirst()
                .orElseThrow(() -> new NoSuchElementException("You have not posted today."));
        moodToUpdate.setMoodRate(moodRequestDTO.moodRate());
        moodToUpdate.setMoodDescription(moodRequestDTO.moodDescription());
        moodToUpdate.setMoodPicture(moodRequestDTO.moodPicture());
        moodToUpdate.setMoodMusic(moodRequestDTO.moodMusic());

        return moodRepository.save(moodToUpdate);
    }
}

