package org.backendmanager.startapplication.repository;

import org.backendmanager.startapplication.domain.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends MongoRepository<Question, Integer> {
}
