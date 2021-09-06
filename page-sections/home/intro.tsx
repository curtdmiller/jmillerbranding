import Image from "next/image";
import Link from "next/link";
import headshot from "../../public/JeremyHeadshot.png";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.headshotContainer}>
          <Image src={headshot} className={styles.headshot} />
        </div>
        <section className={styles.introContent}>
          <h1 className={styles.headline}>Hi, I'm Jeremy</h1>
          <p className={styles.summary}>
            Brand Strategist,
            <br />
            Creative Director, Writer
          </p>
          <p className={styles.hook}>
            If you’re a marketer, business owner, or creator, let’s work
            together to take your brand, your creative, your ideas further.
          </p>
          <Link href="/contact">
            <a className={styles.contactLink}>LET'S CHAT</a>
          </Link>
        </section>
      </div>
    </>
  );
}
