import type { SiteProps } from "./@types";
import styles from "./App.module.css";

const Site = ({ description, name, url }: SiteProps) => {
  return (
    <section className={styles.page}>
      <section className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.counter}>
            <span className={styles.counterNumber}>01</span>
          </div>
          <h1 className={styles.title}>{name}</h1>

          <p className={styles.description}>{description}</p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Visiter
          </a>
        </aside>

        <section className={styles.previewSection}>
          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </div>

            <iframe
              className={styles.iframe}
              title="Website Preview"
              src={url}
              loading="lazy"
            />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Site;
