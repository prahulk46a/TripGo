import { create } from "zustand";

import UseFetch from "../hooks/UseFetch";

const usePlaceStore = create((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchTents: async () => {
    set({ loading: true, error: null });
    const { fetchData } = UseFetch("/tents", "GET");
    try {
      const tents = await fetchData();
      set({ data: tents, loading: false });
    } catch (err) {
      set({ error: err.message || "Failed to fetch Data", loading: false });
    }
  },
}));

export default usePlaceStore;
