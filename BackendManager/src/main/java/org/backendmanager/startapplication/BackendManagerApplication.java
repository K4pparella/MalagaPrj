package org.backendmanager.startapplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("org.backendmanager.startapplication.repository")
@ComponentScan("org.backendmanager.startapplication.controller")
public class BackendManagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendManagerApplication.class, args);
    }

}
