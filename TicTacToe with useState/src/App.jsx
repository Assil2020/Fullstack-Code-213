import React, { useState } from "react";
import "./App.css";
import Quiz from "./Componements/Quiz.jsx";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(20);
  const [isGameOver, setIsGameOver] = useState(false);

  const questions = [
    {
      question: "What is the largest animal in the world?",
      answerChoices: [
        "Blue whale",
        "African elephant",
        "Giant squid",
        "Giraffe",
      ],
      correctAnswer: "Blue whale",
    },
    {
      question: "What is the fastest animal on land?",
      answerChoices: ["Cheetah", "Pronghorn antelope", "Ostrich", "Lion"],
      correctAnswer: "Cheetah",
    },
    {
      question: "What is the highest flying bird?",
      answerChoices: [
        "Bar-headed goose",
        "Common crane",
        "Rüppell's vulture",
        "Andean condor",
      ],
      correctAnswer: "Rüppell's vulture",
    },
    {
      question: "Which gas do plants use to photosynthesize?",
      answerChoices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon dioxide",
    },
    {
      question: "Who wrote the play 'Macbeth'?",
      answerChoices: [
        "Christopher Marlowe",
        "Ben Jonson",
        "William Shakespeare",
        "Thomas Middleton",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the largest ocean on Earth?",
      answerChoices: [
        "Atlantic Ocean",
        "Arctic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      answerChoices: ["China", "Korea", "Japan", "Vietnam"],
      correctAnswer: "Japan",
    },
    {
      question: "What is the chemical symbol for water?",
      answerChoices: ["O", "W", "H2O", "H"],
      correctAnswer: "H2O",
    },
    {
      question: "Who painted the ceiling of the Sistine Chapel?",
      answerChoices: [
        "Leonardo da Vinci",
        "Michelangelo",
        "Raphael",
        "Donatello",
      ],
      correctAnswer: "Michelangelo",
    },
    {
      question: "What is the capital of Australia?",
      answerChoices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answerChoices: ["Jupiter", "Mars", "Venus", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who is the author of the book '1984'?",
      answerChoices: [
        "George Orwell",
        "Aldous Huxley",
        "Ray Bradbury",
        "Ernest Hemingway",
      ],
      correctAnswer: "George Orwell",
    },
    {
      question: "What is the currency of Germany?",
      answerChoices: ["Euro", "Pound", "Yen", "Dollar"],
      correctAnswer: "Euro",
    },
    {
      question: "Which country is home to the kangaroo?",
      answerChoices: ["Australia", "South Africa", "New Zealand", "Brazil"],
      correctAnswer: "Australia",
    },
    {
      question: "Who is known as the 'Father of Modern Physics'?",
      answerChoices: [
        "Isaac Newton",
        "Galileo Galilei",
        "Marie Curie",
        "Albert Einstein",
      ],
      correctAnswer: "Albert Einstein",
    },
    {
      question: "Which instrument is used to measure atmospheric pressure?",
      answerChoices: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
      correctAnswer: "Barometer",
    },
    {
      question: "What is the largest mammal on Earth?",
      answerChoices: [
        "African elephant",
        "Blue whale",
        "Giraffe",
        "Hippopotamus",
      ],
      correctAnswer: "Blue whale",
    },
    {
      question: "In which city is the famous 'Taj Mahal' located?",
      answerChoices: ["Mumbai", "New Delhi", "Agra", "Kolkata"],
      correctAnswer: "Agra",
    },
    {
      question:
        "Which country is known as the Land of million and a half martyrs'?",
      answerChoices: ["USA", "Algeria", "Russia", "Vietnam"],
      correctAnswer: "Algeria",
    },
    {
      question: "Who wrote the play 'Hamlet'?",
      answerChoices: [
        "William Shakespeare",
        "Christopher Marlowe",
        "John Milton",
        "Geoffrey Chaucer",
      ],
      correctAnswer: "William Shakespeare",
    },
  ];

  return (
    <div className="App">
      {!isGameOver ? (
        <Quiz
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          score={score}
          setScore={setScore}
          totalQuestions={totalQuestions}
          setTotalQuestions={setTotalQuestions}
          setIsGameOver={setIsGameOver}
        />
      ) : (
        <div className="resume-container">
          <h2>Quiz Over!</h2>
          <p>
            Your final score is {score} out of {totalQuestions}.
          </p>
          <button
            className="play-again-btn"
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
