import UnityWebGL from "@/components/WebGLPlayer";
import styles from "./page.module.scss";
import DButton from "@/components/DButton";

const UnityGamePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <h1>
            Fysik med <span id="purple">Æliot</span>
          </h1>
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
        style={{ width: "800px", height: "600px" }}
      >
        <UnityWebGL />
      </div>
    </div>
  );
};

export default UnityGamePage;
