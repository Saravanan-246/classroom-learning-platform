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
      <section className="relative w-full h-[95vh] md:h-screen flex items-center justify-center overflow-hidden perspective-[1200px]">

        {/* 🌌 BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a]" />

        {/* 🧠 GRID */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:42px_42px]" />

        {/* ❄️ SNOW */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(90)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            const duration = 6 + Math.random() * 10;
            const delay = Math.random() * 5;
            const direction = Math.random() > 0.5 ? "snowLR" : "snowRL";

            return (
              <span
                key={i}
                className="absolute rounded-full bg-white"
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

        {/* 🧊 3D OBJECTS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(24)].map((_, i) => {
            const size = 30 + Math.random() * 50;
            const duration = 12 + Math.random() * 10;
            const delay = Math.random() * 5;
            const direction = Math.random() > 0.5 ? "boxLR" : "boxRL";

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: direction === "boxLR" ? "-10%" : "110%",
                  animation: `${direction} ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative w-full h-full rotateX-[45deg] rotateY-[45deg]">
                  <div className="absolute inset-0 border border-white/40 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.15)]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 🌟 STRONG CENTER GLOW */}
        <div className="absolute w-[600px] h-[600px] bg-white/10 blur-[140px] rounded-full top-1/3 left-1/2 -translate-x-1/2 animate-pulse" />

        {/* 🔥 CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-3xl">

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]">
            Confident ta irunga
            <br />
            <span className="block mt-2 bg-gradient-to-r from-white via-blue-200 to-cyan-300 text-transparent bg-clip-text animate-gradient">
              ellam oothikum
            </span>
          </h1>

          <p className="mt-6 text-white/80 text-base md:text-xl tracking-wide">
            Learn faster. Stay focused. Build your future with power.
          </p>

          <button
            onClick={handleExplore}
            className="
              mt-10 px-8 py-4 text-lg font-semibold rounded-2xl
              bg-white text-black
              hover:scale-110 active:scale-95
              transition-all duration-300
              shadow-[0_0_40px_rgba(255,255,255,0.4)]
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
            0% { transform: translateX(0) translateY(0); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateX(120vw) translateY(20vh); opacity: 0; }
          }

          @keyframes snowRL {
            0% { transform: translateX(0) translateY(0); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateX(-120vw) translateY(20vh); opacity: 0; }
          }

          @keyframes boxLR {
            0% { transform: translateX(0) rotateY(0deg) rotateX(0deg); opacity: 0; }
            10% { opacity: 0.5; }
            100% { transform: translateX(120vw) rotateY(360deg) rotateX(360deg); opacity: 0; }
          }

          @keyframes boxRL {
            0% { transform: translateX(0) rotateY(0deg) rotateX(0deg); opacity: 0; }
            10% { opacity: 0.5; }
            100% { transform: translateX(-120vw) rotateY(-360deg) rotateX(-360deg); opacity: 0; }
          }

          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }

          .animate-gradient {
            background-size: 200% auto;
            animation: gradientFlow 4s linear infinite;
          }
        `}
      </style>

    </div>
  );
}