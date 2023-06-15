package org.backendmanager.startapplication.controller;

import org.backendmanager.startapplication.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/statistics")
public class StaticsController {

    @Autowired
    private PlayerRepository repository;

    @GetMapping("/total-points")
    public Integer countTotalPoints(){
        return repository.getTotalPoints();
    }

    @GetMapping("/{username}-points")
    public Integer countTotalPointsOfPlayer(@PathVariable("username") String username){
        return repository.getTotalPointsOfPlayer(username);
    }
}
