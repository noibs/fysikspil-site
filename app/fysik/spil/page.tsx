import UnityWebGL from "@/components/WebGLPlayer";
import styles from "./page.module.scss";
import DButton from "@/components/DButton";
import Link from "next/link";
import Watermark from "@/components/Watermark";

const UnityGamePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Watermark />
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href={"/fysik"}>
            <h1>
              Fysik med <span id="purple">Æliot</span>
            </h1>
          </Link>
        </div>
        <DButton
          icon="fa-regular fa-arrow-left"
          color="var(--purple)"
          text="Gå tilbage"
          link="/fysik"
        />
      </div>
      <h1 id="title">Fysikspil</h1>
      <div
        className={styles.gameContainer}
        style={{ width: "1000px", height: "700px" }}
      >
        <UnityWebGL />
        <div className={styles.warning}>
          <p>
            Spillet loader, vent venligst. <br /> Prøv at refreshe siden hvis
            det tager for lang tid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnityGamePage;
