// src/components/TypingEffect.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: ["Web Developer", "Java Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy(); // cleanup
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {/* <h1>Hi, I am</h1>
      <h1 contentEditable style={{ outline: "none", fontSize: "2rem" }}>
        Ajay Gangwar
      </h1> */}
      <h3 style={{ fontWeight: "normal" }}>
        I am a <span ref={typedRef} style={{ color: "#b0e92cff" }}></span>
      </h3>
    </div>
  );
};

export default TypingEffect;