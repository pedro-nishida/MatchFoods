import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useFriendsStore = create((set) => ({
    friends: [], // para armazenar a lista de amigos
    loading: false,

    fetchFriends: async () => {
        set({ loading: true });
        try {
            const res = await axiosInstance.get("/friends");
            set({ friends: res.data });
        } catch (error) {
            toast.error(error.response.data.message || "Failed to fetch friends");
        } finally {
            set({ loading: false });
        }
    },

    addFriend: async (friendData) => {
        // Penso em colocar alguma logica pra adicionar amigo
    },

    removeFriend: async (friendId) => {
        // E aqui pra remover amigo.
    }
}));
