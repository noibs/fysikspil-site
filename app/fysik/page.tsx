import Link from "next/link";
import styles from "./page.module.scss";
import DButton from "@/components/DButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <h1>
              Fysik med <span id="accent">Æliot</span>
            </h1>
          </Link>
        </div>
        <DButton
          icon="fa-regular fa-play"
          color="#bd93f9"
          text="Åben Spil"
          link="/fysik/spil"
        />
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.left}>
            <h1>
              Fysik med <span id="accent">Æliot</span>
            </h1>
            <p>
              Fysik med Æliot er en læringsplatform der styrker din interesse og
              evner inden for fysikfaget.
            </p>
            <DButton
              icon="fa-regular fa-play"
              color="#bd93f9"
              text="Åben Spil"
              link="/fysik/spil"
            />
          </div>
          <div className={styles.right}>
            <div className={styles.shapes}>
              <i className={styles.bulb + " fa-light fa-lightbulb-on"} />
              <i className={styles.battery + " fa-light fa-battery-bolt"} />
              <i className={styles.atom + " fa-light fa-atom"} />
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
