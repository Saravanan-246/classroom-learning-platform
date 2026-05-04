import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  ChevronLeft,
  CheckCircle2,
  ChevronDown,
  Layers,
} from "lucide-react";

import cnData from "../data/cn";
import tocData from "../data/toc";

/* ---------- SLUG ---------- */
const generateSlug = (text = "") =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

/* ---------- BLOCKS ---------- */

const HeadingBlock = ({ value }) => (
  <h3 className="text-xl font-semibold text-white mt-10 mb-4 border-l-4 border-blue-500 pl-3">
    {value}
  </h3>
);

const TextBlock = ({ value }) => (
  <p className="text-slate-300 leading-7 text-[15px] mb-5">
    {value}
  </p>
);

const HighlightBlock = ({ value }) => (
  <div className="bg-blue-500/10 border border-blue-500/20 p-5 rounded-xl my-6">
    <p className="text-blue-200 italic">{value}</p>
  </div>
);

const ListBlock = ({ items }) => (
  <ul className="space-y-3 my-5">
    {items?.map((item, i) => (
      <li key={i} className="flex gap-3">
        <CheckCircle2 size={18} className="text-blue-500 mt-1" />
        <span className="text-slate-300">{item}</span>
      </li>
    ))}
  </ul>
);

/* ---------- MAIN ---------- */

export default function LearnTopics() {

  const { subjectId, topicId: rawId } = useParams();
  const topicId = generateSlug(decodeURIComponent(rawId || ""));
  const subjectData = subjectId === "toc" ? tocData : cnData;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [openUnits, setOpenUnits] = useState(false);

  const dropdownRef = useRef(null); // ✅ NEW

  /* ---------- OUTSIDE CLICK CLOSE ---------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenUnits(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------- FIND UNIT ---------- */
  const currentUnit = subjectData.units.find((u) =>
    u.topics?.some((t) => {
      const id = t.id || generateSlug(t.title);
      return id === topicId;
    })
  );

  /* ---------- SCROLL ---------- */
  useEffect(() => {
    const update = () => {
      const h =
        document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) setScrollProgress((window.scrollY / h) * 100);
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!currentUnit) {
    return (
      <div className="h-screen flex items-center justify-center text-slate-500 text-lg">
        Topic not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030406] text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#030406]/90 backdrop-blur border-b border-white/5">

        <div
          className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <Link to={`/subject/${subjectId}`} className="p-2 bg-white/5 rounded-lg">
              <ChevronLeft size={18} />
            </Link>

            {/* ✅ FIXED DROPDOWN */}
            <div ref={dropdownRef} className="relative">

              <button
                onClick={() => setOpenUnits((prev) => !prev)}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg text-sm"
              >
                <Layers size={14} className="text-blue-400" />
                {currentUnit.title}
                <ChevronDown size={14} />
              </button>

              {openUnits && (
                <div className="absolute mt-2 w-64 bg-[#0c0d0f] border border-white/10 rounded-lg py-2 z-50 shadow-xl">

                  {subjectData.units.map((unit) => (
                    <Link
                      key={unit.id}
                      to={`/learn/${subjectId}/${generateSlug(unit.topics?.[0]?.title)}`}
                      onClick={() => setOpenUnits(false)} // ✅ AUTO CLOSE
                      className="block px-4 py-2 text-sm hover:bg-white/5"
                    >
                      {unit.title}
                    </Link>
                  ))}

                </div>
              )}

            </div>

          </div>

        </div>
      </nav>

      {/* CONTENT */}
      <main className="max-w-3xl mx-auto px-4 pt-20 pb-16 space-y-16">

        {currentUnit.topics.map((topic) => {
          const id = topic.id || generateSlug(topic.title);

          return (
            <section key={id} id={id} className="space-y-6">

              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {topic.title}
              </h2>

              {topic.sections?.length ? (
                topic.sections.map((block, i) => {
                  const key = `${id}-${i}`;

                  switch (block.type) {
                    case "heading":
                      return <HeadingBlock key={key} value={block.value} />;
                    case "text":
                      return <TextBlock key={key} value={block.value} />;
                    case "highlight":
                      return <HighlightBlock key={key} value={block.value} />;
                    case "list":
                      return <ListBlock key={key} items={block.items} />;
                    default:
                      return null;
                  }
                })
              ) : (

                <div className="space-y-5">

                  {topic.explanation && (
                    <p className="text-slate-300 leading-7">
                      {topic.explanation}
                    </p>
                  )}

                  {topic.example && (
                    <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                      <p className="text-green-300 text-sm font-semibold mb-2">
                        Example
                      </p>

                      {typeof topic.example === "string" ? (
                        <p className="text-slate-200">{topic.example}</p>
                      ) : (
                        <div className="space-y-1">
                          {topic.example.good && (
                            <p className="text-green-300">✔ {topic.example.good}</p>
                          )}
                          {topic.example.bad && (
                            <p className="text-red-300">✘ {topic.example.bad}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {topic.tips && (
                    <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                      <p className="text-yellow-300 text-sm font-semibold mb-2">
                        Tip
                      </p>

                      {typeof topic.tips === "string" ? (
                        <p className="text-slate-200">{topic.tips}</p>
                      ) : (
                        <ul className="space-y-1">
                          {Object.values(topic.tips).map((tip, i) => (
                            <li key={i} className="text-slate-200">• {tip}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {topic.importantQuestions && (
                    <div>
                      <p className="text-blue-400 font-semibold mb-2">
                        Important Questions
                      </p>

                      <ul className="space-y-2">
                        {topic.importantQuestions.map((q, i) => (
                          <li key={i} className="text-slate-300 flex gap-2">
                            <span className="text-blue-500">•</span> {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

              )}

            </section>
          );
        })}

      </main>
    </div>
  );
}