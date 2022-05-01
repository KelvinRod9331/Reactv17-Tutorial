import { useState, useEffect } from "react";

const useFetch = (url) => {
  //The name of the function must start with the word 'use' in order to use it as a custom hook
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController(); //This interface represents a controller object that allows you to abort one or more Web requests as and when desired.

    fetch(url, { signal: abortCont.signal }) //abortCont.signal Returns an AbortSignal object instance, which can be used to communicate with, or to abort, a DOM request.
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for the resource");
        }

        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setIsPending(false);
          setError(err.message);
        } else {
          console.log("Aborted");
        }
      });

    return () => abortCont.abort(); //This will abort
    // eslint-disable-next-line
  }, []);

  return { data, isPending, error };
};

export default useFetch;
