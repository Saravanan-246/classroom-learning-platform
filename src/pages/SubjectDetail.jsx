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

      {/* 🔥 HERO (IMPROVED ONLY IMAGE + OVERLAY) */}
     {/* 🔥 HERO */}
<div className="relative w-full h-[65vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">

  {/* IMAGE */}
  <img
    src={heroBg}
    alt=""
    className="
      absolute inset-0 w-full h-full
      object-contain md:object-cover
      object-center md:object-top
      transition-all duration-700
    "
  />

  {/* 🔥 LIGHT OVERLAY */}
  <div className="absolute inset-0 bg-black/20 md:bg-black/30"></div>

  {/* 🔥 TOP GRADIENT (FOR TEXT VISIBILITY) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>

  {/* SIDE FADE */}
  <div className="
    hidden md:block absolute inset-0
    bg-gradient-to-r
    from-[#020617] via-transparent to-transparent
    opacity-70
  "></div>

  {/* BOTTOM FADE */}
  <div className="
    absolute bottom-0 w-full h-28
    bg-gradient-to-b from-transparent to-[#020617]
  "></div>

  {/* 🔥 CONTENT (TOP-LEFT FIXED) */}
  <div className="
    relative z-10
    max-w-6xl mx-auto
    px-5 sm:px-6
    pt-6 sm:pt-10 md:pt-14
  ">

    <Link
  to="/"
  className="
    inline-flex items-center gap-2
    px-4 py-2
    rounded-lg
    bg-white/10 border border-white/20
    backdrop-blur-md
    text-white text-sm font-medium
    hover:bg-indigo-600 hover:border-indigo-500
    transition-all duration-200
    group
  "
>
  <span className="group-hover:-translate-x-1 transition">
    ←
  </span>
  Back
</Link>
    {/* TITLE */}
    <h1 className="
      font-extrabold leading-tight
      text-3xl sm:text-4xl md:text-5xl
    ">
      {subject.name}
    </h1>

    {/* DESCRIPTION */}
    <p className="
      mt-2
      text-white/90
      max-w-md
      text-sm sm:text-base
    ">
      {subject.desc || subject.description}
    </p>

  </div>

</div>
      {/* 📚 CONTENT (UNCHANGED) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-0 md:-mt-12 pb-20 relative z-10">

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
                    <div className={`${isOpen ? "mt-4" : "hidden"}`}>

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
                              <div className={`${subOpen ? "mt-3" : "hidden"}`}>
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