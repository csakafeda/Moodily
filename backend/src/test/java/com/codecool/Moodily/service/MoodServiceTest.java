package com.codecool.Moodily.service;

import com.codecool.Moodily.database.models.Mood;
import com.codecool.Moodily.database.models.dto.MoodRequestDTO;
import com.codecool.Moodily.database.models.UserEntity;
import com.codecool.Moodily.database.repository.MoodRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class MoodServiceTest {

    @Mock
    private MoodRepository moodRepository;

    @InjectMocks
    private MoodService moodService;

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
        when(moodRepository.findAll()).thenReturn(Collections.singletonList(mood));

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
        when(moodRepository.findAll()).thenReturn(Collections.singletonList(mood));

        boolean isPostedToday = moodService.isPostedToday(today);

        assertFalse(isPostedToday);
        verify(moodRepository, times(1)).findAll();
    }

    @Test
    void testGetTodaysMood_PostedToday_ReturnsMood() {
        LocalDate today = LocalDate.now();
        Mood expectedMood = new Mood();
        expectedMood.setMoodDate(today);
        when(moodRepository.findAll()).thenReturn(Collections.singletonList(expectedMood));

        Mood actualMood = moodService.getTodaysMood();

        assertEquals(expectedMood, actualMood);
        verify(moodRepository, times(1)).findAll();
    }

    @Test
    void testGetTodaysMood_NotPostedToday_ThrowsNoSuchElementException() {
        LocalDate today = LocalDate.now();
        LocalDate yesterday = today.minusDays(1);
        Mood mood = new Mood();
        mood.setMoodDate(yesterday);
        when(moodRepository.findAll()).thenReturn(Collections.singletonList(mood));

        assertThrows(NoSuchElementException.class, () -> moodService.getTodaysMood());
        verify(moodRepository, times(1)).findAll();
    }

}
