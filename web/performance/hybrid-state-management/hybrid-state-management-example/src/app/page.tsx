import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-4 h-full">
      <Link className="underline" href="/posts">
        Go to post list
      </Link>
      <Link className="underline" href="/auth">
        Go to auth route
      </Link>
    </div>
  );
}
