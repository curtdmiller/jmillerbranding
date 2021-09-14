import styles from "./menu-button.module.css";
import { Dispatch, SetStateAction, useState } from "react";
import clsx from "clsx";

interface Props {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MenuButton({ menuIsOpen, setMenuIsOpen }: Props) {
  return (
    <button
      onClick={(event) => {
        setMenuIsOpen(!menuIsOpen);
      }}
      className={clsx(styles.root, menuIsOpen && styles.open)}
    >
      <span className="sr-only">Menu</span>
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </button>
  );
}
