import { useContext } from 'react';
import { ResultContext } from './contexts/ResultContext';

function Result() {
  let result = useContext(ResultContext);
  let { questions, correctAnswers, selectedAnswers, score } = result;
  return (
    <>
      <table class="result">
        <thead>
          <tr>
            <td>questions</td>
            <td>Correct Answers</td>
            <td>Your Answers</td>
            <td>Right / Wrong</td>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, i) => (
            <tr>
              <td>{question.description}</td>
              <td>{correctAnswers[i]}</td>
              <td>{selectedAnswers[i]}</td>
              <td
                className={
                  correctAnswers[i] !== selectedAnswers[i]
                    ? 'wrong-answer'
                    : 'right-answer'
                }
              >
                {correctAnswers[i] === selectedAnswers[i] ? '✔️' : '❌'}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="final-result">
            <td colSpan={3}>Total Score</td>
            <td className="final-score">{score}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default Result;
