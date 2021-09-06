import styles from "./vertical-label.module.css";
import clsx from "clsx";

interface Props {
  length: number;
  className: string;
  wordGapLength: number;
}

export default function VerticalLabel({
  length,
  className,
  wordGapLength,
}: Props) {
  const lineSegmentLength = (length - wordGapLength - 23) / 2;
  const dasharray = `${lineSegmentLength}, ${wordGapLength}, ${lineSegmentLength}`;
  return (
    <div className={clsx(styles.container, className)}>
      <svg viewBox={`0 0 23 ${length}`}>
        <line
          x1="11.5"
          y1="23"
          x2="11.5"
          y2={length}
          stroke="#2d4cb9"
          strokeDasharray={dasharray}
        />
        <text x="0" y="50%" dominantBaseline="middle" className={styles.text}>
          ABOUT
        </text>
        <circle cx="11.5" cy="11.5" r="11.5" fill="#f55915" />
      </svg>
    </div>
  );
}
