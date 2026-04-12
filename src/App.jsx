import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import SubjectDetail from "./pages/SubjectDetail";
import TopicView from "./pages/TopicView";
import LearnTopics from "./pages/LearnTopics";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:id" element={<SubjectDetail />} />
        <Route path="/topic/:id" element={<TopicView />} />
        <Route path="/learn/:subjectId/:topicId" element={<LearnTopics />} />
      </Routes>
    </BrowserRouter>
  );
}