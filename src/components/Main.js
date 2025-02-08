import React from 'react';
import { useState, useEffect } from 'react';
import Loader from './Loader';
// import useLoading from './useLoading';
// import { questionsUrl } from './constants/url';
import Quiz from './Quiz';
import Footer from './Footer';

function Main() {
  const [quiz, setQuiz] = useState(false);
  const [loader, setLoader] = useState(false);
  // const [questions, setQuestions] = useState(null);

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     const res = await fetch('https://api.jsonserve.com/Uw5CrX');
  //     console.log(res);
  //     if (!res.ok) {
  //       // If response is not OK (status code is not 2xx), throw an error
  //       throw new Error(`HTTP error! status: ${res.status}`);
  //     }
  //     const contentType = res.headers.get('content-type');
  //     if (!contentType || !contentType.includes('application/json')) {
  //       throw new Error('Expected JSON, but received something else.');
  //     }

  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   fetchQuestions();
  // });

  let handleClick = () => {
    setLoader(true);
    setQuiz(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };
  return (
    <>
      <center>
        {quiz ? (
          ''
        ) : (
          <button onClick={handleClick} className="start">
            Start Quiz
          </button>
        )}
      </center>

      {loader && <Loader />}

      {quiz && !loader ? (
        <>
          <Quiz /> <Footer />
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default Main;
