import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import SubjectDetail from "./pages/SubjectDetail";
import TopicView from "./pages/TopicView";
import LearnTopics from "./pages/LearnTopics";

/* ---------- SCROLL RESET ---------- */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

/* ---------- MAIN APP ---------- */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-[#020617] text-white">
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* SUBJECT PAGE */}
          <Route path="/subject/:id" element={<SubjectDetail />} />

          {/* TOPIC VIEW */}
          <Route path="/topic/:id" element={<TopicView />} />

          {/* LEARNING FLOW */}
          <Route path="/learn/:subjectId/:topicId" element={<LearnTopics />} />

          {/* OPTIONAL 404 (SAFE ADD) */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-screen text-center">
                <div>
                  <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
                  <p className="text-white/60 text-sm">
                    The page you are looking for does not exist.
                  </p>
                </div>
              </div>
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}