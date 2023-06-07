package org.manager.util;

import jakarta.persistence.*;
import lombok.Data;

@Data @Entity
@Table(name = "users")
public class Guest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

}
