package com.codecool.Moodily.database.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private LocalDate modified;
    private LocalDate moodDate;
    @ManyToOne
    @JsonIgnore
    private UserEntity user;

}
