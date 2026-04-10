import { useParams, Link, Navigate } from "react-router-dom";
import { subjectsData } from "../data";
import VideoPlayer from "../components/VideoPlayer";

export default function TopicView() {
  const { id } = useParams();

  let currentTopic = null;
  let currentSubject = null;
  let currentGroup = null;
  let currentSubGroup = null;

  // 🔥 FIND TOPIC (WITH SUBGROUP SUPPORT)
  for (const subject of subjectsData) {
    for (const section of subject.sections || []) {
      for (const group of section.groups || []) {

        // ✅ direct topics
        const found = group.topics?.find((t) => t.id === id);
        if (found) {
          currentTopic = found;
          currentSubject = subject;
          currentGroup = group;
          break;
        }

        // ✅ subGroups topics
        for (const sub of group.subGroups || []) {
          const subFound = sub.topics?.find((t) => t.id === id);
          if (subFound) {
            currentTopic = subFound;
            currentSubject = subject;
            currentGroup = group;
            currentSubGroup = sub;
            break;
          }
        }
      }
    }
  }

  if (!currentTopic || !currentSubject) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* 🔥 HERO */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 px-6 pt-16 pb-24 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* 🔥 BREADCRUMB */}
          <div className="text-sm text-white/80 mb-4 flex flex-wrap gap-2">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>

            <Link
              to={`/subject/${currentSubject.id}`}
              className="hover:text-white transition"
            >
              {currentSubject.name}
            </Link>

            {currentGroup && (
              <>
                <span>/</span>
                <span className="text-white/90">{currentGroup.title}</span>
              </>
            )}

            {currentSubGroup && (
              <>
                <span>/</span>
                <span className="text-indigo-200">{currentSubGroup.title}</span>
              </>
            )}
          </div>

          {/* 🔥 TITLE */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {currentTopic.title}
          </h1>

          <p className="mt-3 text-white/80 max-w-xl">
            Watch and understand this topic clearly with structured explanations.
          </p>

          {/* 🔥 BACK BUTTON */}
          <Link
            to={`/subject/${currentSubject.id}`}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-white/20 backdrop-blur text-white text-sm font-medium hover:bg-white/30 transition"
          >
            ← Back to {currentSubject.name}
          </Link>
        </div>
      </div>

      {/* 📚 CONTENT */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 pb-20 relative z-20">

        <div className="bg-gradient-to-b from-[#0f172a] to-[#020617] rounded-3xl p-6 md:p-10 border border-gray-800 shadow-xl">

          {/* HEADER */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Learning Resources
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Video explanations for this topic
              </p>
            </div>

            <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
              {currentTopic.resources?.length || 0} Videos
            </span>
          </div>

          {/* 🔥 VIDEOS */}
          {currentTopic.resources?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {currentTopic.resources.map((resource) => (
                <div
                  key={resource.id}
                  className="group bg-[#020617] rounded-2xl p-4 border border-gray-800 hover:border-indigo-500 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <VideoPlayer resource={resource} />
                </div>
              ))}

            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              No resources available for this topic.
            </div>
          )}

        </div>
      </div>
    </div>
  );
}