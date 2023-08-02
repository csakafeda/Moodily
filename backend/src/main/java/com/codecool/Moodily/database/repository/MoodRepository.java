package com.codecool.Moodily.database.repository;

import com.codecool.Moodily.database.models.Mood;
import com.codecool.Moodily.database.models.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MoodRepository extends JpaRepository<Mood, Long> {
    List<Mood> findAllByUser(UserEntity user);
}
