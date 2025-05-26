package org.devlearn.server.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author tippy091
 * @created 23/04/2025
 * @project server
 **/


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationRequest {


    private String firstName;
    private String lastName;
    private String email;
    private CharSequence password;
    private String phoneNumber;
}
