package org.devlearn.server.service;

import org.devlearn.server.entity.Authority;
import org.devlearn.server.repository.AuthorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @author tippy091
 * @created 23/04/2025
 * @project server
 **/


@Service
public class AuthorityService {


    @Autowired
    private AuthorityRepository authorityRepository;


    public List<Authority> getUserAuthority() {
        List<Authority> authorities = new ArrayList<>();

        Authority authority = authorityRepository.findByRoleCode("TEACHER");
        authorities.add(authority);
        System.out.println(authorities);
        return authorities;
    }

    public Authority createAuthority(String role, String description) {
        Authority authority = Authority.builder().roleCode(role).roleDescription(description).build();
        return authorityRepository.save(authority);
    }
}
