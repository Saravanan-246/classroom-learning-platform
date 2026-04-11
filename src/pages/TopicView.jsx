import { useParams, Link, Navigate } from "react-router-dom";
import { subjectsData } from "../data";
import VideoPlayer from "../components/VideoPlayer";
import { ChevronLeft, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function TopicView() {
  const { id } = useParams();
  const [openTitle, setOpenTitle] = useState(false);

  let topic = null;
  let subject = null;
  let group = null;

  subjectsData.forEach((s) => {
    s.sections?.forEach((sec) => {
      sec.groups?.forEach((g) => {
        g.topics?.forEach((t) => {
          if (t.id === id) {
            topic = t;
            subject = s;
            group = g;
          }
        });

        g.subGroups?.forEach((sub) => {
          sub.topics?.forEach((t) => {
            if (t.id === id) {
              topic = t;
              subject = s;
              group = g;
            }
          });
        });
      });
    });
  });

  if (!topic || !subject) return <Navigate to="/" replace />;

  const resources = topic.resources || [];
  const isGPT = resources.some((r) => r.type === "link");
  const gptLink = resources.find((r) => r.type === "link")?.url;

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* 🔥 HEADER */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#020617]/80 border-b border-white/10">

        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-3">

            {/* BACK */}
            <Link
              to={`/subject/${subject.id}`}
              className="
                flex items-center gap-2
                px-3 py-2 rounded-lg
                bg-white/5 border border-white/10
                hover:bg-indigo-600 hover:border-indigo-500
                transition
              "
            >
              <ChevronLeft size={18} />
              <span className="text-sm font-medium">Back</span>
            </Link>

            {/* 🔥 TITLE */}
            <div className="max-w-[200px] sm:max-w-md">

              <button
                onClick={() => setOpenTitle(!openTitle)}
                className="
                  w-full text-left
                  flex items-center gap-2
                  text-base sm:text-lg md:text-xl
                  font-semibold leading-snug
                  break-words
                "
              >
                <span className="flex-1">
                  {topic.title.split("(")[0]}
                </span>

                {/* ICON */}
                <ChevronDown
                  size={16}
                  className={`
                    flex-shrink-0 text-white/50
                    transition-transform duration-300
                    ${openTitle ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* 🔥 COLLAPSE */}
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${openTitle ? "max-h-40 mt-2" : "max-h-0"}
                `}
              >
                {topic.title.includes("(") && (
                  <div className="flex flex-wrap gap-2">
                    {topic.title
                      .split("(")[1]
                      ?.replace(")", "")
                      .split(",")
                      .map((item, i) => (
                        <span
                          key={i}
                          className="
                            px-2.5 py-1
                            text-[11px] sm:text-xs
                            rounded-full
                            bg-white/10
                            text-white/70
                            border border-white/10
                          "
                        >
                          {item.trim()}
                        </span>
                      ))}
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <span className="text-xs text-white/50">
            {isGPT ? "Notes" : `${resources.length} Videos`}
          </span>

        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">

        {isGPT ? (
          <div className="
            flex flex-col items-center justify-center
            text-center py-14 sm:py-20 px-4
            border border-white/10 rounded-2xl
            bg-white/5 backdrop-blur-xl
          ">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Study Material
            </h2>

            <p className="text-xs sm:text-sm text-white/60 mb-5">
              Open full explanation and notes for this topic
            </p>

            <a
              href={gptLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full sm:w-auto
                flex items-center justify-center gap-2
                px-5 py-3 rounded-lg
                bg-indigo-600 hover:bg-indigo-500
                transition-all text-sm font-medium
                shadow-lg shadow-indigo-600/30
              "
            >
              Open Notes
              <ExternalLink size={16} />
            </a>
          </div>
        ) : (
          <>
            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white/90">
                Learning Videos
              </h2>

              <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
                {resources.length}
              </span>
            </div>

            {/* VIDEOS */}
            {resources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((res) => (
                  <div
                    key={res.id}
                    className="
                      group relative rounded-xl overflow-hidden
                      border border-white/10 bg-white/5
                      hover:border-indigo-500/40
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)]
                    "
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/10 to-transparent transition"></div>

                    <VideoPlayer resource={res} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-white/40">
                No content available
              </div>
            )}
          </>
        )}

      </div>

    </div>
  );
}