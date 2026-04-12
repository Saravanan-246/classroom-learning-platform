import { useNavigate } from "react-router-dom";

export default function SubjectCard({ subject }) {
  const navigate = useNavigate();

  let topicCount = 0;
  let notesCount = 0;

  // 🔥 OLD STRUCTURE
  if (subject?.sections) {
    subject.sections.forEach((section) => {
      section.groups?.forEach((group) => {
        group.topics?.forEach((topic) => {
          if (!topic?.resources) return;
          const hasLink = topic.resources.some((r) => r.type === "link");
          if (hasLink) notesCount++;
          else topicCount++;
        });

        group.subGroups?.forEach((sub) => {
          sub.topics?.forEach((topic) => {
            if (!topic?.resources) return;
            const hasLink = topic.resources.some((r) => r.type === "link");
            if (hasLink) notesCount++;
            else topicCount++;
          });
        });
      });
    });
  }

  // 🔥 NEW STRUCTURE
  if (subject?.units) {
    subject.units.forEach((unit) => {
      unit?.topics?.forEach(() => topicCount++);
    });
  }

  return (
    <div
      onClick={() => navigate(`/subject/${subject?.id}`)}
      className="
        group cursor-pointer h-full relative overflow-hidden
        rounded-2xl p-6

        bg-gradient-to-b from-[#0b1220] to-[#020617]
        border border-white/10

        transition-all duration-300
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.9)]
      "
    >

      {/* 🔥 SOFT GLOW */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-500
        bg-gradient-to-br from-blue-500/20 via-transparent to-transparent
      " />

      {/* 🔥 TOP */}
      <div className="relative flex items-start justify-between mb-6">

        {/* ICON */}
        <div className="
          w-12 h-12 flex items-center justify-center
          rounded-xl

          bg-blue-500/10 text-blue-400
          group-hover:bg-blue-600 group-hover:text-white

          transition-all duration-300
        ">
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2"
            />
          </svg>
        </div>

        {/* COUNTS */}
        <div className="flex flex-col items-end gap-2 text-[11px]">

          {topicCount > 0 && (
            <span className="
              bg-white/5 text-white/70
              px-3 py-1 rounded-full
              border border-white/10
              backdrop-blur-sm
            ">
              {topicCount} Topics
            </span>
          )}

          {notesCount > 0 && (
            <span className="
              bg-blue-500/20 text-blue-300
              px-3 py-1 rounded-full
              border border-blue-500/30
            ">
              {notesCount} Notes
            </span>
          )}

        </div>

      </div>

      {/* 🔥 TITLE */}
      <h3 className="
        relative text-lg sm:text-xl font-semibold
        text-blue-400
        group-hover:text-blue-300
        transition leading-snug
      ">
        {subject?.name || "Untitled Subject"}
      </h3>

      {/* 🔥 DESCRIPTION */}
      <p className="
        relative text-sm text-slate-400
        mt-2 leading-relaxed
        line-clamp-2
      ">
        {subject?.desc || subject?.description || "Explore topics and resources"}
      </p>

      {/* 🔥 CTA */}
      <div className="mt-6 flex items-center justify-between text-xs">

        <span className="
          text-blue-400 group-hover:text-blue-300
          transition font-medium
        ">
          Explore →
        </span>

        {/* 🔥 ACTIVE DOT */}
        <span className="
          h-2 w-2 rounded-full bg-blue-500
          opacity-60 group-hover:opacity-100
          group-hover:scale-125 transition
        " />

      </div>

      {/* 🔥 DIVIDER */}
      <div className="
        mt-5 h-[1px] w-full
        bg-gradient-to-r from-transparent via-white/10 to-transparent
      " />

    </div>
  );
}