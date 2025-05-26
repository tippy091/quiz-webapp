package org.devlearn.server.service;

import org.devlearn.server.dto.RegistrationRequest;
import org.devlearn.server.dto.RegistrationResponse;
import org.devlearn.server.dto.VerificationResponse;
import org.devlearn.server.entity.User;
import org.devlearn.server.helper.VerificationCodeGenerator;
import org.devlearn.server.repository.UserDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ServerErrorException;

import java.time.LocalDateTime;

/**
 * @author tippy091
 * @created 23/04/2025
 * @project server
 **/


@Service
public class RegistrationService {

    @Autowired
    private UserDetailRepository userDetailRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthorityService authorityService;

    @Autowired
    private EmailService emailService;

    public RegistrationResponse createUser(RegistrationRequest request) {
        User existing = userDetailRepository.findByEmail(request.getEmail());

        if(null != existing) {

            return RegistrationResponse.builder()
                    .code(400)
                    .message("Email already exist!")
                    .build();
        }

        try {
            User user = new User();
            user.setFirstName(request.getFirstName());
            user.setLastName(request.getLastName());
            user.setEmail(request.getEmail());
            user.setPhoneNumber(request.getPhoneNumber());
            user.setEnabled(false);
            user.setPassword(passwordEncoder.encode(request.getPassword()));

            String code = VerificationCodeGenerator.generateCode();

            user.setCreatedOn(LocalDateTime.now());
            user.setUpdatedOn(LocalDateTime.now());

            user.setVerificationCode(code);
            user.setAuthorities(authorityService.getUserAuthority());
            userDetailRepository.save(user);
            emailService.sendMail(user);

            return RegistrationResponse.builder()
                    .code(200)
                    .message("User created")
                    .build();
        } catch(Exception e) {
            System.out.println(e.getMessage());
            throw new ServerErrorException(e.getMessage(), e.getCause());
        }
    }

    public VerificationResponse verifyUser(String userName) {
        User user = userDetailRepository.findByEmail(userName);
        user.setEnabled(true);
        userDetailRepository.save(user);


        return VerificationResponse.builder()
                .userName(userName)
                .build();
    }
}
