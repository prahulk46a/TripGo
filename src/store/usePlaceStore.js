import axios from "axios";
import { create } from "zustand";

const BASE_URL = "http://localhost:3001/";

const useFetchStore = create((set, get) => ({
  requests: {},

  fetchData: async (endpoint, method = "GET") => {
    const url = `${BASE_URL}${endpoint}`;
    const { requests } = get();

    if (requests[url]) return requests[url];

    set((state) => ({
      requests: {
        ...state.requests,
        [url]: { loading: true, data: null, error: null },
      },
    }));
    try {
      const response = await axios({ url, method });

      set((state) => ({
        requests: {
          ...state.requests,
          [url]: { loading: false, data: response.data, error: null },
        },
      }));

      return { loading: false, data: response.data, error: null };
    } catch (error) {
      set((state) => ({
        requests: {
          ...state.requests,
          [url]: { loading: false, data: null, error: error.message },
        },
      }));
      return { loading: false, data: null, error: error.message };
    }
  },
}));

export default useFetchStore;
