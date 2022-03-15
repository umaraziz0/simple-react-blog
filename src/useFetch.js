import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error('Something went wrong');

        return res.json();
      })
      .then((res) => {
        setError(null);
        setData(res);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
