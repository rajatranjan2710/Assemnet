import { create } from "zustand";
import axios from "axios";

export const useUserStore = create((set) => ({
  users: [],

  // Fetch all users
  fetchUsers: async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      set({ users: res.data.users });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },

  // Delete a user by ID
  deleteUser: async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/delete/${id}`);
      set((state) => ({
        users: state.users.filter((user) => user._id !== id),
      }));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  },

  // Update a user by ID
  updateUser: async (id, data) => {
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/users/update/${id}`,
        data
      );
      set((state) => ({
        users: state.users.map((user) =>
          user._id === id ? { ...user, ...res.data.user } : user
        ),
      }));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  },

  // Create a new user
  createUser: async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/create",
        data
      );

      set((state) => ({
        users: [res.data.user, ...state.users],
      }));
    } catch (error) {
      console.error("Error creating user:", error);
    }
  },
}));
