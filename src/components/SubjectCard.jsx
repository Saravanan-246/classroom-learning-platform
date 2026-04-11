import { useNavigate } from "react-router-dom";

export default function SubjectCard({ subject }) {
  const navigate = useNavigate();

  // 🔥 COUNT LOGIC (SEPARATE TYPES)
  let topicCount = 0;
  let notesCount = 0;

  subject.sections?.forEach((section) => {
    section.groups?.forEach((group) => {
      group.topics?.forEach((topic) => {
        if (!topic.resources || topic.resources.length === 0) return;

        const hasLink = topic.resources.some((r) => r.type === "link");

        if (hasLink) {
          notesCount++; // GPT / Notes
        } else {
          topicCount++; // Video topics
        }
      });

      group.subGroups?.forEach((sub) => {
        sub.topics?.forEach((topic) => {
          if (!topic.resources || topic.resources.length === 0) return;

          const hasLink = topic.resources.some((r) => r.type === "link");

          if (hasLink) {
            notesCount++;
          } else {
            topicCount++;
          }
        });
      });
    });
  });

  return (
    <div
      onClick={() => navigate(`/subject/${subject.id}`)}
      className="
        group cursor-pointer h-full
        relative overflow-hidden
        rounded-2xl p-6
        bg-gradient-to-b from-white/5 to-white/0
        backdrop-blur-xl
        border border-white/10
        transition-all duration-300
        hover:-translate-y-2
        hover:border-indigo-500/50
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]
      "
    >

      {/* 🔥 GLOW */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-500
        bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent
      "></div>

      {/* 🔝 TOP */}
      <div className="relative flex items-center justify-between mb-5">

        {/* ICON */}
        <div className="
          w-12 h-12 flex items-center justify-center
          rounded-xl
          bg-indigo-500/10 text-indigo-400
          group-hover:bg-indigo-600 group-hover:text-white
          transition-all duration-300
        ">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2"
            />
          </svg>
        </div>

        {/* 🔥 SMART COUNT */}
        <div className="flex flex-col items-end gap-1 text-[11px]">

          {topicCount > 0 && (
            <span className="
              bg-white/10 text-white/70
              px-2.5 py-0.5 rounded-full border border-white/10
            ">
               {topicCount} Topics
            </span>
          )}

          {notesCount > 0 && (
            <span className="
              bg-indigo-500/20 text-indigo-300
              px-2.5 py-0.5 rounded-full border border-indigo-500/30
            ">
               {notesCount} Notes
            </span>
          )}

        </div>
      </div>

      {/* 🔥 TITLE */}
      <h3 className="
        relative text-lg font-semibold
        text-white
        group-hover:text-indigo-400
        transition
      ">
        {subject.name}
      </h3>

      {/* 🔥 DESC */}
      <p className="
        relative text-sm text-white/60
        mt-2 line-clamp-2
      ">
        {subject.desc || subject.description || "Explore topics and resources"}
      </p>

      {/* 🔥 CTA */}
      <div className="
        mt-4 text-xs text-indigo-400
        opacity-0 group-hover:opacity-100
        translate-y-1 group-hover:translate-y-0
        transition
      ">
        Open Subject →
      </div>

      {/* 🔥 DIVIDER */}
      <div className="
        mt-5 h-[1px] w-full
        bg-gradient-to-r from-transparent via-white/10 to-transparent
      "></div>

    </div>
  );
}