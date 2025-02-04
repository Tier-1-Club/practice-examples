import {
  AuthProviderTypes,
  AuthStoreProvider,
} from "@/providers/auth-store-provider";

export default function AuthProvider({
  children,
  initialState,
}: AuthProviderTypes) {
  return (
    <AuthStoreProvider initialState={initialState}>
      {children}
    </AuthStoreProvider>
  );
}
