import React, { useState } from "react";
import Blob from "../components/Blob.jsx";

function BubbleContainer() {
  const [blobs, setBlobs] = useState([
    { id: 1, radius: 100, speed: 0.5, angle: 0 },
    { id: 2, radius: 75, speed: 0.7, angle: Math.PI / 2 },
    { id: 3, radius: 60, speed: 1.2, angle: Math.PI / 4 },
  ]);

  const addBlob = () => {
    const newBlob = {
      id: Date.now(),
      radius: Math.random() * 30 + 20,
      speed: Math.random() * 1.5 + 0.5,
      angle: Math.random() * Math.PI * 2,
    };
    setBlobs([...blobs, newBlob]);
  };

  const removeBlob = (id) => {
    setBlobs(blobs.filter((blob) => blob.id !== id));
  };

  return (
    <section
      className="top-0 bottom-0 left-0 right-0 absolute flex items-center justify-center overflow-hidden z-[-100]"
      style={{
        filter: "url(#goo)",
        pointerEvents: "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="w-full h-full absolute top-0 left-0"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>

      {blobs.map((blob) => (
        <Blob
          key={blob.id}
          radius={blob.radius}
          speed={blob.speed}
          angle={blob.angle}
        />
      ))}
    </section>
  );
}

export default BubbleContainer;
