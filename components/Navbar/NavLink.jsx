"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ path, children }) {

	const addr = usePathname();

  return <Link href={path} className={ (addr.substring(1,) === children.toLowerCase() ? 'text-sky-500 font-bold' : '')}>{children}</Link>;
}
