import { useParams, Link, Navigate } from "react-router-dom";
import { subjectsData } from "../data";
import VideoPlayer from "../components/VideoPlayer";

// 🔥 ADD HERO IMAGE
import heroBg from "../assets/topview.png";

export default function TopicView() {
  const { id } = useParams();

  let currentTopic = null;
  let currentSubject = null;
  let currentGroup = null;
  let currentSubGroup = null;

  // 🔍 FIND TOPIC
  for (const subject of subjectsData) {
    for (const section of subject.sections || []) {
      for (const group of section.groups || []) {

        const found = group.topics?.find((t) => t.id === id);
        if (found) {
          currentTopic = found;
          currentSubject = subject;
          currentGroup = group;
          break;
        }

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
  <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

    {/* 🔥 HERO FINAL */}
    <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] overflow-hidden bg-[#020617]">

      {/* 🔥 BLUR BACKGROUND */}
      <img
        src={heroBg}
        alt=""
        className="
          absolute inset-0 w-full h-full
          object-cover
          blur-3xl scale-110 opacity-50
        "
      />

      {/* 🔥 MAIN IMAGE */}
      <img
        src={heroBg}
        alt=""
        className="
          absolute inset-0 w-full h-full
          object-contain md:object-cover
          object-top
          md:scale-[0.9]
        "
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔥 SIDE FADE (DESKTOP ONLY) */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] opacity-60"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">

        {/* BREADCRUMB */}
        <div className="text-sm text-white/80 mb-4 flex flex-wrap gap-2">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>

          <Link to={`/subject/${currentSubject.id}`} className="hover:text-white">
            {currentSubject.name}
          </Link>

          {currentGroup && (
            <>
              <span>/</span>
              <span>{currentGroup.title}</span>
            </>
          )}

          {currentSubGroup && (
            <>
              <span>/</span>
              <span className="text-indigo-300">{currentSubGroup.title}</span>
            </>
          )}
        </div>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          {currentTopic.title}
        </h1>

        <p className="mt-3 text-white/90 max-w-xl">
          Watch and understand this topic clearly with structured explanations.
        </p>

        {/* BACK BUTTON */}
        <Link
          to={`/subject/${currentSubject.id}`}
          className="
            inline-block mt-6 px-5 py-2.5
            rounded-xl bg-indigo-600 hover:bg-indigo-500
            text-sm font-medium transition
            shadow-lg shadow-indigo-600/30
          "
        >
          ← Back to {currentSubject.name}
        </Link>

      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-[#020617]"></div>

    </div>

    {/* 📚 CONTENT */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-16 pb-20 relative z-10">

      <div className="
        bg-white/5 backdrop-blur-xl
        rounded-3xl p-5 md:p-8
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
      ">

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

        {/* 🎬 VIDEOS */}
        {currentTopic.resources?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {currentTopic.resources.map((resource) => (
              <div
                key={resource.id}
                className="
                  group bg-[#020617]
                  rounded-2xl overflow-hidden
                  border border-white/10
                  hover:border-indigo-500
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-2xl
                "
              >

                {/* 🎥 VIDEO */}
                <div className="w-full aspect-video bg-black">
                  <VideoPlayer resource={resource} />
                </div>

                {/* TITLE */}
                <div className="p-4">
                  <p className="text-sm text-white/90 font-medium line-clamp-2">
                    {resource.title || "Video Lesson"}
                  </p>
                </div>

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