import { useState, useEffect } from "react";

export default function VideoPlayer({ resource }) {
  const [isMobile, setIsMobile] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsMobile(/android|iphone|ipad|ipod|mobile/i.test(ua));
  }, []);

  const isYouTube = resource?.type === "youtube";

  // 🔥 ROBUST YOUTUBE ID EXTRACTOR
  const getYouTubeId = (url) => {
    try {
      const regExp =
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/;
      const match = url.match(regExp);
      return match ? match[1] : null;
    } catch {
      return null;
    }
  };

  const videoId = isYouTube ? getYouTubeId(resource.url) : null;

  // 📱 MOBILE → OPEN YOUTUBE APP
  const handleMobileOpen = () => {
    window.open(resource.url, "_blank", "noopener,noreferrer");
  };

  // 🔗 NON-YOUTUBE RESOURCE
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

  // ❌ FALLBACK IF VIDEO BLOCKED
  if (!videoId) {
    return (
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl bg-[#0f172a] border border-red-500/40 p-4 text-center"
      >
        <p className="text-sm text-red-400">⚠️ Cannot load video</p>
        <p className="text-xs text-gray-400 mt-1">Open in YouTube →</p>
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
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={resource.title}
            className="w-full h-full object-cover"
          />

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
    <div className="rounded-xl overflow-hidden bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition">

      <div className="relative aspect-video bg-black">

        {/* 🎬 BEFORE PLAY */}
        {!play && (
          <div
            onClick={() => setPlay(true)}
            className="absolute inset-0 cursor-pointer group"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={resource.title}
              className="w-full h-full object-cover"
            />

            {/* ▶ Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition">
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

        {/* ▶ AFTER CLICK (FIXED EMBED) */}
        {play && (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={resource.title}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* TITLE */}
      <div className="p-3">
        <p className="text-sm font-medium text-slate-800 dark:text-white line-clamp-2">
          {resource.title}
        </p>

        {/* 🔗 FALLBACK LINK */}
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-indigo-400 mt-1 inline-block hover:underline"
        >
          Open in YouTube →
        </a>
      </div>
    </div>
  );
}