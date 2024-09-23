import React, { useState } from "react";
import "./spin.css";

function Spin() {
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState("");
  const [showPrize, setShowPrize] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showWheelAgain, setShowWheelAgain] = useState(false);

  const prizes = ["Sachin Tendulkar", "MS Dhoni", "Virat Kohli", "Yuvraj Singh", "Kapil Dev", "Rohit Sharma", "Sunil Gavaskar", "Rahul Dravid"];
  const segments = prizes.length;

  const prizeSpecificQuestions = {
    "Sachin Tendulkar": [
      {
        question: "How many centuries did Sachin Tendulkar score in his career?",
        options: ["100", "50", "49", "200"],
        correctAnswer: "100",
      },
      {
        question: "In which year did Sachin Tendulkar retire from international cricket?",
        options: ["2011", "2012", "2013", "2014"],
        correctAnswer: "2013",
      },
    ],
    "MS Dhoni": [
      {
        question: "How many World Cups has MS Dhoni won as captain?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
      },
      {
        question: "Which IPL team does MS Dhoni captain?",
        options: ["Mumbai Indians", "Chennai Super Kings", "Delhi Capitals", "Royal Challengers Bangalore"],
        correctAnswer: "Chennai Super Kings",
      },
    ],
    "Virat Kohli": [
      {
        question: "What is the nickname of Virat Kohli?",
        options: ["Run Machine", "Hitman", "King Kohli", "Master Blaster"],
        correctAnswer: "King Kohli",
      },
      {
        question: "In which year did Virat Kohli win the ICC Cricketer of the Year award?",
        options: ["2017", "2018", "2019", "2020"],
        correctAnswer: "2018",
      },
    ],
    "Yuvraj Singh": [
      {
        question: "In which tournament did Yuvraj Singh hit 6 sixes in an over?",
        options: ["IPL", "World Cup", "T20 World Cup", "Asia Cup"],
        correctAnswer: "T20 World Cup",
      },
      {
        question: "Which year did Yuvraj Singh win the Player of the Tournament award in the ICC World Cup?",
        options: ["2007", "2011", "2015", "2003"],
        correctAnswer: "2011",
      },
    ],
    "Kapil Dev": [
      {
        question: "In which year did Kapil Dev lead India to its first World Cup victory?",
        options: ["1975", "1983", "1987", "1992"],
        correctAnswer: "1983",
      },
      {
        question: "How many wickets did Kapil Dev take in his international career?",
        options: ["434", "500", "600", "350"],
        correctAnswer: "434",
      },
    ],
    "Rohit Sharma": [
      {
        question: "How many double centuries has Rohit Sharma scored in ODIs?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
      },
      {
        question: "Which team did Rohit Sharma captain in the IPL?",
        options: ["Mumbai Indians", "Chennai Super Kings", "Delhi Capitals", "Sunrisers Hyderabad"],
        correctAnswer: "Mumbai Indians",
      },
    ],
    "Sunil Gavaskar": [
      {
        question: "How many Test centuries did Sunil Gavaskar score?",
        options: ["20", "30", "34", "40"],
        correctAnswer: "34",
      },
      {
        question: "Which team did Sunil Gavaskar captain?",
        options: ["India", "Pakistan", "Sri Lanka", "Australia"],
        correctAnswer: "India",
      },
    ],
    "Rahul Dravid": [
      {
        question: "What is Rahul Dravid's nickname?",
        options: ["The Wall", "The Run Machine", "Master Blaster", "Captain Cool"],
        correctAnswer: "The Wall",
      },
      {
        question: "In which year did Rahul Dravid retire from international cricket?",
        options: ["2010", "2011", "2012", "2013"],
        correctAnswer: "2012",
      },
    ],
  };

  const spinWheel = () => {
    if (!spinning) {
      setSpinning(true);
      setQuizComplete(false);
      setShowQuiz(false);
      setShowPrize(false);
      setShowWheelAgain(false);

      const newAngle = Math.floor(3600 + Math.random() * 360);
      setAngle((prevAngle) => prevAngle + newAngle);

      setTimeout(() => {
        const finalAngle = newAngle % 360;
        const segmentAngle = 360 / segments;
        const selectedIndex = Math.floor(finalAngle / segmentAngle);
        const prize = prizes[segments - 1 - selectedIndex];
        setSelectedPrize(prize);

        setSpinning(false);
        setShowPrize(true);

        if (prizeSpecificQuestions[prize]) {
          setTimeout(() => setShowQuiz(true), 1000);
        } else {
          setShowWheelAgain(true);
        }
      }, 3000);
    }
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    if (answer === prizeSpecificQuestions[selectedPrize][currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Correct! 🎉");
    } else {
      setFeedback("Wrong! ❌");
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer("");
    setFeedback("");

    if (currentQuestionIndex === prizeSpecificQuestions[selectedPrize].length - 1) {
      setQuizComplete(true);
      setShowWheelAgain(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const resetGame = () => {
    setSelectedPrize("");
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setFeedback("");
    setShowPrize(false);
    setShowQuiz(false);
    setQuizComplete(false);
    setShowWheelAgain(false);
  };

    return (
      <div className="App">
        <div className="wheel-container">
        <h1>Cricket Frenzy Quiz!</h1>
          <div className="wheel" style={{ transform: `rotate(${angle}deg)` }}>
            {prizes.map((prize, index) => (
              <div key={index} className="segment">
                {prize}
              </div>
            ))}
          </div>
        </div>
  
        {showPrize && !spinning && (
          <div className="prize-display">
            <h1>Get Ready to Spin!</h1>
            <p>Your Topic is: <strong>{selectedPrize}</strong></p>
          </div>
        )}
  
        {!spinning && showQuiz && !quizComplete && (
          <div className="quiz-container">
\
            <h3>
              Question {currentQuestionIndex + 1}/{prizeSpecificQuestions[selectedPrize].length}
            </h3>
            <p style={{ fontSize: 18, fontWeight: 500 }}>
              {prizeSpecificQuestions[selectedPrize][currentQuestionIndex].question}
            </p>
            <ul>
              {prizeSpecificQuestions[selectedPrize][currentQuestionIndex].options.map((option, index) => (
                <li key={index}>
                  <button
                    className="btn2"
                    onClick={() => handleAnswerSelection(option)}
                    disabled={!!selectedAnswer}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            {feedback && <p style={{ fontSize: 18, color: "green" }}>{feedback}</p>}
            {selectedAnswer && <button className="btn" onClick={handleNextQuestion}>Next Question</button>}
          </div>
        )}
  
        {quizComplete && (
          <div className="quiz-complete">
            <h1>Quiz Complete!</h1>
            <p style={{ fontSize: 18, fontWeight: 500 }}>
              You got {score} out of {prizeSpecificQuestions[selectedPrize].length} correct!
            </p>
          </div>
        )}
  
        {!spinning && (showQuiz || quizComplete || showPrize) && (
          <button className="btn" onClick={resetGame}>Play Again</button>
        )}
  
        {!spinning && !selectedPrize && !showQuiz && !quizComplete && !showPrize && (
          <button onClick={spinWheel} disabled={spinning} className="btn">
            {spinning ? "Spinning..." : "Spin the Wheel"}
          </button>
        )}
      </div>
    );
  }
  
  export default Spin;