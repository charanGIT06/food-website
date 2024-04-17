import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <div className='navbar container w-11/12 mx-auto flex flex-row py-2'>
      <div className='left w-1/2'>
        <h1 className='px-5 py-4 font-bold hover:text-sky-500 active:underline'>
          <Link href={"/"}>Meghalaya</Link>
        </h1>
      </div>
      <div className='right w-1/2 space-around flex flex-row'>
        <ul className='list-none w-full flex flex-row justify-end'>
          {["/feed", "/search", "/posts", "/profile"].map((link) => {
            return (
              <NavLink path={link}>
                {link.substring(1, 2).toUpperCase() + link.substring(2)}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
