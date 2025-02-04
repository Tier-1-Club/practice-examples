import { getCurrentUser } from "@/libs/api/auth";
import { PropsWithChildren, Suspense } from "react";
import AuthProvider from "./provider";
import LoadingFallback from "./components/loading";

const pageData = async () => {
  return await getCurrentUser();
};

const AuthLayoutContent = async ({ children }: PropsWithChildren) => {
  const { data: currentUser } = await pageData();
  return <AuthProvider initialState={{ currentUser }}>{children}</AuthProvider>;
};

export default async function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AuthLayoutContent>{children}</AuthLayoutContent>
    </Suspense>
  );
}
