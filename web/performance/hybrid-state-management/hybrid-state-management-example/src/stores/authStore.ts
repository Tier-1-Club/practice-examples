import { CurrentUser } from "@/libs/types/dto/auth";
import { createStore } from "zustand";

export type AuthState = {
  currentUser: CurrentUser | null;
};

export type AuthActions = {
  setCurrentUser: (user: CurrentUser | null) => void;
};

export type AuthStore = AuthState & AuthActions;

export const defaultInitState: AuthState = {
  currentUser: null,
};

export const createAuthStore = (initState: AuthState) => {
  return createStore<AuthStore>()((set) => ({
    ...initState,
    setCurrentUser: () => set((state) => ({ currentUser: state.currentUser })),
  }));
};
