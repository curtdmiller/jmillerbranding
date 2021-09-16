import styles from "./clients.module.css";
import coffee from "../../public/coffee@2x.png";
import Image from "next/image";
import clsx from "clsx";

export default function Clients() {
  return (
    <div className={clsx(styles.root, "full-width")}>
      <div className={styles.inner}>
        <section className={styles.clients}>
          <h2>Who I've worked with</h2>
          <ul>
            <li>Lippert Components</li>
            <li>Lore Coffee Roasters</li>
            <li>BX Films</li>
            <li>Swift Landing</li>
            <li>Verso Ministries</li>
            <li>Days Corporation</li>
            <li>Frederiksen Film</li>
          </ul>
        </section>
        <div className={styles.imageContainer}>
          <Image src={coffee} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
