import { useEffect, useState } from "react";

export const useFetch = (URL:string) => {
  const [ data, setData ] = useState([]);
  const [ isLoading, setLoading ] = useState(false);
  const [ error, setError ] = useState('');

  async function fetchData(url:string) {
    try {
      setLoading(true);
      setError('');
      setData([]);

      const response = await fetch(url);
      const data = await response.json();
      setData(data)
      return data;
    } catch (error) {
      if(typeof error === 'string') {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  } 

  useEffect(() => {
    fetchData(URL);
  }, [URL])

  return { data, isLoading, error }
}