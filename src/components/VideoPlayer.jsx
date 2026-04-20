import { useState, useEffect } from "react";

export default function VideoPlayer({ resource }) {
  const [isMobile, setIsMobile] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;
    setIsMobile(/android|iphone|ipad|ipod/i.test(ua.toLowerCase()));
  }, []);

  const isYouTube = resource?.type === "youtube";

  // ✅ Detect playlist
  const isPlaylist = resource?.url?.includes("list=");

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

  const getPlaylistId = (url) => {
    try {
      return url.split("list=")[1]?.split("&")[0];
    } catch {
      return null;
    }
  };

  const videoId = isYouTube ? getYouTubeId(resource.url) : null;
  const playlistId = isPlaylist ? getPlaylistId(resource.url) : null;

  const openInApp = () => {
    if (!resource?.url) return;

    let appUrl = resource.url;

    if (isYouTube && videoId && !isPlaylist) {
      appUrl = `vnd.youtube://${videoId}`;
    }

    window.location.href = appUrl;

    setTimeout(() => {
      window.open(resource.url, "_blank", "noopener,noreferrer");
    }, 800);
  };

  // 🔗 NON-YOUTUBE (same as before)
  if (!isYouTube) {
    return (
      <div
        onClick={openInApp}
        className="
          cursor-pointer rounded-xl px-3 py-2
          bg-white/5 border border-white/10
          hover:border-indigo-500/40
          transition
        "
      >
        <p className="text-sm text-white truncate">
          {resource.title || "Open Resource"}
        </p>
      </div>
    );
  }

  // ❌ FALLBACK
  if (!videoId && !isPlaylist) {
    return (
      <div
        onClick={openInApp}
        className="
          cursor-pointer rounded-xl py-6 text-center
          bg-red-500/10 border border-red-500/40
        "
      >
        <p className="text-sm text-red-400">⚠️ Cannot load</p>
      </div>
    );
  }

  // 📱 MOBILE
  if (isMobile) {
    return (
      <div
        onClick={openInApp}
        className="
          cursor-pointer rounded-xl overflow-hidden
          border border-white/10
        "
      >
        <div className="relative aspect-video">
          <img
            src={
              videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : "https://img.youtube.com/vi/teukpjpE9sA/hqdefault.jpg"
            }
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-sm">
              ▶
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 💻 DESKTOP
  return (
    <div className="rounded-xl overflow-hidden border border-white/10">
      <div className="relative aspect-video bg-black">

        {!play && (
          <div
            onClick={() => setPlay(true)}
            className="absolute inset-0 cursor-pointer group"
          >
            <img
              src={
                videoId
                  ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                  : "https://img.youtube.com/vi/teukpjpE9sA/hqdefault.jpg"
              }
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                ▶
              </div>
            </div>
          </div>
        )}

        {play && (
          <iframe
            className="w-full h-full"
            src={
              isPlaylist
                ? `https://www.youtube.com/embed/videoseries?list=${playlistId}`
                : `https://www.youtube.com/embed/${videoId}?autoplay=1`
            }
            title="YouTube player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}