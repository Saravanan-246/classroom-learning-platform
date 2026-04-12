import { useParams, Link, Navigate } from "react-router-dom";
import { subjectsData } from "../data";
import VideoPlayer from "../components/VideoPlayer";
import { ChevronLeft, ChevronDown, ExternalLink, BookOpen, PlayCircle } from "lucide-react";
import { useState } from "react";

export default function TopicView() {
  const { id } = useParams();
  const [openTitle, setOpenTitle] = useState(false);

  let topic = null;
  let subject = null;
  let group = null;

  // Logic Unchanged: Searching for topic and subject
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
    <div className="min-h-screen bg-[#020617] text-white selection:bg-indigo-500/30">
      
      {/* --- PREMIUM HEADER --- */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#020617]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            {/* Back Button */}
            <Link
              to={`/subject/${subject.id}`}
              className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
            >
              <ChevronLeft size={20} />
            </Link>

            {/* Title & Badge Area */}
            <div className="flex flex-col">
              <button
                onClick={() => setOpenTitle(!openTitle)}
                className="flex items-center gap-2 group"
              >
                <h1 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  {topic.title.split("(")[0]}
                </h1>
                <ChevronDown
                  size={16}
                  className={`text-white/40 transition-transform duration-500 ${openTitle ? "rotate-180" : ""}`}
                />
              </button>
              
              {/* Tags/Categories Collapse */}
              <div className={`overflow-hidden transition-all duration-500 ${openTitle ? "max-h-20 mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
                {topic.title.includes("(") && (
                  <div className="flex flex-wrap gap-2">
                    {topic.title.split("(")[1]?.replace(")", "").split(",").map((item, i) => (
                      <span key={i} className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Status */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <div className={`w-1.5 h-1.5 rounded-full ${isGPT ? 'bg-emerald-500' : 'bg-indigo-500 animate-pulse'}`}></div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">
              {isGPT ? "Reading Mode" : "Video Tutorial"}
            </span>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-6xl mx-auto px-5 py-10">

        {isGPT ? (
          /* Notes Style UI */
          <div className="relative group max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex flex-col items-center text-center p-12 md:p-20 border border-white/10 rounded-3xl bg-[#03081a] backdrop-blur-xl">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20">
                <BookOpen className="text-indigo-400" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">Study Material</h2>
              <p className="text-slate-400 text-base md:text-lg mb-8 max-w-md">
                Access deep-dive explanations, diagrams, and summarized notes for this concept.
              </p>
              <a
                href={gptLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-xl shadow-indigo-600/20 active:scale-95 hover:-translate-y-1"
              >
                Open Full Notes
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        ) : (
          /* Video Grid Style UI */
          <>
            <div className="flex items-center justify-between mb-10 border-l-4 border-indigo-600 pl-4">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Learning Gallery</h2>
                <p className="text-slate-500 text-sm mt-1">Curated expert explanations for this topic</p>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <PlayCircle size={16} className="text-indigo-400" />
                <span className="text-sm font-bold text-white/80">{resources.length} Lessons</span>
              </div>
            </div>

            {resources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {resources.map((res) => (
                  <div
                    key={res.id}
                    className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#03081a] hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-indigo-500/5 to-transparent transition-opacity duration-500"></div>
                    
                    <div className="p-1">
                      <VideoPlayer resource={res} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-white/5 rounded-3xl">
                <div className="text-white/20 mb-4 italic text-lg">No lessons found yet.</div>
                <Link to="/" className="text-indigo-400 text-sm font-medium hover:underline">Explore other topics</Link>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}