package org.backendmanager.startapplication.domain;

import lombok.Data;
import org.backendmanager.startapplication.enums.Category;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;

@Document("QuestionsImage")
@Data
public class QuestionImage {

    @Id
    @Field("_id")
    private String id;
    @Field("_category")
    private Category category;
    @Field("_questions")
    private String question;
    @Field("_options")
    private ArrayList<String> optionList;
    @Field("_correctAnswer")
    private String answer;
    @Field("_explanation")
    private String explanation;
    @Field("_image-link")
    private String url;

}
