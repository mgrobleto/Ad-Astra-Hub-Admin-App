//import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
//import { loadStarsPreset } from "tsparticles-preset-stars";

const ParticleBackground = () => {

    const particlesInit = async (engine) => {
        console.log(engine)
        await loadFull(engine);
    };

    const particlesLoaded = async (container) => {
        console.log(container);
    };

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        interactivity: {
            detect_on: "canvas",
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
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
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 900,
                },
                value: 40,
            },
            opacity: {
                value: 0.4,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}
    />
  )
}

export default ParticleBackground
