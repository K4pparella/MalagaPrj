package org.backendmanager.startapplication.controller;

import org.backendmanager.startapplication.domain.Player;
import org.backendmanager.startapplication.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class APIController {

    @Autowired
    private PlayerRepository playerRepository;

    @DeleteMapping("/delete/{username}")
    public void deletePlayer(@PathVariable("username") String username) {
        var id = playerRepository.findIdByUsername(username);
        playerRepository.deleteById(id);
    }

    @GetMapping("/registered-players")
    @Deprecated(forRemoval = true)
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }
}
