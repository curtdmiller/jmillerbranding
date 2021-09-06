import Testimonial, { TestimonialProps } from "../../components/testimonial";
import styles from "./testimonials.module.css";
import { useEmblaCarousel } from "embla-carousel/react";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

const data: TestimonialProps[] = [
  {
    quote:
      "“Jeremy always goes deeper — diving into client research, concepts, and ideation to come up with killer direction and writing. He’s always super involved in the process, working as a true partner, not just a creative for hire.”",
    name: "Ashley Swanson",
    title: "Web and Graphic Designer",
  },
  {
    quote:
      "“Branding can feel like chaos, because at times, it IS chaos. Jeremy brings order to it all, creating meaning for your brand and customers. On video work, he goes well beyond scripts, delivering high-level vision and practical steps to create value for our clients. I can’t stress this enough: partnering with Jeremy creates incalculable ROI that’s more than worth the money spent.”",
    name: "Ben Sanders",
    title: "Executive Producer, BX Films",
  },
  {
    quote:
      "“Working with Jeremy on a project is gratifying on multiple levels. Not only can he craft a script with just the right voice and tone, but he is great to work with on a conceptual level. Concepts for video always come first, and he’s right there with me, helping determine the right direction to move in, before ever writing a word.”",
    name: "Dustin Maust",
    title: "Maust Creative",
  },
];

export default function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <section className={styles.root}>
      <h2 className="sr-only">Testimonials</h2>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {data.map((testimonial, i) => (
            <div className={styles.embla__slide} key={`testimonial-${i}`}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.embla__dotMenu}>
        {data.map((_, i) => (
          <button
            className={clsx(
              styles.embla__dot,
              i === selectedIndex && styles.embla__dotSelected
            )}
            key={`dotMenuItem-${i}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
