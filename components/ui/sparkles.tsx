"use client";
import React, { useId, useMemo } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      console.log(container);
      setLoading(false);
      await controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: background || "#000",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            enable: true,
            delay: 0,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor || "#ffffff",
        },
        links: {
          color: particleColor || "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: speed || 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: particleDensity || 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: minSize || 1, max: maxSize || 5 },
        },
      },
      detectRetina: true,
    }),
    [background, particleColor, speed, minSize, maxSize, particleDensity]
  );

  if (loading || !init) {
    return null;
  }

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 0 }}
      className={cn("h-full w-full", className)}
      id={id}
    >
      <Particles
        id={id || "tsparticles"}
        particlesLoaded={particlesLoaded}
        options={options}
        className="h-full w-full"
      />
    </motion.div>
  );
};
