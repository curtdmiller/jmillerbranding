import styles from "./clients.module.css";
import coffee from "../../public/coffee.png";
import Image from "next/image";
import clsx from "clsx";

export default function Clients() {
  return (
    <div className={clsx(styles.root, "full-width")}>
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
      <div className={styles.coffee}>
        <Image src={coffee} />
      </div>
    </div>
  );
}
