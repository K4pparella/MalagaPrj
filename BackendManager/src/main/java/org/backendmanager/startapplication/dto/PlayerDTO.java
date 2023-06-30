package org.backendmanager.startapplication.dto;

import lombok.Data;

@Data
public class PlayerDTO {

    private String username;
    private Integer points;

    public PlayerDTO(String username, Integer points) {
        this.username = username;
        this.points = points;
    }
}
