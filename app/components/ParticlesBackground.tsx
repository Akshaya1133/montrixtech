"use client";

import Particles from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesLoaded = useCallback(async (container?: Container) => {
    await console.log("Particles loaded", container);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          color: {
            value: "#12B8B0",
          },
          links: {
            color: "#12B8B0",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}