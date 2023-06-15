package org.backendmanager.startapplication.config;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry){
        var url = "http://localhost";
        registry.addMapping("/api/**")
                .allowedOrigins(url)
                .allowedHeaders("Content-type")
                .allowCredentials(true)
                .maxAge(3600);

        registry.addMapping("/login")
                .allowedOrigins(url)
                .allowedHeaders("Content-type")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
