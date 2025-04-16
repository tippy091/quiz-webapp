package com.devlearn.quizonline.service;

import com.devlearn.quizonline.model.Question;
import org.springframework.data.crossstore.ChangeSetPersister;

import java.util.List;
import java.util.Optional;

/**
 * @author tippy091
 * @created 14/02/2025
 * @project quiz-online
 **/
public interface IQuestionService {
    Question createQuestion(Question question);
    List<Question> getAllQuestions();

    Optional<Question> getQuestionById(Long id); // Optional kiểm tra giáeatetrị có tồn tại hay không

    List<String> getAllSubjects();
    Question updateQuestion(Long id, Question question) throws ChangeSetPersister.NotFoundException;

    void deleteQuestion(Long id);

    List<Question> getQuestionForUser(Integer numOfQuestions, String subject);

}
