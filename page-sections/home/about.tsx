import clsx from "clsx";
import AboutLabel from "../../components/about-label";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={clsx(styles.root, "full-width")}>
      <AboutLabel />
      <section className={styles.top}>
        <div>
          <h2>Your Brand Comes First</h2>
        </div>
        <div>
          <p>
            I look at your bigger story and who your customers are before I
            create anything. In my experience, this higher-level, strategic
            approach has always resulted in a better creative process and more
            effective results.
          </p>
        </div>
      </section>
      <section className={styles.bottom}>
        <div className={styles.svgContainer}>
          <svg width="530" height="713" viewBox="0 0 530 713">
            <circle cx="50%" cy="195" r="125" fill="#2D4CB9" />
            <circle cx="50%" cy="515" r="125" fill="#FFD9D3" />
          </svg>
        </div>
        <div>
          <h2>Diverse experience, creative value</h2>
          <p>
            I have a degree in philosophy, spent years as a financial planner,
            went to Notre Dame Law School, was on the ground floor of new SaaS
            product and spent years at a full-service marketing agency doing
            work for regional, national, and global brands. Currently, I’m
            working from South Bend, IN for clients big and small across the
            U.S.
          </p>
          <p>
            I draw from all of these diverse experiences every day to deliver
            well-informed, creative work.
          </p>
        </div>
      </section>
    </div>
  );
}
