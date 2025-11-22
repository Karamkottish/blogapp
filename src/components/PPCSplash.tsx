"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PPCSplash() {
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Start fade-out after 3 sec
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000);

    // Redirect after fade animation finishes (0.8s)
    const redirectTimer = setTimeout(() => {
      router.push("/faq");
    }, 3800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

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
