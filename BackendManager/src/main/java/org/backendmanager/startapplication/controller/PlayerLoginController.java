package org.backendmanager.startapplication.controller;

import org.backendmanager.startapplication.domain.Player;
import org.backendmanager.startapplication.record.NewPlayerRequest;
import org.backendmanager.startapplication.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class PlayerLoginController {

    @Autowired
    private PlayerRepository repository;

    @PostMapping
    @Async
    public void addPlayerIfNotExists(@RequestBody NewPlayerRequest playerRequest) {
        if (repository.existPlayer(playerRequest.username())) {
            // Sending CONFLICT: <player> already exists in database and it's UNIQUE
            new ResponseEntity<>(HttpStatus.CONFLICT);
            return;
        }
        repository.save(new Player(playerRequest.username(), playerRequest.category(), playerRequest.points()));
        new ResponseEntity<>(HttpStatus.OK);
    }

}
