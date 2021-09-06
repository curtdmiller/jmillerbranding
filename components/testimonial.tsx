import styles from "./testimonial.module.css";
import VR from "./vr";

export interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

export default function Testimonial({ quote, name, title }: TestimonialProps) {
  return (
    <figure className={styles.testimonial}>
      <blockquote>{quote}</blockquote>
      <VR height={20} strokeWidth={1} stroke="black" />
      <figcaption>
        <b>{name}</b>
        <br />
        {title}
      </figcaption>
    </figure>
  );
}
