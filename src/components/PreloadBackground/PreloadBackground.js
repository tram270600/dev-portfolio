import { useEffect } from "react";
import "./PreloadBackground.css";

export default function PreloadBackground() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".preloadWrapper").classList.add("hidden");
    }, 3900);
  }, []);

  return (
    <div className="preloadWrapper flex justify-center items-center w-screen h-screen bg-[--navy] z-[999] relative">
      <span className="preloard text-[--green] bold text-9xl">D</span>
    </div>
  );
}
