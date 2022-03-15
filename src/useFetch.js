import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
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

    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
