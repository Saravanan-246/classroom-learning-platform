import { useParams, Link, Navigate } from "react-router-dom";
import { subjectsData } from "../data";
import TopicCard from "../components/TopicCard";
import { useState } from "react";

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
    <div className="min-h-screen bg-[#020617] text-white">

      {/* 🔥 HERO */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 px-6 pt-16 pb-24">
        <div className="max-w-6xl mx-auto">

          <Link to="/" className="text-white/80 hover:text-white text-sm">
            ← Back
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            {subject.name}
          </h1>

          <p className="mt-2 text-white/80">{subject.description}</p>
        </div>
      </div>

      {/* 📚 CONTENT */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 pb-20">

        <div className="bg-[#0f172a] rounded-3xl p-6 border border-gray-800">

          {subject.sections.map((section) => (
            <div key={section.id} className="mb-10">

              {/* SECTION TITLE */}
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>

              {section.groups.map((group, gIndex) => {
                const gKey = `${section.id}-${gIndex}`;
                const isOpen = openGroups[gKey];

                return (
                  <div key={gKey} className="mb-6">

                    {/* 🔥 GROUP HEADER */}
                    <button
                      onClick={() => toggleGroup(gKey)}
                      className="w-full flex items-center justify-between bg-[#020617] border border-gray-800 px-4 py-3 rounded-xl hover:bg-[#0f172a] transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-indigo-500 rounded"></div>
                        <h3 className="text-lg font-semibold">{group.title}</h3>
                      </div>

                      {/* Arrow */}
                      <span
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      >
                        ▶
                      </span>
                    </button>

                    {/* 🔥 GROUP CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[2000px] mt-4" : "max-h-0"
                      }`}
                    >

                      {group.subGroups ? (
                        group.subGroups.map((sub, sIndex) => {
                          const sKey = `${gKey}-${sIndex}`;
                          const subOpen = openSubs[sKey];

                          return (
                            <div key={sKey} className="ml-4 mb-6">

                              {/* 🔥 SUB HEADER */}
                              <button
                                onClick={() => toggleSub(sKey)}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#020617]"
                              >
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                  <h4 className="text-sm text-indigo-300 font-semibold">
                                    {sub.title}
                                  </h4>
                                </div>

                                <span
                                  className={`text-xs transition-transform ${
                                    subOpen ? "rotate-90" : ""
                                  }`}
                                >
                                  ▶
                                </span>
                              </button>

                              {/* 🔥 SUB CONTENT */}
                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  subOpen ? "max-h-[1000px] mt-3" : "max-h-0"
                                }`}
                              >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-4">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-4">
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