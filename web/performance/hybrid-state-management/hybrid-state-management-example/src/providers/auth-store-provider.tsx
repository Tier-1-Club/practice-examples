"use client";

import { AuthState, AuthStore, createAuthStore } from "@/stores/authStore";
import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useStore } from "zustand";

type AuthStoreApi = ReturnType<typeof createAuthStore>;

export type AuthProviderTypes = PropsWithChildren<{ initialState: AuthState }>;

export const AuthStoreContext = createContext<AuthStoreApi | undefined>(
  undefined
);

export const AuthStoreProvider = ({
  children,
  initialState,
}: AuthProviderTypes) => {
  const storeRef = useRef<AuthStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createAuthStore(initialState);
  }
  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export const useAuthStore = <T,>(selector: (store: AuthStore) => T): T => {
  const authStoreContext = useContext(AuthStoreContext);

  if (!authStoreContext) {
    throw new Error(`useAuthStore must be used within AuthStoreProvider`);
  }

  return useStore(authStoreContext, selector);
};
