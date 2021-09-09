import axios from 'axios';
import { useEffect, useState } from 'react';

const host = 'https://restcountries.eu/rest/v2';

function useGetAllCountries() {
  const [result, setResult] = useState({ error: null, data: null, loading: true });

  useEffect(async () => {
    try {
      const response = await axios.get(host.concat('/all'));

      if (response.status === 200) {
        setResult({ error: null, data: response.data });
      } else {
        console.error(`API responded with an error: ${response.status}`);
        setResult({ error: response.statusText, data: null });
      }
    } catch (error) {
      console.error(error);
      setResult({ error: error, data: null });
    }
  }, []);

  return result;
}

export default useGetAllCountries;
