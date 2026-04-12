import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  CheckCircle2,
  Star,
  Menu,
  X,
  BookOpen,
  ChevronDown,
  Layers,
} from "lucide-react";
import cnData from "../data/cn";

/* ================= UI BLOCKS ================= */

const HeadingBlock = ({ value }) => (
  <div className="flex items-center gap-3 mt-10 mb-4">
    <div className="h-6 w-[3px] bg-blue-500 rounded-full" />
    <h2 className="text-xl font-bold text-white">{value}</h2>
  </div>
);

const TextBlock = ({ value }) => (
  <p className="text-slate-400 leading-[1.9] mb-6">{value}</p>
);

const HighlightBlock = ({ value }) => (
  <div className="bg-blue-500/5 border border-blue-500/20 p-5 rounded-xl my-6">
    <div className="flex items-center gap-2 mb-2 text-blue-400">
      <Star size={14} fill="currentColor" />
      <span className="text-xs font-bold uppercase">Key Concept</span>
    </div>
    <p className="text-slate-200 italic">{value}</p>
  </div>
);

const ListBlock = ({ items }) => (
  <ul className="grid gap-3 my-6">
    {items?.map((item, i) => (
      <li key={i} className="flex gap-3">
        <CheckCircle2 size={18} className="text-blue-500 mt-1" />
        <span className="text-slate-300">{item}</span>
      </li>
    ))}
  </ul>
);

/* ================= MAIN ================= */

export default function LearnTopics() {
  const { topicId } = useParams();

  const [active, setActive] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openUnits, setOpenUnits] = useState(false);

  const currentUnit = cnData.units.find((u) =>
    u.topics?.some((t) => t.id === topicId)
  );

  /* SCROLL PROGRESS */
  useEffect(() => {
    const update = () => {
      const h =
        document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) setScrollProgress((window.scrollY / h) * 100);
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  /* ACTIVE SECTION */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-120px 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* CLICK OUTSIDE */
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".unit-dropdown")) {
        setOpenUnits(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - 140;

    window.scrollTo({ top: y, behavior: "smooth" });
    setSidebarOpen(false);
  };

  if (!currentUnit) {
    return (
      <div className="h-screen flex items-center justify-center text-slate-500">
        Topic not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030406] text-slate-300">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#030406]/80 backdrop-blur border-b border-white/5">

        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-500"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">

          <div className="flex items-center gap-4 sm:gap-6">

            <Link to="/subject/cn" className="p-2 rounded-xl bg-white/5">
              <ChevronLeft size={20} />
            </Link>

            {/* UNIT DROPDOWN */}
            <div className="relative unit-dropdown">

              <button
                onClick={() => setOpenUnits((p) => !p)}
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5"
              >
                <Layers size={16} className="text-blue-500" />

                <div>
                  <p className="text-[10px] text-slate-500">Unit</p>
                  <p className="text-sm font-bold text-white flex gap-1">
                    {currentUnit.title.split(":")[0]}
                    <ChevronDown size={14} />
                  </p>
                </div>
              </button>

              {openUnits && (
                <div className="absolute mt-2 w-64 bg-[#0c0d0f] border rounded-xl py-2 z-50">

                  {cnData.units.map((unit) => (
                    <Link
                      key={unit.id}
                      to={`/learn/cn/${unit.topics?.[0]?.id}`}
                      onClick={() => setOpenUnits(false)}
                      className="block px-4 py-3 text-sm hover:bg-white/5"
                    >
                      {unit.title}
                    </Link>
                  ))}

                </div>
              )}

            </div>

          </div>

          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-3 bg-blue-500/10 rounded-lg"
          >
            <Menu size={22} />
          </button>

        </div>
      </nav>

      {/* SIDEBAR */}
      <div className={`fixed inset-0 z-50 ${isSidebarOpen ? "block" : "hidden"}`}>

        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setSidebarOpen(false)}
        />

        <aside className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#07080a] p-6">

          <div className="flex justify-between mb-6">
            <h2 className="text-white font-bold flex gap-2">
              <BookOpen size={20} /> Topics
            </h2>

            <button onClick={() => setSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {currentUnit.topics.map((t, i) => (
            <button
              key={t.id}
              onClick={() => handleScroll(t.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg ${
                active === t.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-400"
              }`}
            >
              {i + 1}. {t.title}
            </button>
          ))}

        </aside>
      </div>

      {/* CONTENT */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-20">

        {currentUnit.topics.map((topic) => (
          <section
            key={topic.id}
            id={topic.id}
            className="mb-24 scroll-mt-32"
          >

            <h2 className="text-3xl font-bold text-white mb-6">
              {topic.title}
            </h2>

            {(topic.sections || []).map((block, i) => {
              const key = `${topic.id}-${i}`;

              switch (block.type) {
                case "heading":
                  return <HeadingBlock key={key} value={block.value} />;
                case "text":
                  return <TextBlock key={key} value={block.value} />;
                case "highlight":
                  return <HighlightBlock key={key} value={block.value} />;
                case "list":
                  return <ListBlock key={key} items={block.items} />;

                case "example":
                  return (
                    <div key={key} className="bg-emerald-500/5 p-5 rounded-xl my-6">
                      {block.value}
                    </div>
                  );

                case "tip":
                  return (
                    <div key={key} className="bg-amber-500/5 p-5 rounded-xl my-6">
                      {block.value}
                    </div>
                  );

                default:
                  return null;
              }
            })}

          </section>
        ))}

      </main>

    </div>
  );
}