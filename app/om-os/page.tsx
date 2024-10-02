import Link from "next/link";
import styles from "./page.module.scss";
import DButton from "@/components/DButton";
import Card from "@/components/Card";
import Watermark from "@/components/Watermark";

export default function OmOs() {
  return (
    <div className={styles.page}>
      <Watermark />
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <h1>
              Naturfag med <span id="accent">Æliot</span>
            </h1>
          </Link>
        </div>
        <DButton
          icon="fa-regular fa-arrow-left"
          color="var(--accent)"
          text="Gå Tilbage"
          link="/"
        />
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.left}>
            <h1>
              Om Naturfag med <span id="accent">Æliot</span>
            </h1>
            <p>
              Vi er dedikeret til at guide og inspirere elever i folkeskolen til
              at træffe informerede beslutninger om deres fremtidige
              uddannelsesvej. <br /> <br />
              På vores platform tilbyder vi værdifuld information om
              naturfaglige uddannelser, med særligt fokus på HTX. Vores mål er
              at skabe en forståelse for de mange muligheder inden for
              naturfagene og vise, hvordan disse fag kan åbne døren til
              spændende karrierer inden for teknologi, forskning og miljø.
            </p>
          </div>
        </div>
        <div className={styles.creators}>
          <h1>Mød stifterne bag projektet</h1>
          <div className={styles.photos}>
            <Card
              color="#fff"
              title="John Bo"
              img="/img/john.jpg"
              width={300}
            />
            <Card
              width={300}
              color="#fff"
              title="Nina Olsen"
              img="/img/nina.jpg"
            />
            <Card
              width={300}
              color="#fff"
              title="Jørgen Nielsen"
              img="/img/joergen.jpg"
            />
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
