import React from "react";
import PropTypes from "prop-types";
// import "./AnswerChoice.css";

const AnswerChoice = ({
  answerChoice,
  onAnswerChoiceClick,
  selectedAnswer,
}) => {
  const isChecked = selectedAnswer === answerChoice;

  return (
    <div className="answer-div">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onAnswerChoiceClick(answerChoice)}
        />
        <span>{answerChoice}</span>
      </label>
    </div>
  );
};

AnswerChoice.propTypes = {
  answerChoice: PropTypes.string.isRequired,
  onAnswerChoiceClick: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
};

export default AnswerChoice;
