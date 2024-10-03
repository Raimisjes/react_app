// useUserStore.js
import { create } from 'zustand';

const useUserStore = create((set) => ({
  // Initial values
  userEmail: '',
  userStatus: '',

  // Actions to update fields
  setUserEmail: (userEmail) => set(() => ({ userEmail })),
  setUserStatus: (userStatus) => set(() => ({ userStatus })),

  logout: () => set(() => {
    return {
      userEmail: '',
      userStatus: '',
    };
  }),

}));

export default useUserStore;
