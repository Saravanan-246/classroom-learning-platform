import { Link } from "react-router-dom";

export default function TopicCard({ topic, subjectId }) {
  const resourcesCount = topic?.resources?.length ?? 0;
  const topicId = topic?.id ?? "";

  const targetPath =
    subjectId === "cn"
      ? `/learn/${subjectId}/${topicId}`
      : `/topic/${topicId}`;

  if (!topicId) return null;

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

        {/* 🔥 LEFT ACCENT BAR */}
        <div className="
          absolute left-0 top-0 h-full w-[3px]
          bg-gradient-to-b from-blue-500 to-blue-500/10
          opacity-80

          group-hover:w-[4px]
          group-hover:opacity-100
          transition-all duration-300
        " />

        {/* 🔥 SOFT GLOW */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition duration-500
          bg-gradient-to-br from-blue-500/20 via-transparent to-transparent
        " />

        {/* 🔝 TOP */}
        <div className="relative flex items-center justify-between mb-4">

          {/* ICON */}
          <div className="
            w-10 h-10 flex items-center justify-center
            rounded-lg

            bg-blue-500/10 text-blue-400
            group-hover:bg-blue-600 group-hover:text-white

            transition-all duration-300
          ">
            <svg className="w-5 h-5" fill="none" stroke="currentColor">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-6.518-3.73A1 1 0 007 8.265v7.47a1 1 0 001.234.97l6.518-1.863A1 1 0 0015 13.882v-1.764a1 1 0 00-.248-.65z"
              />
            </svg>
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

        {/* 🔥 TITLE */}
        <h3 className="
          relative text-[15px] font-semibold
          text-blue-400
          group-hover:text-blue-300
          transition leading-snug line-clamp-2
        ">
          {topic?.title || "Untitled Topic"}
        </h3>

        {/* 🔥 SUBTEXT */}
        <p className="
          text-xs text-slate-400 mt-2
          leading-relaxed
        ">
          Learn concept • examples • tips
        </p>

        {/* 🔥 CTA */}
        <div className="mt-5 flex items-center justify-between text-xs">

          <span className="
            text-blue-400 group-hover:text-blue-300
            transition font-medium
          ">
            Open →
          </span>

          {/* 🔥 DOT ANIMATION */}
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
    </Link>
  );
}