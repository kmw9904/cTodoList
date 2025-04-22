import { Great_Vibes } from "next/font/google";
import Link from "next/link";
const greatVibes = Great_Vibes({ weight: "400", preload: false });

export default function Header() {
  return (
    <header className={greatVibes.className}>
      <div className="mt-6 p-2">
        <Link
          href="/"
          className="text-4xl font-bold text-center text-green-600 block tracking-wider"
        >
          To-Do List
        </Link>
      </div>
    </header>
  );
}
