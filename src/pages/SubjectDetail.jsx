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

  if (!subject) return <Navigate to="/" replace />;

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSub = (key) => {
    setOpenSubs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

      {/* 🔥 HERO */}
      <div className="relative w-full h-[52vh] sm:h-[60vh] md:h-[72vh] overflow-hidden">

        {/* ✅ IMAGE FIX (MAIN) */}
        <img
          src={heroBg}
          alt=""
          className="
            absolute inset-0 w-full h-full
            object-contain md:object-cover
            object-top md:object-top
            md:scale-[0.92]
            transition-all duration-700
          "
        />

        {/* ✅ LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* ✅ SIDE FADE (ONLY DESKTOP) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] opacity-50"></div>

        {/* ✅ CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">

          <Link
            to="/"
            className="text-white/70 hover:text-white text-sm transition"
          >
            ← Back
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
            {subject.name}
          </h1>

          <p className="mt-3 text-white/90 max-w-xl text-sm sm:text-base">
            {subject.description}
          </p>

        </div>

        {/* ✅ BOTTOM FADE */}
        <div className="absolute bottom-0 w-full h-28 bg-gradient-to-b from-transparent to-[#020617]"></div>

      </div>

      {/* 📚 CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-16 pb-20 relative z-10">

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-5 md:p-6 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">

          {subject.sections.map((section) => (
            <div key={section.id} className="mb-10">

              <h2 className="text-xl md:text-2xl font-bold mb-6">
                {section.title}
              </h2>

              {section.groups.map((group, gIndex) => {
                const gKey = `${section.id}-${gIndex}`;
                const isOpen = openGroups[gKey];

                return (
                  <div key={gKey} className="mb-6">

                    {/* GROUP */}
                    <button
                      onClick={() => toggleGroup(gKey)}
                      className="w-full flex items-center justify-between bg-white/5 border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-indigo-500 rounded"></div>
                        <h3 className="text-base md:text-lg font-semibold">
                          {group.title}
                        </h3>
                      </div>

                      <span className={`transition-transform ${isOpen ? "rotate-90" : ""}`}>
                        ▶
                      </span>
                    </button>

                    {/* GROUP CONTENT */}
                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[2000px] mt-4" : "max-h-0"}`}>

                      {group.subGroups ? (
                        group.subGroups.map((sub, sIndex) => {
                          const sKey = `${gKey}-${sIndex}`;
                          const subOpen = openSubs[sKey];

                          return (
                            <div key={sKey} className="ml-2 sm:ml-4 mb-6">

                              {/* SUB */}
                              <button
                                onClick={() => toggleSub(sKey)}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5"
                              >
                                <h4 className="text-sm text-indigo-300 font-semibold">
                                  {sub.title}
                                </h4>

                                <span className={`${subOpen ? "rotate-90" : ""}`}>
                                  ▶
                                </span>
                              </button>

                              {/* SUB CONTENT */}
                              <div className={`overflow-hidden transition-all ${subOpen ? "max-h-[1000px] mt-3" : "max-h-0"}`}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-2 sm:ml-4">
                                  {sub.topics.map((topic) => (
                                    <TopicCard
                                      key={topic.id}
                                      topic={topic}
                                      subjectId={subject.id}
                                    />
                                  ))}
                                </div>
                              </div>

                            </div>
                          );
                        })
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-2 sm:ml-4">
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

                  </div>
                );
              })}

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}