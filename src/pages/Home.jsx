import { useState, useEffect } from "react";
import { subjectsData } from "../data";
import SubjectCard from "../components/SubjectCard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, []);

  const handleExplore = () => {
    setHighlight(true);

    setTimeout(() => setHighlight(false), 900);

    document.getElementById("subjects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* 🔥 LOADING */}
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide animate-pulse">
            Classroom
          </h1>
        </div>
      )}

      <main className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>

        {/* 🔥 HERO */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 px-6 pt-24 pb-32">

          {/* Soft glow */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10">

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Classroom
            </h1>

            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
              Structured subjects, organized topics, and focused learning.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={handleExplore}
                className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow hover:shadow-lg hover:scale-[1.03] active:scale-95 transition"
              >
                Explore Subjects
              </button>
            </div>

          </div>
        </section>

        {/* 📚 SUBJECTS */}
        <section
          id="subjects"
          className="max-w-7xl mx-auto px-6 -mt-20 pb-24 relative z-20"
        >
          <div className="bg-[#0f172a]/90 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-xl border border-slate-800">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Subjects
              </h2>

              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-sm font-medium">
                {subjectsData.length} Available
              </span>
            </div>

            {/* 🔥 GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {subjectsData.map((subject) => (
                <div
                  key={subject.id}
                  className={`transition-all duration-500 ${
                    highlight
                      ? "ring-2 ring-indigo-500/60 shadow-lg scale-[1.02]"
                      : ""
                  }`}
                >
                  <SubjectCard subject={subject} />
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="pb-12 text-center opacity-40">
          <p className="text-xs tracking-widest uppercase">
            Classroom Platform © 2026
          </p>
        </footer>

      </main>
    </div>
  );
}