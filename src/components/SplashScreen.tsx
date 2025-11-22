"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="logo-wrapper">
        <Image
          src="/3dwithbackground.png"
          alt="PawsPalConnect"
          width={220}
          height={220}
          className="splash-logo"
        />
      </div>
    </div>
  );
}
