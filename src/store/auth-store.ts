import { AuthState } from '@/types';
import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

const useUserStore = create<AuthState>()(
  persist<AuthState>(
    (set) => ({
      user: undefined,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
    } as PersistOptions<AuthState>
  )
);

export default useUserStore;
