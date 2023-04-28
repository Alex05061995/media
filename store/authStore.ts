import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BASE_URL } from '../utils';

interface IUser {
  _id: string,
  _type: string,
  userName: string,
  image: string
}

const authStore = (set: any) => ({
  userProfile: { _id: '',
    _type: '',
    userName: '',
    image: ''},
  allUsers: [],

  addUser: (user: IUser) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
  fetchAllUsers: async () => {
    const response = await axios.get(`/api/users`);
    set({ allUsers: response.data });
  },
})

const useAuthStore = create(
  persist(authStore, {
    name: 'auth'
  })
)



export default useAuthStore;