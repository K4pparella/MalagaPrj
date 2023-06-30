package org.backendmanager.startapplication.repository;

import org.backendmanager.startapplication.domain.Player;
import org.backendmanager.startapplication.dto.PlayerDTO;
import org.backendmanager.startapplication.enums.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query("SELECT COUNT(u) > 0 FROM Player u WHERE u.username = :username")
    boolean existPlayer(@Param("username") String username);

    @Query("SELECT new org.backendmanager.startapplication.dto.PlayerDTO(p.username, p.points) FROM Player p")
    List<PlayerDTO> getTotalPoints();

    @Query("SELECT p.points FROM Player p WHERE p.username = :username")
    Integer getTotalPointsOfPlayer(@Param("username") String username);

    @Modifying
    @Query("UPDATE Player p SET p.points = p.points + :points WHERE p.username = :username")
    @Async
    void updatePointsByUsername(String username, Integer points);

    @Query("SELECT p.category FROM Player p WHERE p.username = :username")
    Category findCategoryByUsername(String username);

    @Query("SELECT p.id FROM Player p WHERE p.username = :username")
    Long findIdByUsername(String username);
}
