package org.backendmanager.startapplication.controller;

import org.backendmanager.startapplication.domain.Player;
import org.backendmanager.startapplication.record.NewPlayerRequest;
import org.backendmanager.startapplication.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class PlayerLoginController {

    @Autowired
    private PlayerRepository repository;

    @PostMapping
    public void addPlayerIfNotExists(@RequestBody NewPlayerRequest playerRequest){
        var player = new Player(playerRequest.username(), playerRequest.category());
        if(repository.existPlayer(player)){
            // TODO: Mandare una get dove si comunica che il player esiste già nel DB
            return;
        }
        repository.save(player);
    }

    @DeleteMapping("{id}")
    public void deletePlayer(@PathVariable("id") Long id){
        repository.deleteById(id);
    }
}
