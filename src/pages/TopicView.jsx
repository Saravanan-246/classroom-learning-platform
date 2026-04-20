import { useParams, Link, Navigate } from "react-router-dom";
import { subjectsData } from "../data";
import VideoPlayer from "../components/VideoPlayer";
import {
  ChevronLeft,
  ChevronDown,
  ExternalLink,
  BookOpen,
  PlayCircle,
} from "lucide-react";
import { useState } from "react";

export default function TopicView() {
  const { id } = useParams();
  const [openTitle, setOpenTitle] = useState(false);

  let topic = null;
  let subject = null;

  // SEARCH LOGIC
  subjectsData.forEach((s) => {
    s.sections?.forEach((sec) => {
      sec.groups?.forEach((g) => {
        g.topics?.forEach((t) => {
          if (t.id === id) {
            topic = t;
            subject = s;
          }
        });
      });
    });
  });

  if (!topic || !subject) return <Navigate to="/" replace />;

  const resources = topic.resources || [];
  const isGPT = resources.some((r) => r.type === "link");
  const gptLink = resources.find((r) => r.type === "link")?.url;

  // PLAYLIST (SAFE STATIC)
  const playlistUrl =
    "https://youtube.com/playlist?list=PL5OU27lGzKQAg_NfT_4V7MG6NE6A4KfVO";

  // ✅ FIXED THUMBNAIL (use known first video id)
  const playlistThumbnail =
    "https://img.youtube.com/vi/teukpjpE9sA/maxresdefault.jpg";

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* HEADER */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#020617]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <Link
              to={`/subject/${subject.id}`}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <ChevronLeft size={20} />
            </Link>

            <div>
              <h1 className="text-lg md:text-xl font-bold">
                {topic.title.split("(")[0]}
              </h1>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <PlayCircle size={14} className="text-indigo-400" />
            <span className="text-xs text-white/70">
              {isGPT ? "Reading Mode" : "Video"}
            </span>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-5 py-10">

        {isGPT ? (
          <div className="text-center p-12 bg-[#03081a] border border-white/10 rounded-2xl">
            <BookOpen className="mx-auto mb-4 text-indigo-400" size={40} />
            <h2 className="text-xl font-bold mb-4">Study Material</h2>
            <a
              href={gptLink}
              target="_blank"
              className="px-6 py-3 bg-indigo-600 rounded-xl"
            >
              Open Notes
            </a>
          </div>
        ) : (
          <div className={`grid grid-cols-1 ${subject.id === "or" ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-8`}>

            {/* VIDEO */}
            <div className="lg:col-span-2 space-y-6">
              {resources.map((res) => (
                <VideoPlayer key={res.id} resource={res} />
              ))}
            </div>

            {/* PLAYLIST PANEL (ONLY OR) */}
            {subject.id === "or" && (
              <div className="lg:col-span-1">
                <div className="sticky top-24">

                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#03081a] shadow-lg">

                    {/* Thumbnail */}
                    <a href={playlistUrl} target="_blank" className="block relative group">
                      <img
                        src={playlistThumbnail}
                        alt="Playlist"
                        className="w-full h-44 object-cover"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-xl">
                          ▶
                        </div>
                      </div>
                    </a>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-3">
                        Operations Research Playlist
                      </h3>

                      <a
                        href={playlistUrl}
                        target="_blank"
                        className="block w-full text-center px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
                      >
                        Open Playlist
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}