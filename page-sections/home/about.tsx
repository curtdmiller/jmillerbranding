import clsx from "clsx";
import VerticalLabel from "../../components/vertical-label";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={clsx(styles.root, "full-width")}>
      <section className={styles.top}>
        <VerticalLabel
          length={244}
          className={styles.verticalLabel}
          wordGapLength={80}
        />
        <h2>Your Brand Comes First</h2>
        <p>
          I look at your bigger story and who your customers are before I create
          anything. In my experience, this higher-level, strategic approach has
          always resulted in a better creative process and more effective
          results.
        </p>
      </section>
      <section className={styles.bottom}>
        <h2>Diverse experience, creative value</h2>
        <p>
          I have a degree in philosophy, spent years as a financial planner,
          went to Notre Dame Law School, was on the ground floor of new SaaS
          product and spent years at a full-service marketing agency doing work
          for regional, national, and global brands. Currently, I’m working from
          South Bend, IN for clients big and small across the U.S.
        </p>
        <p>
          I draw from all of these diverse experiences every day to deliver
          well-informed, creative work.
        </p>
      </section>
    </div>
  );
}
