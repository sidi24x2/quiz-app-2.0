import { useState, useEffect } from 'react';

function useLoading(url, initialVal = true) {
  const [loading, setLoading] = useState(initialVal);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      console.log(url);
      try {
        let res = await fetch(
          'https://api.github.com/users/sidi24x2/following'
        );
        console.log(res);
        let data = await res.json();

        setQuestions(data);
        console.log(data);
        setQuestions([]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [url]);
  return [loading, questions];
}
export default useLoading;
