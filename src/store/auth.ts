import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type AuthStore = {
    token?: string;
    setToken: (token: string) => void;
};

const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            token: undefined,
            setToken: (token) => set({ token }),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export default useAuthStore;
