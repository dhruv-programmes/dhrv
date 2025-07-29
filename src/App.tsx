"use client";

import { useEffect, useState } from "react";
import LetterGlitch from "./components/LetterGlitch";

export default function Home() {
  const [pop, setPop] = useState(false);
  useEffect(() => {
    setTimeout(() => setPop(true), 100);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <LetterGlitch
        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1
          className={`text-stone-200 text-7xl md:text-9xl font-black font-sans tracking-wide text-center select-none drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] transition-all duration-700 ${pop ? 'scale-110 opacity-100' : 'scale-95 opacity-0'}`}
        >
          dhrv
        </h1>
      </div>
    </div>
  );
}
