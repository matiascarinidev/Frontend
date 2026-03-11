import React from "react";

interface LogoAntenorProps {
  color?: string;
  fontFamily?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LogoAntenor: React.FC<LogoAntenorProps> = ({
  color = "#000", // Color por defecto negro
  fontFamily = "var(--font-bodoni)",
  className = "",
  style = {},
}) => {
  return (
    <svg
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        ...style,
      }}
    >
      <text
        x="5"
        y="92"
        fontWeight="700"
        fontSize="110"
        fill={color}
        fontFamily={fontFamily}
      >
        A
      </text>
      <text x="80" y="60" fontSize="48" fill={color} fontFamily={fontFamily}>
        NTENOR
      </text>
      <line x1="76" y1="65" x2="280" y2="65" stroke={color} strokeWidth="1" />
      <text x="85" y="80" fontSize="15" fill={color} fontFamily={fontFamily}>
        RESTAURANTE DE CAMPO
      </text>
    </svg>
  );
};

export default LogoAntenor;
