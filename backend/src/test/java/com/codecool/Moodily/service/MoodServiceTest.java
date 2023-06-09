package com.codecool.Moodily.service;

import com.codecool.Moodily.database.models.Mood;
import com.codecool.Moodily.database.repository.MoodRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

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

}
