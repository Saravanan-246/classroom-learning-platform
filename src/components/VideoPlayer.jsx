import { useState, useEffect } from "react";

export default function VideoPlayer({ resource }) {
  const [isMobile, setIsMobile] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsMobile(/android|iphone|ipad|ipod|mobile/i.test(ua));
  }, []);

  const isYouTube = resource.type === "youtube";

  // 🔥 Extract YouTube ID (safe)
  const getYouTubeId = (url) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname === "youtu.be") {
        return parsed.pathname.slice(1);
      }
      return parsed.searchParams.get("v");
    } catch {
      return null;
    }
  };

  const videoId = isYouTube ? getYouTubeId(resource.url) : null;

  // 📱 Mobile → open app
  const handleMobileOpen = () => {
    window.open(resource.url, "_blank", "noopener,noreferrer");
  };

  // 🔗 Non YouTube link
  if (!isYouTube) {
    return (
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:shadow-md hover:border-indigo-500 transition"
      >
        <p className="text-sm font-medium text-slate-800 dark:text-white line-clamp-2">
          {resource.title || "Open Resource"}
        </p>
      </a>
    );
  }

  // 📱 MOBILE VIEW
  if (isMobile) {
    return (
      <div
        onClick={handleMobileOpen}
        className="cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-red-500 transition"
      >
        <div className="relative aspect-video">
          {videoId ? (
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={resource.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No Preview
            </div>
          )}

          {/* ▶ Play Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-lg shadow-md">
              ▶
            </div>
          </div>
        </div>

        <div className="p-3">
          <p className="text-sm font-medium text-slate-800 dark:text-white line-clamp-1">
            {resource.title}
          </p>
          <p className="text-xs text-red-500 mt-1">Open in YouTube</p>
        </div>
      </div>
    );
  }

  // 💻 DESKTOP VIEW
  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition">

      <div className="relative aspect-video bg-black">

        {/* 🎬 BEFORE PLAY */}
        {!play && (
          <div
            onClick={() => setPlay(true)}
            className="absolute inset-0 cursor-pointer group"
          >
            {videoId && (
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={resource.title}
                className="w-full h-full object-cover"
              />
            )}

            {/* ▶ Custom Play */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* ▶ AFTER CLICK */}
        {play && videoId && (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={resource.title}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <div className="p-3">
        <p className="text-sm font-medium text-slate-800 dark:text-white line-clamp-2">
          {resource.title}
        </p>
      </div>
    </div>
  );
}