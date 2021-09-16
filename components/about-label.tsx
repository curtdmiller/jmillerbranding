import styles from "./about-label.module.css";

export default function AboutLabel() {
  return (
    <div className={styles.container}>
      <svg viewBox={`0 0 23 244`} className={styles.small}>
        <line
          x1="11.5"
          y1="23"
          x2="11.5"
          y2="244"
          stroke="#2d4cb9"
          strokeDasharray="70.5, 80, 70.5"
        ></line>
        <g className={styles.textContainer}>
          <text x="0" y="0" dominantBaseline="middle" className={styles.text}>
            ABOUT
          </text>
        </g>
        <circle cx="11.5" cy="11.5" r="11.5" fill="#f55915" />
      </svg>
      <svg viewBox={`0 0 23 1140`} className={styles.large}>
        <line
          x1="11.5"
          y1="23"
          x2="11.5"
          y2="1140"
          stroke="#2d4cb9"
          strokeDasharray="345, 120, 673"
        ></line>
        <g className={styles.textContainer}>
          <text x="0" y="0" dominantBaseline="middle" className={styles.text}>
            ABOUT
          </text>
        </g>
        <circle cx="11.5" cy="11.5" r="11.5" fill="#f55915" />
      </svg>
    </div>
  );
}
