package org.devlearn.server.controllers;

import org.devlearn.server.dto.UserDetailsDTO;
import org.devlearn.server.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * @author tippy091
 * @created 25/04/2025
 * @project server
 **/

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserDetailController {


    @Autowired
    UserDetailsService userDetailsService;
    @PostMapping("/profile")
    public ResponseEntity<UserDetailsDTO> getUserProfile(Principal principal) {
        User user = (User) userDetailsService.loadUserByUsername(principal.getName());

        if(null == user) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }


        UserDetailsDTO userDetailsDTO = UserDetailsDTO.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .phoneNumber(user.getPhoneNumber())
                .email(user.getEmail())
                .authorityList(user.getAuthorities().toArray()).build();

        return new ResponseEntity<>(userDetailsDTO, HttpStatus.OK);
    }
}
