package org.backendmanager.startapplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan("org.backendmanager.startapplication.repository")
@ComponentScan("org.backendmanager.startapplication.controller")
@EnableJpaRepositories
@EnableMongoRepositories
public class BackendManagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendManagerApplication.class, args);
    }

}
