import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { colors } from "../assets/colors";

const Net = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: colors.background,
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "repulse" },
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              repulse: { distance: 400 },
              grab: {
                distance: 300,
                links: { opacity: 1, color: colors.primary },
                duration: 1,
              },
            },
          },
          particles: {
            color: { value: colors.secondary },
            links: {
              color: colors.secondary,
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              speed: 0.5,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 150,
            },
            opacity: { value: 1 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Net;
