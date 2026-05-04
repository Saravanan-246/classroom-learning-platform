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

      {/* HERO */}
      <section className="relative w-full h-[95vh] md:h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a]" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:42px_42px]" />

        {/* PARTICLES */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            const duration = 8 + Math.random() * 12;
            const delay = Math.random() * 5;
            const isLeft = Math.random() > 0.5;

            return (
              <span
                key={i}
                className="absolute rounded-full bg-white will-change-transform"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: isLeft
                    ? `-${Math.random() * 20}%`
                    : `${100 + Math.random() * 20}%`,
                  animation: `${isLeft ? "snowLR" : "snowRL"} ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                  opacity: Math.random() * 0.6,
                }}
              />
            );
          })}
        </div>

        {/* GLOW */}
<div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2" />

{/* CONTENT */}
<div className="relative z-10 text-center px-6 max-w-3xl">

<h1 className="text-center text-white font-extrabold leading-[1.1] tracking-tight">

  {/* LINE 1 (FULL WIDTH) */}
  <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
    Confident ta irunga
  </span>

  {/* LINE 2 (SMALLER WIDTH CENTERED) */}
  <span className="
    block mt-4
    text-3xl sm:text-5xl md:text-6xl lg:text-7xl
    max-w-3xl mx-auto
    bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-400
    text-transparent bg-clip-text animate-gradient
  ">
    ellam oothikum
  </span>

</h1>

<p className="mt-6 text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
  Learn faster. Stay focused. Build your future with clarity and confidence.
</p>

 

          <button
            onClick={handleExplore}
            className="
              mt-10 px-8 py-4 text-base font-semibold rounded-xl
              bg-white text-black
              hover:scale-105 active:scale-95
              transition-all duration-300
              shadow-lg shadow-black/20
            "
          >
            Explore Subjects →
          </button>

        </div>

        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-[#020617]" />

      </section>

      {/* SUBJECTS */}
      <section
        ref={subjectsRef}
        className="relative -mt-20 max-w-7xl mx-auto px-4 pb-24"
      >
        <div className="rounded-3xl p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Subjects
            </h2>

            <span className="text-xs text-white/50">
              {subjectsData?.length || 0} Available
            </span>
          </div>

          {/* ✅ FIXED GRID (CENTER WHEN 1 or 2) */}
          <div
            className={`
              grid gap-6
              ${
                subjectsData.length === 1
                  ? "grid-cols-1 justify-items-center max-w-md mx-auto"
                  : subjectsData.length === 2
                  ? "grid-cols-1 sm:grid-cols-2 justify-items-center max-w-3xl mx-auto"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }
            `}
          >
            {subjectsData?.map((subject, index) => (
              <div className="w-full max-w-md" key={subject?.id ?? index}>
                <SubjectCard subject={subject} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes snowLR {
            0% { transform: translateX(0) translateY(0); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateX(120vw) translateY(20vh); opacity: 0; }
          }

          @keyframes snowRL {
            0% { transform: translateX(0) translateY(0); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateX(-120vw) translateY(20vh); opacity: 0; }
          }

          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }

          .animate-gradient {
            background-size: 200% auto;
            animation: gradientFlow 5s linear infinite;
          }
        `}
      </style>

    </div>
  );
}