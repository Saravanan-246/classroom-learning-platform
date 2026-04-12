import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🔥 Instant for page change (no weird delay)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}