package com.codecool.Moodily.service;

import com.codecool.Moodily.database.models.Mood;
import com.codecool.Moodily.database.models.dto.MoodRequestDTO;
import com.codecool.Moodily.database.models.UserEntity;
import com.codecool.Moodily.database.repository.MoodRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MoodServiceTest {

    @Mock
    private MoodRepository moodRepository;

    @InjectMocks
    private MoodService moodService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllMoods() {
        List<Mood> expectedMoods = Arrays.asList(new Mood(), new Mood(), new Mood());
        when(moodRepository.findAll()).thenReturn(expectedMoods);

        List<Mood> actualMoods = moodService.getAllMoods();

        assertEquals(expectedMoods, actualMoods);
        verify(moodRepository, times(1)).findAll();
    }

    @Test
    void testSaveMood() {
        MoodRequestDTO moodRequestDTO = new MoodRequestDTO(5, "Test description", "picture.jpg", "music.mp3", LocalDate.now(), LocalDate.now(), new UserEntity());
        when(moodRepository.save(any(Mood.class))).thenReturn(new Mood());

        Mood savedMood = moodService.saveMood(moodRequestDTO);

        assertNotNull(savedMood);
        verify(moodRepository, times(1)).save(any(Mood.class));
    }

    @Test
    void testIsPostedToday_PostedToday_ReturnsTrue() {
        LocalDate today = LocalDate.now();
        Mood mood = new Mood();
        mood.setMoodDate(today);
        when(moodRepository.findAll()).thenReturn(Arrays.asList(mood));

        boolean isPostedToday = moodService.isPostedToday(today);

        assertTrue(isPostedToday);
        verify(moodRepository, times(1)).findAll();
    }

    @Test
    void testIsPostedToday_NotPostedToday_ReturnsFalse() {
        LocalDate today = LocalDate.now();
        LocalDate yesterday = today.minusDays(1);
        Mood mood = new Mood();
        mood.setMoodDate(yesterday);
        when(moodRepository.findAll()).thenReturn(Arrays.asList(mood));

        boolean isPostedToday = moodService.isPostedToday(today);

        assertFalse(isPostedToday);
        verify(moodRepository, times(1)).findAll();
    }

}
