import { useState, useEffect } from "react";

// Custom hook for fetching data from an API
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(`Fetch error: ${error.message}`);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup: abort fetch if component unmounts or url changes
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
