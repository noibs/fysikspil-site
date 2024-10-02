"use client";
import React, { useEffect, useState } from "react";
import styles from "./watermark.module.scss";

const Watermark = () => {
  const [coordinates, setCoordinates] = useState<
    { x: number; y: number; rotate: number }[]
  >([]);

  useEffect(() => {
    const getRandomXCoordinate = () => {
      const screenWidth = window.innerWidth;
      const randomX = Math.floor(Math.random() * screenWidth);
      return randomX;
    };

    const getRandomYCoordinate = () => {
      const screenHeight = window.innerHeight;
      const randomY = Math.floor(Math.random() * screenHeight);
      return randomY;
    };

    const newCoordinates = icons.map(() => ({
      x: getRandomXCoordinate(),
      y: getRandomYCoordinate(),
      rotate: Math.floor(Math.random() * 90) - 45,
    }));

    setCoordinates(newCoordinates);
  }, []);

  const icons = [
    { className: styles.vial + " fa-solid fa-vial" },
    { className: styles.flaskVial + " fa-solid fa-flask-vial" },
    { className: styles.battery + " fa-solid fa-battery-bolt" },
    { className: styles.dna + " fa-solid fa-dna" },
    { className: styles.microscope + " fa-solid fa-microscope" },
    { className: styles.skeleton + " fa-solid fa-skeleton" },
    { className: styles.bulb + " fa-solid fa-lightbulb-on" },
  ];

  return (
    <div className={styles.container}>
      {icons.map((icon, index) => (
        <i
          key={index}
          className={icon.className}
          style={{
            left: `${coordinates[index]?.x}px`,
            bottom: `${coordinates[index]?.y}px`,
            rotate: `${coordinates[index]?.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default Watermark;
