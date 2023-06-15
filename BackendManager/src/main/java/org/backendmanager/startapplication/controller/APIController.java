package org.backendmanager.startapplication.controller;

import org.backendmanager.startapplication.domain.Category;
import org.backendmanager.startapplication.domain.Player;
import org.backendmanager.startapplication.enums.CategoryEnum;
import org.backendmanager.startapplication.repository.CategoryRepository;
import org.backendmanager.startapplication.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class APIController {

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/registered-players")
    public List<Player> getAllPlayers(){
        return playerRepository.findAll();
    }

    @GetMapping("/ready-players")
    public Long getCountPlayers() {
        return playerRepository.count();
    }

    @DeleteMapping("/wipe-database")
    public void wipeDatabase(){
        playerRepository.deleteAll();
    }

    @GetMapping("/test")
    public void test(){
        System.out.println("test");
        categoryRepository.save(new Category(CategoryEnum.VIDEOGAMES, "ghhg"));
    }
}
