import { useEffect, useState } from "react";

const useFetch2 = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((res) =>
          setTimeout(() => {
            res("ok");
          }, 2000)
        );
        const response = await fetch(url);
        const newData = await response.json();
        setData(newData);
      } catch (err) {
        console.log(err);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
};
export default useFetch2;
