package com.codecool.DailyVibe.database;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Mood {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer moodRate;
    private String moodDescription;
    private String moodMusic;
    private String moodPicture;
    private LocalDate created;
    private LocalDate moodDate;

}
