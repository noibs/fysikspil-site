import Image from "next/image";
import styles from "./page.module.scss";
import DButton from "@/components/DButton";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>
            Naturfag med <span id="accent">Æliot</span>
          </h1>
        </div>
        <DButton fontSize="1.1rem" padding="1rem 2rem" />
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.head}>
            <h1>
              Naturfag med <span id="accent">Æliot</span>
            </h1>
            <p>
              Naturfag med Æliot er en læringsplatform der styrker din interesse
              og evner inden for naturfag.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.cardContainer}>
              <Card
                title="Fysik"
                desc="Udforsk universets love og principper gennem spændende eksperimenter og interaktive lektioner"
                link="/fysik"
                color="var(--purple)"
                icon="fa-light fa-regular fa-atom-simple"
                img="/img/fysik.png"
              />
              <Card
                unavailable
                title="Kemi"
                desc="Udforsk universets love og principper gennem spændende eksperimenter og interaktive lektioner"
                link="/img/car.jpg"
                color="var(--blue)"
                icon="fa-light fa-flask-vial"
                img="/img/kemi.png"
              />
              <Card
                unavailable
                title="Biologi"
                desc="Udforsk universets love og principper gennem spændende eksperimenter og interaktive lektioner"
                link="/img/car.jpg"
                color="var(--green)"
                icon="fa-light fa-dna"
                iconRotate="-15deg"
                img="/img/biologi.png"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
