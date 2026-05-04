import { Link } from "react-router-dom";

/* ---------- GLOBAL SLUG HELPER ---------- */
const generateSlug = (text = "") =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export default function TopicCard({ topic, subjectId }) {
  const resourcesCount = topic?.resources?.length ?? 0;

  /* ---------- ALWAYS NORMALIZE ID (FIX 🔥) ---------- */
  const topicId = generateSlug(topic?.id || topic?.title);

  if (!topicId) return null;

  /* ---------- ROUTING ---------- */
  const isLearnMode = subjectId === "cn" || subjectId === "toc";

  const targetPath = isLearnMode
    ? `/learn/${subjectId}/${topicId}`
    : `/topic/${topicId}`;

  return (
    <Link to={targetPath} className="group block h-full">
      <div
        className="
          relative h-full overflow-hidden
          rounded-2xl p-5 pl-6
          bg-gradient-to-b from-[#0b1220] to-[#020617]
          border border-white/10
          transition-all duration-300
          hover:-translate-y-1.5
          hover:border-blue-500/40
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.85)]
        "
      >

        {/* LEFT ACCENT */}
        <div className="
          absolute left-0 top-0 h-full w-[3px]
          bg-gradient-to-b from-blue-500 to-blue-500/10
          opacity-80
          group-hover:w-[4px]
          group-hover:opacity-100
          transition-all duration-300
        " />

        {/* GLOW */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition duration-500
          bg-gradient-to-br from-blue-500/20 via-transparent to-transparent
        " />

        {/* TOP */}
        <div className="relative flex items-center justify-between mb-4">

          {/* ICON */}
          <div className="
            w-10 h-10 flex items-center justify-center
            rounded-lg
            bg-blue-500/10 text-blue-400
            group-hover:bg-blue-600 group-hover:text-white
            transition-all duration-300
          ">
            ▶
          </div>

          {/* BADGE */}
          <span className="
            text-[11px] font-medium
            bg-white/5 text-white/70
            px-3 py-1 rounded-full
            border border-white/10
            backdrop-blur-sm
            group-hover:bg-blue-500/20
            group-hover:text-blue-300
            transition
          ">
            {resourcesCount > 0
              ? `${resourcesCount} ${resourcesCount === 1 ? "Video" : "Videos"}`
              : "Learn"}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="
          relative text-[15px] font-semibold
          text-blue-400
          group-hover:text-blue-300
          transition leading-snug line-clamp-2
        ">
          {topic?.title || "Untitled Topic"}
        </h3>

        {/* DESCRIPTION */}
        <p className="
          text-xs text-slate-400 mt-2
          leading-relaxed line-clamp-2
        ">
          {topic?.description ||
           topic?.explanation ||
           "Learn concept • examples • tips"}
        </p>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-between text-xs">
          <span className="
            text-blue-400 group-hover:text-blue-300
            transition font-medium
          ">
            Open →
          </span>

          <span className="
            h-2 w-2 rounded-full bg-blue-500
            opacity-60 group-hover:opacity-100
            group-hover:scale-125 transition
          " />
        </div>

        {/* DIVIDER */}
        <div className="
          mt-5 h-[1px] w-full
          bg-gradient-to-r from-transparent via-white/10 to-transparent
        " />

      </div>
    </Link>
  );
}