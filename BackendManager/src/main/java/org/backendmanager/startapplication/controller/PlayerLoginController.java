package org.backendmanager.startapplication.controller;

import org.backendmanager.startapplication.domain.Player;
import org.backendmanager.startapplication.record.NewPlayerRequest;
import org.backendmanager.startapplication.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class PlayerLoginController {

    @Autowired
    private PlayerRepository repository;

    @PostMapping
    public ResponseEntity<Player> addPlayerIfNotExists(@RequestBody NewPlayerRequest playerRequest){
        if(repository.existPlayer(playerRequest.username())){
            // Sending CONFLICT: <player> already exists in database and it's UNIQUE
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        repository.save(new Player(playerRequest.username(), playerRequest.category(), 0));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public void deletePlayer(@PathVariable("id") Long id){
        repository.deleteById(id);
    }
}
