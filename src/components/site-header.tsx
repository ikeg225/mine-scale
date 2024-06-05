import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="container md:px-14 bg-header top-0 z-40 w-full">
      <div className="md:container flex h-16 items-center space-x-4 justify-between">
        <Link href="/">
          <h1 className="font-semibold text-2xl">Minescale</h1>
        </Link>
        <Link href="/documentation">Docs</Link>
      </div>
    </header>
  );
}
