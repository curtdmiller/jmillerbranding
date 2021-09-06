import styles from "./vr.module.css";

interface Props {
  height: number;
  strokeWidth: number;
  stroke: string;
}

/**
 * <vr />, vertical analogue to <hr />
 */
export default function VR({ height, stroke, strokeWidth }: Props) {
  return (
    <div className={styles.root}>
      <svg
        viewBox={`0 0 ${strokeWidth} ${height}`}
        width={strokeWidth}
        height={height}
      >
        <line
          strokeWidth={strokeWidth}
          x1="0"
          y1="0"
          x2="0"
          y2={height}
          stroke={stroke}
        />
      </svg>
    </div>
  );
}
