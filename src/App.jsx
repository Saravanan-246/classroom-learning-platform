import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubjectDetail from "./pages/SubjectDetail";
import TopicView from "./pages/TopicView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:id" element={<SubjectDetail />} />
        <Route path="/topic/:id" element={<TopicView />} />
      </Routes>
    </BrowserRouter>
  );
}