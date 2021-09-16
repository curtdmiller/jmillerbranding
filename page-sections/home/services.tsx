import styles from "./services.module.css";

export default function Services() {
  return (
    <section className={styles.root}>
      <div className={styles.top}>
        <h2>Creative Services</h2>
        <p>
          I love adding value at all points in the creative process for brands.
          From creating the brand from scratch to taking an established brand
          and moving it forward with great creative work.
        </p>
      </div>
      <dl className={styles.bottom}>
        <dt>Branding and Brand Architecture</dt>
        <dd>
          Discover how to connect with your customer and build a brand that
          keeps them coming back. If your organization has multiple brands,
          craft a brand architecture that optimizes them in the marketplace.
        </dd>
        <dt>Creative Direction and Strategy</dt>
        <dd>
          If you’re trying to implement a brand strategy, refresh your website,
          or need another strategic mind, let me lend my expertise and
          experience to the task.
        </dd>
        <dt>Company and Product Naming</dt>
        <dd>
          More than a brainstorm, I follow an in-depth naming process to deliver
          compelling, market-ready names.
        </dd>
        <dt>Video Concepts and Scripting</dt>
        <dd>
          With a depth of experience in concept creation and scripting,
          especially for Bay Area tech startups, I can be a valuable part of
          your video team.
        </dd>
        <dt>Copywriting</dt>
        <dd>
          Websites to white papers, press releases to product pages, I craft
          thoughtful writing that’s as strong as it is strategic.
        </dd>
      </dl>
    </section>
  );
}
