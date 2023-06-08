package org.backendmanager.startapplication.repository;

import org.backendmanager.startapplication.domain.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query("SELECT COUNT(u) > 0 FROM Player u WHERE u.username = :username")
    boolean existPlayer(Player player);
}
