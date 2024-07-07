import { useEffect } from "react";
import "./PreloadBackground.css";
import TLogo from "assets/logo/TLogo.svg";

export default function PreloadBackground() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".preloadWrapper").classList.add("hidden");
    }, 3450);
  }, []);

  return (
    <div className="preloadWrapper flex justify-center items-center w-screen h-screen bg-[--navy] z-[999] relative">
      <img src={TLogo} className="preloard" width={100} height={100} />
    </div>
  );
}
