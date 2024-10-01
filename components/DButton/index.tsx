import Link from "next/link";
import React from "react";
import styles from "./DButton.module.scss";

const DButton: React.FC<{
  text?: string;
  color?: string;
  icon?: string;
  fontSize?: string;
  padding?: string;
  link?: string;
}> = ({
  text,
  color = "var(--accent)", // Default color if not provided
  icon,
  fontSize,
  padding,
  link,
}) => {
  return (
    <Link href={link || "#"} className={styles.container}>
      <button
        className={styles.button}
        style={
          {
            "--button-color": color,
            fontSize: fontSize,
            padding: padding,
          } as React.CSSProperties
        }
      >
        <i className={icon}></i> {text}
      </button>
    </Link>
  );
};

export default DButton;
