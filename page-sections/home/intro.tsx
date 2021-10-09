import Image from "next/image";
import Link from "next/link";
import headshot from "../../public/JeremyHeadshot.png";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.headshotContainer}>
          <Image src={headshot} className={styles.headshot} alt="" />
        </div>
        <section className={styles.introContent}>
          <h1 className={styles.headline}>Hi, I&apos;m Jeremy</h1>
          <p className={styles.summary}>
            <span className={styles.summaryTop}>Brand Strategist, </span>
            Creative Director, Writer
          </p>
          <p className={styles.hook}>
            If you’re a marketer, business owner, or creator, let’s work
            together to take your brand, your creative, your ideas further.
          </p>
          <Link href="mailto:jeremy@jmillerbranding.com">
            <a className={styles.contactLink}>LET&apos;S CHAT</a>
          </Link>
        </section>
      </div>
    </>
  );
}
