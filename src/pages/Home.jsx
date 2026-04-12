import { useState, useEffect, useRef } from "react";
import { subjectsData } from "../data";
import SubjectCard from "../components/SubjectCard";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";

const heroImages = [hero1, hero2];

export default function Home() {
  const [active, setActive] = useState(0);
  const subjectsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    subjectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">

      {/* 🔥 HERO */}
      <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">

        {/* IMAGES */}
        {heroImages.map((img, i) => (
          <img
            key={`hero-${i}`}   // ✅ FIXED (stable key)
            src={img}
            alt=""
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-[1800ms]
              ${active === i ? "opacity-100 scale-100" : "opacity-0 scale-110"}
            `}
          />
        ))}

        {/* 🔥 CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-center text-center px-6">
          <div className="max-w-xl">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Confident ta irunga
              <br />
              <span className="text-indigo-400">ellam oothikum</span>
            </h1>

            <p className="mt-4 text-white/80 text-sm md:text-lg">
              Learn faster. Stay focused.
            </p>

            <button
              onClick={handleExplore}
              className="
                mt-6 px-6 py-3 rounded-lg
                bg-indigo-600 hover:bg-indigo-500
                transition-all
                hover:scale-105 active:scale-95
                shadow-[0_0_25px_rgba(99,102,241,0.6)]
              "
            >
              Explore Subjects →
            </button>

          </div>
        </div>

        {/* 🔥 BOTTOM DARK */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-[#020617]"></div>

      </section>

      {/* 📚 SUBJECTS */}
      <section
        ref={subjectsRef}
        className="relative -mt-16 max-w-7xl mx-auto px-4 pb-24"
      >
        <div className="
          rounded-3xl p-6 md:p-8
          bg-gradient-to-b from-white/5 to-transparent
          backdrop-blur-xl
          border border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        ">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold">
              Subjects
            </h2>

            <span className="text-xs text-white/50">
              {subjectsData?.length || 0} Available
            </span>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectsData?.map((subject, index) => (
              <SubjectCard
                key={subject?.id ?? `subject-${index}`} // ✅ FINAL SAFE KEY
                subject={subject}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}