"use client";

import { useAuthStore } from "@/providers/auth-store-provider";

export default function AuthPage() {
  const currentUser = useAuthStore((s) => s.currentUser);
  console.log(currentUser);

  return (
    <>
      <p>Auth page</p>
      <div>{currentUser?.name}</div>
    </>
  );
}
