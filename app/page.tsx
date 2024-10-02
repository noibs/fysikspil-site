import styles from "./page.module.scss";
import DButton from "@/components/DButton";
import Card from "@/components/Card";
import Watermark from "@/components/Watermark";

export default function Home() {
  return (
    <div className={styles.page}>
      <Watermark />
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>
            Naturfag med <span id="accent">Æliot</span>
          </h1>
        </div>
        <DButton
          link="/om-os"
          text="Om os"
          //padding="0.5rem 1rem"
          icon="fa-regular fa-users"
        />
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
                icon="fa-regular fa-hourglass"
                img="/img/fysik.png"
              />
              <Card
                unavailable
                title="Kemi"
                desc="Udforsk universets love og principper gennem spændende eksperimenter og interaktive lektioner"
                link="/img/car.jpg"
                color="var(--blue)"
                icon="fa-regular fa-flask-vial"
                img="/img/kemi.png"
              />
              <Card
                unavailable
                title="Biologi"
                desc="Udforsk universets love og principper gennem spændende eksperimenter og interaktive lektioner"
                link="/img/car.jpg"
                color="var(--green)"
                icon="fa-regular fa-dna"
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
