import { useState, useEffect, useRef } from "react";
import { subjectsData } from "../data";
import SubjectCard from "../components/SubjectCard";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";

const heroImages = [hero1, hero2];

export default function Home() {
  const [active, setActive] = useState(0);
  const [glow, setGlow] = useState(false);
  const subjectsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    subjectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setGlow(true);
    setTimeout(() => setGlow(false), 1800);
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">

        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`
              absolute inset-0 w-full h-full object-cover object-center
              transition-all duration-[1800ms] ease-out
              ${active === i ? "opacity-100 scale-100" : "opacity-0 scale-110"}
            `}
          />
        ))}

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-black/25 md:bg-gradient-to-r md:from-black/50 md:to-transparent"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Confident ta irunga
            <br />
            <span className="text-indigo-400">ellam oothikum</span>
          </h1>

          <p className="mt-4 text-white/85 text-sm md:text-lg">
            Build focus. Learn faster.
          </p>

          <button
            onClick={handleExplore}
            className="
              mt-6 px-7 py-3
              rounded-xl font-semibold
              bg-indigo-600/90 hover:bg-indigo-500
              backdrop-blur-md
              transition-all duration-300
              hover:scale-105 active:scale-95
              shadow-[0_8px_30px_rgba(99,102,241,0.4)]
            "
          >
            Explore Subjects
          </button>

        </div>

        {/* SMOOTH FADE */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-black"></div>

      </section>

      {/* SUBJECTS */}
      <section
        ref={subjectsRef}
        className="relative -mt-16 max-w-7xl mx-auto px-4 pb-20"
      >

        {/* 🔥 PREMIUM GLOW FRAME */}
        <div
          className={`
            transition-all duration-700 rounded-3xl p-[2px]
            ${glow ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" : "bg-transparent"}
          `}
        >
          <div className="bg-black rounded-3xl p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjectsData.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}