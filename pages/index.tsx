import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Intro from "../page-sections/home/intro";
import Partner from "../page-sections/home/partner";
import About from "../page-sections/home/about";
import Testimonials from "../page-sections/home/testimonials";
import Clients from "../page-sections/home/clients";
import Services from "../page-sections/home/services";
import CallToAction from "../page-sections/home/call-to-action";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <hr />
      <article className={styles.content}>
        <Partner />
        <About />
        <Testimonials />
        <Clients />
        <Services />
        <CallToAction />
      </article>
    </>
  );
};

export default Home;
