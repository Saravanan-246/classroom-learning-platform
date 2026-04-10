import { useNavigate } from "react-router-dom";

export default function SubjectCard({ subject }) {
  const navigate = useNavigate();

  // 🔥 FIX: count topics from sections
  const totalTopics =
    subject.sections?.reduce(
      (acc, section) => acc + (section.topics?.length || 0),
      0
    ) || 0;

  return (
    <div
      onClick={() => navigate(`/subject/${subject.id}`)}
      className="cursor-pointer group h-full bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-lg"
    >
      {/* Top */}
      <div className="flex items-center justify-between mb-4">

        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          </svg>
        </div>

        {/* Topic Count */}
        <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">
          {totalTopics} {totalTopics === 1 ? "Topic" : "Topics"}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-indigo-600 transition">
        {subject.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
        {subject.description || "Explore topics and resources"}
      </p>
    </div>
  );
}