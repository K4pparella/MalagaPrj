package org.backendmanager.startapplication.repository;

import org.backendmanager.startapplication.domain.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query("SELECT COUNT(u) > 0 FROM Player u WHERE u.username = :username")
    boolean existPlayer(@Param("username") String username);

    @Query("SELECT SUM(p.points) FROM Player p")
    Integer getTotalPoints();

    @Query("SELECT p.points FROM Player p WHERE p.username = :username")
    Integer getTotalPointsOfPlayer(@Param("username") String username);
}
