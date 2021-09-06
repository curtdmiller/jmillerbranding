import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" />
        </svg>
        <p className={styles.title}>J . Miller</p>
      </div>
      <div className={styles.menu}></div>
    </header>
  );
}
