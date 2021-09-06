import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <p>
        © {new Date().getFullYear()} J.MILLER ———{" "}
        <a href="https://www.linkedin.com/in/jeremypaulmiller/">LINKEDIN</a>
      </p>
    </footer>
  );
}
