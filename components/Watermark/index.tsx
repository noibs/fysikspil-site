"use client";
import React, { useEffect, useState } from "react";
import styles from "./watermark.module.scss";

const Watermark = ({ opacity }: { opacity?: number }) => {
  const [coordinates, setCoordinates] = useState<
    { x: number; y: number; rotate: number }[]
  >([]);

  const icons = [
    { className: styles.vial + " fa-solid fa-vial" },
    { className: styles.flaskVial + " fa-solid fa-flask-vial" },
    { className: styles.battery + " fa-solid fa-battery-bolt" },
    { className: styles.dna + " fa-solid fa-dna" },
    { className: styles.microscope + " fa-solid fa-microscope" },
    { className: styles.skeleton + " fa-solid fa-skeleton" },
    { className: styles.bulb + " fa-solid fa-lightbulb-on" },
    { className: styles.atom + " fa-solid fa-atom" },
    { className: styles.rocket + " fa-solid fa-rocket" },
    { className: styles.magnet + " fa-solid fa-magnet" },
    { className: styles.telescope + " fa-solid fa-telescope" },
    { className: styles.planet + " fa-solid fa-planet-ringed" },
    { className: styles.compass + " fa-solid fa-compass" },
  ];

  useEffect(() => {
    const iconSize = 250; // Assuming each icon is 50x50 pixels

    const getRandomCoordinate = (max: number) =>
      Math.floor(Math.random() * max);

    const isColliding = (
      x: number,
      y: number,
      coordinates: { x: number; y: number }[]
    ) => {
      return coordinates.some(
        (coord) =>
          Math.abs(coord.x - x) < iconSize && Math.abs(coord.y - y) < iconSize
      );
    };

    const generateNonCollidingCoordinates = () => {
      const newCoordinates = [];
      for (let i = 0; i < icons.length; i++) {
        let x, y;
        do {
          x = getRandomCoordinate(window.innerWidth);
          y = getRandomCoordinate(window.innerHeight);
        } while (isColliding(x, y, newCoordinates));
        newCoordinates.push({
          x,
          y,
          rotate: Math.floor(Math.random() * 90) - 45,
        });
      }
      return newCoordinates;
    };

    setCoordinates(generateNonCollidingCoordinates());
  }, []);

  return (
    <div className={styles.container} style={{ opacity: opacity || 0.05 }}>
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
