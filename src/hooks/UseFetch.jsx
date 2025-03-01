import axios from "axios";
import { useCallback, useState } from "react";

const BASE_URL = "http://localhost:3001/";

const UseFetch = (endpoint, method = "GET") => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        url: `${BASE_URL}${endpoint}`,
        method,
      });

      return response.data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [endpoint, method]);

  return { fetchData, loading, error };
};

export default UseFetch;
