import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "./menu-buttom";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <header className={styles.root}>
      <Link href="/">
        <a className={styles.logo}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </svg>
          <p className={styles.title}>J . Miller</p>
        </a>
      </Link>
      <div className={clsx(styles.menu, menuIsOpen && styles.open)}>
        <MenuButton menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <Link href="mailto:jeremy@jmillerbranding.com">
          <a className={styles.contact}>CONTACT</a>
        </Link>
      </div>
    </header>
  );
}
