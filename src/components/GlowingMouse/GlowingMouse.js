import { useEffect, useState } from "react";

export default function GlowingMouse() {
  const [currentMousePos, setCurrentMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setCurrentMousePos({ x: e.clientX, y: e.clientY });
    });

    return () => {
      document.removeEventListener("mousemove", (e) => {
        setCurrentMousePos({ x: e.clientX, y: e.clientY });
      });
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${currentMousePos.x}px ${currentMousePos.y}px, rgba(1, 248, 145, 0.15), transparent 80%)`,
      }}
    >
    </div>
  
  );
}
