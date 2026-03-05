import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function Blob({ radius, speed, angle }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const blobRef = useRef(null);

  useEffect(() => {
    let animationId;
    let time = 0;

    const animate = () => {
      time += speed * 0.01;
      const x = Math.cos(angle + time) * 30;
      const y = Math.sin(angle + time) * 60;
      setPosition({ x, y });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [angle, speed]);

  const style = {
    width: `${radius}px`,
    height: `${radius}px`,
    borderRadius: "50%",
    backgroundColor: "#fff",
    position: "absolute",
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  return <div ref={blobRef} style={style} />;
}

// Definición de PropTypes
Blob.propTypes = {
  radius: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired,
};

export default Blob;
