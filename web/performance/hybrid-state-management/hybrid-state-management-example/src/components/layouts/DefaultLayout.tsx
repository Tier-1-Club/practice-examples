import Link from "next/link";
import { PropsWithChildren } from "react";

const HEADER_HEIGHT = 50;

function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header
        style={{
          height: HEADER_HEIGHT,
        }}
        className="bg-white border border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
      >
        <nav className="flex justify-between items-center max-w-4xl mx-auto font-medium text-zinc-600 text-lg">
          <Link href={"/"}>Home</Link>
          <div>
            <Link href={"/posts"}>Posts</Link>
          </div>
        </nav>
      </header>
      <main
        className="px-4 lg:px-6 h-full"
        style={{
          minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
          height: 1,
        }}
      >
        {children}
      </main>
    </>
  );
}

export default DefaultLayout;
