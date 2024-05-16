import { create } from "zustand";

import STORAGE_KEYS from "@/constants/storageKeys";


interface AuthStore {
    isLoggedIn : boolean
    setIsLoggedIn: (isLoggedInValue:boolean) => void
}

const useAuthStore = create<AuthStore>((set) => ({
	isLoggedIn: !!localStorage.getItem(STORAGE_KEYS.accessToken),
    setIsLoggedIn: (isLoggedInValue:boolean) => set(() => ({ isLoggedIn: isLoggedInValue })),
}));


export default useAuthStore