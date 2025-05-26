package org.devlearn.server.repository;

import org.devlearn.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author tippy091
 * @created 23/04/2025
 * @project server
 **/

@Repository
public interface UserDetailRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
