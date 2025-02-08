import React, { useState, useEffect } from 'react';

import data from '../data.json';
import Loader from './Loader';
import Result from './Result';
import { ResultContext } from './contexts/ResultContext';

const correctMarks = Number(data.correct_answer_marks);
const negativeMarks = Number(data.negative_marks);

const title = data.title;
const topic = data.topic;
// const duration = data.duration;

function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [activeIndex, SetActiveIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [timeleft, setTimeLeft] = useState(30);

  useEffect(() => {
    setQuestions(data.questions);
  }, []);

  // Setting TimeOut
  // useEffect(() => {
  //   if (timeleft <= 0) {
  //     handleNext();
  //     return;
  //   }
  //   const timer = setTimeout(() => setTimeLeft(timeleft - 1), 1000);
  //   return () => clearTimeout(timer);
  // });

  if (!questions || questions.length === 0) return <Loader />;

  const correctAnswers = questions.map((question) => {
    const correctAnswer = question.options.find((answer) => answer.is_correct);
    return correctAnswer ? correctAnswer.description : null;
  });
  console.log(correctAnswers);
  if (activeIndex === questions.length) {
    return (
      <ResultContext
        value={{
          questions,
          correctAnswers,
          selectedAnswers,
          score,
        }}
      >
        <Result />
      </ResultContext>
    );
  }

  const acitveQuestion = questions[activeIndex];

  let handleNext = () => {
    if (selectedOption === correctOption) {
      setScore((prevScore) => prevScore + correctMarks);
    } else {
      setScore((prevScore) => prevScore - negativeMarks);
      setMistakes((prev) => prev + 1);
    }
    setSelectedAnswers((prevState) => [...prevState, selectedOption]);

    setLoading(true);

    setTimeout(() => {
      setCorrectOption(null);
      setSelectedOption(null);
      setLoading(false); // Hide Loader after question changes
    }, 500); // 1-second delay for smooth transition

    SetActiveIndex((prevIndex) => prevIndex + 1);
  };
  let handleChange = (value, option) => {
    if (value.is_correct) {
      setCorrectOption(option);
    }

    setSelectedOption(option);
  };

  return (
    <main>
      <center>
        <h2>{title}</h2>
        <h6>{topic}</h6>
      </center>

      <div className="questionContainer">
        <div class="flex">
          <div>Score 💪 : {score}</div>
          <div>{`${activeIndex + 1} of ${questions.length}`}</div>
          <div>Mistakes 😔 : {mistakes} </div>
        </div>
        <div className="progress-bar flex ">
          <div
            className="progress-bar-filled"
            style={{ width: `${(activeIndex / questions.length) * 100}%` }}
          ></div>
          <span>End</span>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <center>
            <h5>{acitveQuestion.description}</h5>
            <ul>
              {acitveQuestion.options.map((option) => (
                <label
                  htmlFor={`answer - ${option.id}`}
                  key={option.id}
                  className={
                    selectedOption === option.description ? 'correct' : ''
                  }
                >
                  <input
                    type="radio"
                    id={`answer - ${option.id}`}
                    checked={selectedOption === option.description}
                    onClick={() => handleChange(option, option.description)}
                  />
                  {option.description}
                </label>
              ))}
            </ul>
            <button onClick={handleNext} disabled={!selectedOption}>
              Next
            </button>
          </center>
        )}
      </div>
    </main>
  );
}

export default Quiz;
