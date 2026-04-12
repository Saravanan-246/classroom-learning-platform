import { useRef } from "react";
import { subjectsData } from "../data";
import SubjectCard from "../components/SubjectCard";

export default function Home() {
  const subjectsRef = useRef(null);

  const handleExplore = () => {
    subjectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">

      {/* 🔥 HERO */}
      <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">

        {/* 🌌 BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a]" />

        {/* 🧠 GRID */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* ❄️ SNOW (ADVANCED LEFT ↔ RIGHT + DEPTH) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(90)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            const duration = 6 + Math.random() * 10;
            const delay = Math.random() * 5;
            const direction = Math.random() > 0.5 ? "snowLR" : "snowRL";

            return (
              <span
                key={i}
                className="absolute rounded-full bg-white/80"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: direction === "snowLR" ? `-${Math.random() * 20}%` : `100%`,
                  animation: `${direction} ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                  opacity: Math.random(),
                }}
              />
            );
          })}
        </div>

        {/* 🔥 GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2 animate-pulse" />

        {/* 🔥 CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-3xl">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Confident ta irunga
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
              ellam oothikum
            </span>
          </h1>

          <p className="mt-5 text-white/70 text-sm md:text-lg">
            Learn faster. Stay focused.
          </p>

          <button
            onClick={handleExplore}
            className="
              mt-8 px-6 py-3 rounded-xl
              bg-indigo-600 hover:bg-indigo-500
              transition-all duration-300
              hover:scale-105 active:scale-95
              shadow-[0_0_30px_rgba(99,102,241,0.7)]
            "
          >
            Explore Subjects →
          </button>

        </div>

        {/* 🔻 FADE */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-[#020617]" />

      </section>

      {/* 📚 SUBJECTS */}
      <section
        ref={subjectsRef}
        className="relative -mt-20 max-w-7xl mx-auto px-4 pb-24"
      >
        <div className="
          rounded-3xl p-6 md:p-8
          bg-gradient-to-b from-white/5 to-transparent
          backdrop-blur-xl
          border border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        ">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold">
              Subjects
            </h2>

            <span className="text-xs text-white/50">
              {subjectsData?.length || 0} Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectsData?.map((subject, index) => (
              <SubjectCard
                key={subject?.id ?? `subject-${index}`}
                subject={subject}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 ANIMATIONS */}
      <style>
        {`
          @keyframes snowLR {
            0% {
              transform: translateX(0) translateY(0);
              opacity: 0;
            }
            10% { opacity: 1; }
            100% {
              transform: translateX(120vw) translateY(20vh);
              opacity: 0;
            }
          }

          @keyframes snowRL {
            0% {
              transform: translateX(0) translateY(0);
              opacity: 0;
            }
            10% { opacity: 1; }
            100% {
              transform: translateX(-120vw) translateY(20vh);
              opacity: 0;
            }
          }
        `}
      </style>

    </div>
  );
}