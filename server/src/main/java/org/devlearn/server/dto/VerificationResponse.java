package org.devlearn.server.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author tippy091
 * @created 13/05/2025
 * @project server
 **/

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VerificationResponse {
    private String userName;
}
