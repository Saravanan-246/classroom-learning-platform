import { Link } from "react-router-dom";

export default function TopicCard({ topic, subjectId }) {
  const resourcesCount = topic.resources?.length || 0;

  return (
    <Link
      to={`/topic/${topic.id}`}
      state={{ subjectId }}
      className="group block h-full"
    >
      <div className="bg-white dark:bg-[#0b1220] rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

        {/* Top Row */}
        <div className="flex items-center justify-between mb-4">

          {/* Icon */}
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.73A1 1 0 007 8.265v7.47a1 1 0 001.234.97l6.518-1.863A1 1 0 0015 13.882v-1.764a1 1 0 00-.248-.65z" />
            </svg>
          </div>

          {/* Count */}
          <span className="text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full">
            {resourcesCount} {resourcesCount === 1 ? "Item" : "Items"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-1 leading-snug group-hover:text-indigo-600 transition">
          {topic.title}
        </h3>

        {/* Subtext */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Video explanation available
        </p>

      </div>
    </Link>
  );
}