"use client";

import { Link } from "@chakra-ui/next-js";
import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>Food</div>
      <div className={styles.right}>
        <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/menu'>Menu</Link>
          </li>
          <li>
            <Link href='/book'>Book a Table</Link>
          </li>
          <li>
            <Link href='/order'>Order</Link>
          </li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
