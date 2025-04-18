package com.devlearn.quizonline.repository;

import com.devlearn.quizonline.model.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @author tippy091
 * @created 14/02/2025
 * @project quiz-online
 **/
public interface QuestionRepository  extends JpaRepository<Question, Long> {

    @Query("SELECT DISTINCT q.subject FROM Question q")
    List<String> findDistinctSubject();
    Page<Question> findBySubject(String subject, Pageable pageable);
}
