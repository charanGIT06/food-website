"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ path, children }) {
  const addr = usePathname();

  return (
    <Link
      href={path}
      className={`px-5 py-4 me-1 rounded-full hover:bg-sky-200 active:ring-2 ${
        addr.substring(1) === children.toLowerCase()
          ? "text-sky-500 font-bold"
          : ""
      }`}
    >
      {children}
    </Link>
  );
}
