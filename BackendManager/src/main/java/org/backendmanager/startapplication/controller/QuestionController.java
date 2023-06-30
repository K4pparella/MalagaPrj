package org.backendmanager.startapplication.controller;

import org.backendmanager.startapplication.domain.Question;
import org.backendmanager.startapplication.repository.PlayerRepository;
import org.backendmanager.startapplication.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question")
@CrossOrigin
public class QuestionController {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping("/player/{username}-questions")
    public List<Question> findAllQuestionByUsernameCategory(@PathVariable("username") String username) {
        var category = playerRepository.findCategoryByUsername(username);
        if (category == null) return List.of();
        if (questionRepository.findAllByCategory(category.toString()) == null) return List.of();
        return questionRepository.findAllByCategory(category.toString());
    }

    @GetMapping("/{category}-questions")
    @Deprecated(forRemoval = true)
    public List<Question> findAllQuestionsByCategory(@PathVariable("category") String category) {
        return questionRepository.findAllByCategory(category.toUpperCase());
    }

    @GetMapping("/all-questions")
    @Deprecated(forRemoval = true)
    public List<Question> findAll() {
        return questionRepository.findAll();
    }
}
