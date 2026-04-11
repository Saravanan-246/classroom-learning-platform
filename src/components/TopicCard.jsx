import { Link } from "react-router-dom";

export default function TopicCard({ topic, subjectId }) {
  const resourcesCount = topic.resources?.length || 0;

  return (
    <Link
      to={`/topic/${topic.id}`}
      state={{ subjectId }}
      className="group block h-full"
    >
      <div
        className="
          relative h-full overflow-hidden
          rounded-2xl p-5
          bg-gradient-to-b from-white/5 to-white/[0.02]
          backdrop-blur-xl
          border border-white/10
          transition-all duration-300
          hover:-translate-y-1.5
          hover:border-indigo-500/40
          hover:shadow-[0_12px_35px_rgba(0,0,0,0.7)]
        "
      >

        {/* 🔥 GLOW */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition duration-500
          bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent
        "></div>

        {/* 🔝 TOP */}
        <div className="relative flex items-center justify-between mb-4">

          {/* ICON */}
          <div className="
            w-10 h-10 flex items-center justify-center
            rounded-lg
            bg-indigo-500/10 text-indigo-400
            group-hover:bg-indigo-600 group-hover:text-white
            transition-all duration-300
          ">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-6.518-3.73A1 1 0 007 8.265v7.47a1 1 0 001.234.97l6.518-1.863A1 1 0 0015 13.882v-1.764a1 1 0 00-.248-.65z"
              />
            </svg>
          </div>

          {/* 🔥 COUNT */}
          <span className="
            text-[11px] font-medium
            bg-white/10 text-white/70
            px-2.5 py-1 rounded-full
            border border-white/10
            group-hover:bg-indigo-500/20 group-hover:text-indigo-300
            transition
          ">
            {resourcesCount} {resourcesCount === 1 ? "Video" : "Videos"}
          </span>
        </div>

        {/* 🔥 TITLE */}
        <h3 className="
          relative text-base font-semibold
          text-white leading-snug
          group-hover:text-indigo-400
          transition
        ">
          {topic.title}
        </h3>

        {/* 🔥 SUBTEXT */}
        <p className="
          relative text-sm text-white/50 mt-1
        ">
          Learn with video explanations
        </p>

        {/* 🔥 CTA */}
        <div className="
          mt-4 flex items-center gap-2
          text-xs text-indigo-400
          opacity-0 group-hover:opacity-100
          translate-y-1 group-hover:translate-y-0
          transition-all duration-300
        ">
          Start Learning →
        </div>

        {/* 🔥 DIVIDER */}
        <div className="
          mt-4 h-[1px] w-full
          bg-gradient-to-r from-transparent via-white/10 to-transparent
        "></div>

      </div>
    </Link>
  );
}