package org.backendmanager.startapplication.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface QuestionImageRepository extends MongoRepository<org.backendmanager.startapplication.domain.QuestionImage, String> {

}
