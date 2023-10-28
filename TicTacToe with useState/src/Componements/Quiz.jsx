import React, { useState } from "react";
import PropTypes from "prop-types";
import Question from "./Question";

const Quiz = ({
  questions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  selectedAnswer,
  setSelectedAnswer,
  score,
  setScore,
  totalQuestions,
  setIsGameOver,
}) => {
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  const handleAnswerChoiceClick = (answerChoice) => {
    setSelectedAnswer(answerChoice);
    setIsAnswerSelected(true);
  };

  const handleSubmitClick = () => {
    if (!isAnswerSelected) {
      alert("Please select an answer before proceeding.");
      return;
    }

    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswerSelected(false);
    } else {
      setIsGameOver(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-div">
      <h1>Question {currentQuestionIndex + 1}</h1>
      <Question
        question={currentQuestion.question}
        answerChoices={currentQuestion.answerChoices}
        onAnswerChoiceClick={handleAnswerChoiceClick}
        selectedAnswer={selectedAnswer}
      />
      <button className="next-btn" onClick={handleSubmitClick}>
        {currentQuestionIndex < totalQuestions - 1 ? "Next Question" : "Finish"}
      </button>
      <p>Score: {score}</p>
    </div>
  );
};

Quiz.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answerChoices: PropTypes.arrayOf(PropTypes.string).isRequired,
      correctAnswer: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  setCurrentQuestionIndex: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
  setSelectedAnswer: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  setTotalQuestions: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
};

export default Quiz;
