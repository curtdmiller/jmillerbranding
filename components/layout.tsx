import Head from "next/head";
import Footer from "./footer";
import styles from "./layout.module.css";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>J.Miller Branding</title>
        <meta
          name="description"
          content="Brand Strategist, Creative Director, Writer"
        />
        <link rel="icon" href="/cropped-jmb-favicon-32x32.png" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/jgq7uba.css"
        ></link>
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
