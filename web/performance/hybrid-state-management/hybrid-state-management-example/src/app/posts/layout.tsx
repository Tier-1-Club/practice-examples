import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1 className="py-4 font-semibold">Prefetch Post List</h1>
      <div>{children}</div>
    </div>
  );
}
