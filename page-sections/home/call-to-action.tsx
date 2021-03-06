import clsx from "clsx";
import styles from "./call-to-action.module.css";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className={clsx(styles.root, "full-width")}>
      <Link href="mailto:jeremy@jmillerbranding.com">
        <a>
          Let&apos;s start a <span className="nowrap">conversation ➛</span>
        </a>
      </Link>
    </div>
  );
}
