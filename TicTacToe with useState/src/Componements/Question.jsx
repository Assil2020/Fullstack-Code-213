import React from "react";
import AnswerChoice from "./AnswerChoice";
import PropTypes from "prop-types";

const Question = ({
  question,
  answerChoices,
  onAnswerChoiceClick,
  selectedAnswer,
}) => {
  return (
    <div className="questions-div">
      <h2>{question}</h2>
      {answerChoices.map((answerChoice) => (
        <AnswerChoice
          key={answerChoice}
          answerChoice={answerChoice}
          onAnswerChoiceClick={onAnswerChoiceClick}
          selectedAnswer={selectedAnswer}
        />
      ))}
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answerChoices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onAnswerChoiceClick: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
};

export default Question;
