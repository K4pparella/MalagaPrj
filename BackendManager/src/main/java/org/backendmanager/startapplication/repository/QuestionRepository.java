package org.backendmanager.startapplication.repository;

import org.backendmanager.startapplication.domain.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends MongoRepository<Question, String> {

    @Query("{ '_category' : { $regex: '^?0$', $options: 'i' } }")
    List<Question> findAllByCategory(String category);

}
