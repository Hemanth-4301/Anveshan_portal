import React, { useRef } from "react";
import logo from "../images/logo.png";
import "../styles/Hero.css";
import ParticlesComponent from "./Particles";
function Hero() {
  const logoRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = logoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    logoRef.current.style.transform = `rotateX(${y / 20}deg) rotateY(${
      x / 20
    }deg)`;
  };

  return (
    <div className="hero-container bg-black" onMouseMove={handleMouseMove}>
      <ParticlesComponent id="particles" />

      <div className="text-content z-10">
        <h1 className="hero-title px-4">ANVESHAN</h1>
        <p className="hero-description text-left px-4">
          Anveshan Club is dedicated to exploring the frontiers of AI and ML,
          fostering a community where innovation meets real-world impact.
          Through guided journeys and collaborative problem-solving, we empower
          students and researchers to transform curiosity into innovation,
          shaping technology that drives the future.
        </p>
        <div className="p-5"></div>
      </div>

      <div className="image-container ">
        <div className="canvas">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`tracker tr-${i + 1}`}></div>
          ))}
        </div>
        <img
          src={logo}
          ref={logoRef}
          className="responsive-logo"
          alt="Anveshan Logo"
        />
      </div>
    </div>
  );
}

export default Hero;
