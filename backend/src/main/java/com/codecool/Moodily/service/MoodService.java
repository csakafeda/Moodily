package com.codecool.Moodily.service;

import com.codecool.Moodily.database.models.Mood;
import com.codecool.Moodily.database.models.UserEntity;
import com.codecool.Moodily.database.models.dto.MoodRequestDTO;
import com.codecool.Moodily.database.repository.MoodRepository;
import com.codecool.Moodily.database.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class MoodService {

    private final MoodRepository moodRepository;
    private final UserRepository userRepository;

    @Autowired
    public MoodService(MoodRepository moodRepository, UserRepository userRepository) {
        this.moodRepository = moodRepository;
        this.userRepository = userRepository;
    }

    public List<Mood> getAllMoods() {
        return moodRepository.findAll();
    }

    public List<Mood> getAllMoodsByUserId(Long userId) {
        UserEntity user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return Collections.emptyList();
        }
        return moodRepository.findAllByUser(user);
    }

    public Mood saveMood(MoodRequestDTO moodRequestDTO) {
        UserEntity createdBy = userRepository.findById(moodRequestDTO.userId()).get();

        Mood newMood = Mood
                .builder()
                .moodRate(moodRequestDTO.moodRate())
                .moodDescription(moodRequestDTO.moodDescription())
                .moodMusic(moodRequestDTO.moodMusic())
                .moodPicture(moodRequestDTO.moodPicture())
                .user(createdBy)
                .created(LocalDate.now())
                .moodDate(LocalDate.now())
                .build();

        System.out.println(createdBy.getId());

        return moodRepository.save(newMood);
    }

    public boolean isPostedToday(LocalDate localDate, Long userId) {
        return moodRepository.findAll()
                .stream()
                .filter(e -> e.getMoodDate().equals(localDate))
                .filter(m -> m.getUser().getId().equals(userId)).toList().size() > 0;
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

    public void deleteMood(Long id) {
        Mood moodToDelete = moodRepository.findAll()
                .stream()
                .filter(m -> (m.getId()).equals(id))
                .findFirst()
                .orElseThrow(() -> new NoSuchElementException("No mood with this id"));
        moodRepository.delete(moodToDelete);
    }
}

