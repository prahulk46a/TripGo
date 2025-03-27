// src/store/useUserStore.js
import { create } from "zustand";

import UseFetch from "../hooks/UseFetch";

// Import your custom fetch hook
const UserStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  // 🔹 Login User
  login: async (email, password) => {
    set({ loading: true, error: null });
    const { fetchData } = UseFetch("/auth/login", "POST");

    try {
      const user = await fetchData({ email, password });
      set({ user, loading: false });
    } catch (err) {
      set({ error: err.message || "Login failed", loading: false });
    }
  },

  // 🔹 Logout User
  logout: () => {
    set({ user: null });
  },

  // 🔹 Fetch Current User
  fetchUser: async () => {
    set({ loading: true, error: null });
    const { fetchData } = UseFetch("/auth", "GET");

    try {
      const userData = await fetchData();
      set({ user: userData, loading: false });
    } catch (err) {
      set({ error: err.message || "Failed to fetch user", loading: false });
    }
  },
}));

export default UserStore;
