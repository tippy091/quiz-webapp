package org.devlearn.server.repository;

import org.devlearn.server.entity.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * @author tippy091
 * @created 16/04/2025
 * @project server
 **/


@Repository
public interface AuthorityRepository extends JpaRepository<Authority, UUID> {
    Authority findByRoleCode(String teacher);
}
