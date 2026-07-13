"use client";

import Particles from "@tsparticles/react";

export default function PremiumBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },

        background: {
          color: {
            value: "#000000",
          },
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: "#12B8B0",
          },

          links: {
            enable: true,
            color: "#12B8B0",
            distance: 150,
            opacity: 0.5,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 80,
          },

          opacity: {
            value: 0.8,
          },

          size: {
            value: { min: 2, max: 5 },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 1,
              },
            },
          },
        },
      }}
    />
  );
}