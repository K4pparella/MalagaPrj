package org.backendmanager.startapplication.controller;

import org.backendmanager.startapplication.domain.Player;
import org.backendmanager.startapplication.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api")
public class APIController {

    @Autowired
    private PlayerRepository repository;

    @GetMapping("/registered-players")
    public List<Player> getAllPlayers(){
        return repository.findAll();
    }
}
