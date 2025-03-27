import { useCallback, useEffect, useState } from "react";
// Import Zustand store

const UseFetch = (endpoint, method = "GET") => {
  const fetchDataFromStore = useFetchStore((state) => state.fetchData);
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState({ loading: true, data: null, error: null });

    const result = await fetchDataFromStore(endpoint, method);
    setState(result);
  }, [endpoint, method]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { fetchData, ...state };
};

export default UseFetch;
