import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950 px-6 py-5 text-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-400">
          Saleh Ntege
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="hover:text-green-400">
            Home
          </Link>

          <Link href="/about" className="hover:text-green-400">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
