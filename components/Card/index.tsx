import React from "react";
import styles from "./card.module.scss";
import DButton from "../DButton";
import Image from "next/image";

const Card: React.FC<{
  title: string;
  desc: string;
  link: string;
  color: string;
  icon: string;
  img?: string;
  iconRotate?: string;
  unavailable?: boolean;
}> = ({
  title,
  desc,
  color = "var(--accent)", // Default color if not provided
  icon,
  link,
  img,
  iconRotate,
  unavailable,
}) => {
  return (
    <div className={styles.container}>
      {unavailable && (
        <div className={styles.unavailable}>
          <i className="fa-regular fa-lock"></i>
          <h4>Kommer snart...</h4>
        </div>
      )}
      {img && (
        <div className={styles.img}>
          <Image src={img} alt="sick ass car" width={500} height={500} />
        </div>
      )}
      <div className={styles.info}>
        <div className={styles.title}>
          <i className={icon} style={{ color: color, rotate: iconRotate }} />
          <h1
            className={styles.title}
            style={{ "--button-color": color } as React.CSSProperties}
          >
            {title}
          </h1>
        </div>
        <p className={styles.desc}>{desc}</p>
        <DButton
          fontSize="1rem"
          text="Se mere"
          color={color}
          icon="fa-regular fa-book"
          link={link}
        />
      </div>
    </div>
  );
};

export default Card;
