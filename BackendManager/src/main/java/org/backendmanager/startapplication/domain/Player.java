package org.backendmanager.startapplication.domain;

import jakarta.persistence.*;
import lombok.Data;
import org.backendmanager.startapplication.enums.Category;

@Entity @Data
public class Player {

    @Id
    @SequenceGenerator(
        name = "player_id_sequence",
        sequenceName = "player_id_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "player_id_sequence"
    )
    private Long id;
    @Column(unique = true)
    private String username;
    @Enumerated(EnumType.STRING)
    private Category category;

    public Player(String username, Category category){
        setUsername(username);
        setCategory(category);
    }

    @Deprecated // JPA USE ONLY
    protected Player(){}
}
