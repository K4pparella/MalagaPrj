package org.backendmanager.startapplication.domain;

import lombok.Getter;
import lombok.Setter;
import org.backendmanager.startapplication.enums.CategoryEnum;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("Categories")
@Getter
@Setter
public class Category {

    @Id
    @Field("_id")
    private String id;
    @Field("_category")
    private CategoryEnum categoryEnum;
    @Field("_description")
    private String description;

    public Category(CategoryEnum categoryEnum, String description) {
        this.categoryEnum = categoryEnum;
        this.description = description;
    }
}
