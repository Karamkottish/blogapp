"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PPCSplash() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`ppc-splash ${fadeOut ? "ppc-fade-out" : ""}`}>
      <div className="ppc-particles"></div>

      <div className="ppc-logo-wrapper">
        <Image
          src="/3dwithbackground.png"
          alt="PawsPalConnect Logo"
          width={260}
          height={260}
          className="ppc-logo"
          priority
        />
      </div>
    </div>
  );
}
