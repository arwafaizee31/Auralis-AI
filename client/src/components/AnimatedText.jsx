// src/components/AnimatedText.jsx
import React from "react";
import "../styles/AnimatedText.css";

const AnimatedText = ({ text }) => {
  return (
    <h1 className="animated-title">
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.20}s` }}
          className={char === " " ? "space" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;
