import { useParams, Link, Navigate } from "react-router-dom";
import { subjectsData } from "../data";
import TopicCard from "../components/TopicCard";
import { useState } from "react";

import heroBg from "../assets/subject.png";

export default function SubjectDetail() {
  const { id } = useParams();
  const subject = subjectsData.find((s) => s.id === id);

  const [openGroups, setOpenGroups] = useState({});
  const [openSubs, setOpenSubs] = useState({});
  const [openUnits, setOpenUnits] = useState({}); // ✅ used for TOC

  if (!subject) return <Navigate to="/" replace />;

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSub = (key) => {
    setOpenSubs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleUnit = (key) => {
    setOpenUnits((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

      {/* 🔥 HERO */}
      <div className="relative w-full h-[65vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">

        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-contain md:object-cover object-center md:object-top"
        />

        <div className="absolute inset-0 bg-black/20 md:bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 w-full h-28 bg-gradient-to-b from-transparent to-[#020617]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-6 md:pt-14">

          <Link to="/" className="inline-flex gap-2 px-4 py-2 bg-white/10 rounded-lg">
            ← Back
          </Link>

          {/* ✅ FIXED TITLE */}
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-blue-400">
            {subject.title || subject.name}
          </h1>

          <p className="mt-2 text-white/80 max-w-md">
            {subject.description || subject.desc}
          </p>

        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="max-w-6xl mx-auto px-4 mt-0 md:-mt-12 pb-20">

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-5 md:p-6 border border-white/10">

          {/* ================= OLD STRUCTURE ================= */}
          {subject.sections && subject.sections.map((section) => (
            <div key={section.id} className="mb-10">

              <h2 className="flex items-center gap-3 mb-6 text-lg md:text-xl font-semibold text-white">
                <span className="w-[3px] h-6 rounded-full bg-blue-500"></span>
                {section.title}
              </h2>

              {section.groups.map((group, gIndex) => {
                const gKey = `${section.id}-${gIndex}`;
                const isOpen = openGroups[gKey];

                return (
                  <div key={gKey} className="mb-6">

                    <button
                      onClick={() => toggleGroup(gKey)}
                      className="w-full flex justify-between items-center px-4 py-3 bg-white/5 rounded-xl hover:bg-blue-500/10 transition"
                    >
                      <span>{group.title}</span>
                      <span className={`transition ${isOpen ? "rotate-90 text-blue-400" : "text-white/60"}`}>
                        ▶
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {group.topics.map((topic) => (
                          <TopicCard
                            key={topic.id}
                            topic={topic}
                            subjectId={subject.id}
                          />
                        ))}
                      </div>
                    )}

                  </div>
                );
              })}

            </div>
          ))}

          {/* ================= CN STRUCTURE ================= */}
          {subject.id === "cn" && subject.units && (
            <div className="space-y-4">

              {subject.units.map((unit) => (
                <Link
                  key={unit.id}
                  to={`/learn/${subject.id}/${unit.topics?.[0]?.id}`}
                  className="block"
                >
                  <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-blue-500/10 hover:border-blue-500/40 transition">

                    <h3 className="font-semibold">{unit.title}</h3>

                    <p className="text-xs text-white/50 mt-1">
                      {unit.topics?.length || 0} Topics
                    </p>

                  </div>
                </Link>
              ))}

            </div>
          )}

          {/* ================= ✅ TOC STRUCTURE ================= */}
          {subject.id === "toc" && subject.units && (
            <div className="space-y-4 mt-6">

              {subject.units.map((unit, index) => {
                const uKey = `${unit.id}-${index}`;
                const isOpen = openUnits[uKey];

                return (
                  <div key={uKey}>

                    {/* UNIT HEADER */}
                    <button
                      onClick={() => toggleUnit(uKey)}
                      className="w-full flex justify-between items-center px-4 py-4 bg-white/5 rounded-xl hover:bg-blue-500/10 transition"
                    >
                      <div>
                        <h3 className="font-semibold text-blue-300">
                          {unit.title}
                        </h3>
                        <p className="text-xs text-white/50">
                          {unit.topics?.length} Topics
                        </p>
                      </div>

                      <span className={`transition ${isOpen ? "rotate-90 text-blue-400" : "text-white/60"}`}>
                        ▶
                      </span>
                    </button>

                    {/* TOPICS */}
                    {isOpen && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {unit.topics.map((topic) => (
                          <TopicCard
                            key={topic.title}
                            topic={{
                              id: topic.title,
                              title: topic.title,
                              description: topic.explanation
                            }}
                            subjectId={subject.id}
                          />
                        ))}
                      </div>
                    )}

                  </div>
                );
              })}

            </div>
          )}

        </div>
      </div>
    </div>
  );
}