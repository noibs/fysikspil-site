"use client";
import React, { useEffect, useRef } from "react";
import Script from "next/script";
import styles from "./page.module.scss";

interface UnityConfig {
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  streamingAssetsUrl: string;
  companyName: string;
  productName: string;
  productVersion: string;
}

interface UnityInstance {
  Quit: () => Promise<void>;
  SetFullscreen: (fullscreen: boolean) => void;
}

declare global {
  interface Window {
    createUnityInstance: (
      canvas: HTMLCanvasElement,
      config: UnityConfig,
      onProgress?: (progress: number) => void
    ) => Promise<UnityInstance>;
  }
}

// Extend the HTMLCanvasElement interface
interface HTMLCanvasElementExtended extends HTMLCanvasElement {
  mozRequestFullScreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

const UnityWebGL: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElementExtended>(null);

  useEffect(() => {
    const loadUnityInstance = () => {
      if (!window.createUnityInstance || !canvasRef.current) return;

      const config = {
        dataUrl: "/game/Build/Build6.data",
        frameworkUrl: "/game/Build/Build6.framework.js",
        codeUrl: "/game/Build/Build6.wasm",
        streamingAssetsUrl: "Build6",
        companyName: "Build6",
        productName: "Build6",
        productVersion: "0.1",
      };

      window.createUnityInstance(
        canvasRef.current,
        config,
        (progress: number) => {
          console.log(`Loading: ${progress * 100}%`);
        }
      );
    };

    if (typeof window.createUnityInstance === "undefined") {
      window.addEventListener("load", loadUnityInstance);
    } else {
      loadUnityInstance();
    }

    return () => {
      window.removeEventListener("load", loadUnityInstance);
    };
  }, []);

  const handleFullscreen = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
      } else if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
      } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
      } else if (canvas.msRequestFullscreen) {
        canvas.msRequestFullscreen();
      }
    }
  };

  return (
    <>
      <Script src="/game/Build/Build6.loader.js" strategy="beforeInteractive" />
      <div id="unity-container" className={styles.container}>
        <canvas
          id="unity-canvas"
          ref={canvasRef}
          style={{ width: "1000px", height: "608px" }}
        />
        <div className={styles.info}>
          <p>Fysikspil</p>
          <button className={styles.btn} onClick={handleFullscreen}>
            <i
              id="purple"
              className="fa-solid fa-up-right-and-down-left-from-center"
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default UnityWebGL;
