import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonText = enable ? "Desactivar" : "Activar";

  const handleClick = () => {
    setEnable(!enable);
  };


  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    if (enable) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enable]);

  useEffect(() => {
    document.body.style.cursor = enable ? "none" : "default";
  }, [enable]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={handleClick}>{buttonText} seguir puntero</button>
    </main>
  );
}

export default App;
