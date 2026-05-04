const unit2 = {
  id: "unit2",
  title: "Unit 2 – Finite Automata & Regex",
  topics: [
    {
      title: "Finite Automata (DFA, NFA, ε-NFA)",
      important: true,
      difficulty: "easy",
      subtopics: ["DFA", "NFA", "ε-NFA"],
      explanation:
        "Finite Automata is a machine used to check whether a string is accepted or rejected. It reads input symbol by symbol and changes states.",
      example:
        "Input: 101 → moves state by state → final state decides accept/reject",
      diagram:
        "States (circles) + transitions (arrows) + final state (double circle)",
      diagramSteps: [
        "Start from initial state",
        "Read input symbol",
        "Move to next state",
        "Check final state"
      ],
      realWorld:
        "Like a game 🎮 where you move step-by-step and reach final level to win",
      tips:
        "FA = step-by-step checking machine",
      quickSummary:
        "Reads input → changes state → final state decides result",
      importantQuestions: [
        "Define DFA, NFA, ε-NFA",
        "Difference between DFA and NFA",
        "What is ε-transition?"
      ]
    },

    {
      title: "DFA (Deterministic Finite Automata)",
      important: true,
      difficulty: "easy",
      subtopics: ["Definition", "Properties"],
      explanation:
        "In DFA, for each input symbol, there is only ONE possible next state.",
      example:
        "From q0 with 'a' → only q1",
      diagram:
        "Single arrow per input",
      diagramSteps: [
        "Take state",
        "Read input",
        "Move to only one next state"
      ],
      realWorld:
        "Like strict rule system 🚦 (no multiple options)",
      tips:
        "DFA = No confusion 😎",
      quickSummary:
        "One input → one path only",
      importantQuestions: [
        "Define DFA formally",
        "Draw DFA for given problem",
        "Properties of DFA"
      ]
    },

    {
      title: "NFA (Non-Deterministic Finite Automata)",
      difficulty: "medium",
      subtopics: ["Multiple transitions"],
      explanation:
        "In NFA, one input can lead to multiple possible next states.",
      example:
        "q0 with 'a' → q1 or q2",
      diagram:
        "Multiple arrows for same input",
      diagramSteps: [
        "Read input",
        "Choose possible paths",
        "If any path accepts → accepted"
      ],
      realWorld:
        "Like multiple choices exam 😄",
      tips:
        "NFA = many paths 😵",
      quickSummary:
        "If ANY path accepts → final answer is accept",
      importantQuestions: [
        "Define NFA",
        "Difference between DFA and NFA",
        "Convert NFA to DFA"
      ]
    },

    {
      title: "ε-NFA (Epsilon NFA)",
      difficulty: "medium",
      subtopics: ["ε-move", "ε-closure"],
      explanation:
        "ε-NFA allows transitions without reading any input symbol.",
      example:
        "q0 → q1 without input",
      diagram:
        "ε transition arrow",
      diagramSteps: [
        "Move without input",
        "Add reachable states",
        "Continue transitions"
      ],
      realWorld:
        "Free jump 🆓 without ticket",
      tips:
        "ε = no input move",
      quickSummary:
        "Move state without consuming input",
      importantQuestions: [
        "Define ε-NFA",
        "ε-closure concept",
        "Convert ε-NFA to DFA"
      ]
    },

    {
      title: "NFA → DFA Conversion ⭐",
      important: true,
      difficulty: "hard",
      subtopics: ["Subset Construction"],
      explanation:
        "Convert NFA into DFA using subset construction method by combining states.",
      example:
        "{q0,q1} → single DFA state",
      diagram:
        "Group states into one",
      diagramSteps: [
        "Start with initial state set",
        "Find reachable states",
        "Create new DFA states",
        "Repeat for all inputs"
      ],
      realWorld:
        "Group people into one team 📦",
      tips:
        "Set of states = one state",
      quickSummary:
        "Combine NFA states to form DFA",
      importantQuestions: [
        "Steps of conversion",
        "Solve NFA to DFA",
        "Explain subset method"
      ]
    },

    {
      title: "ε-NFA → DFA Conversion ⭐",
      important: true,
      difficulty: "hard",
      subtopics: ["ε-closure", "conversion"],
      explanation:
        "First find ε-closure, then apply NFA to DFA conversion.",
      example:
        "ε-closure(q0) = {q0,q1}",
      diagram:
        "Closure → conversion",
      diagramSteps: [
        "Find ε-closure",
        "Treat as NFA",
        "Apply subset construction"
      ],
      realWorld:
        "Prepare first → then solve",
      tips:
        "Step1: closure, Step2: convert",
      quickSummary:
        "ε-closure first, then NFA→DFA",
      importantQuestions: [
        "Define ε-closure",
        "Convert ε-NFA to DFA",
        "Solve example"
      ]
    },

    {
      title: "Transition Table & Diagram",
      difficulty: "easy",
      subtopics: ["Table", "Diagram"],
      explanation:
        "Transition table shows state changes in table form, diagram shows graph form.",
      example:
        "q0 → q1 in table and diagram",
      diagram:
        "Table ↔ Diagram",
      diagramSteps: [
        "Read table",
        "Draw states",
        "Add transitions"
      ],
      realWorld:
        "Table = Excel 📊, Diagram = Graph 🎯",
      tips:
        "Both represent same thing",
      quickSummary:
        "Table and diagram are interchangeable",
      importantQuestions: [
        "Draw transition table",
        "Convert table to diagram",
        "Explain transitions"
      ]
    },

    {
      title: "Regular Expressions (RE)",
      important: true,
      difficulty: "medium",
      subtopics: ["Patterns"],
      explanation:
        "Regular Expression is used to represent patterns of strings.",
      example:
        "a* = any number of a",
      diagram:
        "Pattern flow",
      diagramSteps: [
        "Identify pattern",
        "Apply operators",
        "Generate strings"
      ],
      realWorld:
        "Search pattern in text 🔍",
      tips:
        "RE = pattern matcher",
      quickSummary:
        "Used to define string patterns",
      importantQuestions: [
        "Define RE",
        "Convert RE to DFA",
        "Basic operations"
      ]
    },

    {
      title: "Operations of RE",
      difficulty: "easy",
      subtopics: ["Union", "Concat", "Star"],
      explanation:
        "Main operations are union (|), concatenation, and Kleene star (*).",
      example:
        "a|b, ab, a*",
      diagram:
        "Combine patterns",
      diagramSteps: [
        "Union → choose",
        "Concat → join",
        "Star → repeat"
      ],
      realWorld:
        "Mix and repeat patterns",
      tips:
        "* = infinite repeat",
      quickSummary:
        "3 main operations define RE",
      importantQuestions: [
        "Explain Kleene star",
        "Difference between operations",
        "Solve expressions"
      ]
    },

    {
      title: "Pumping Lemma ⭐",
      important: true,
      difficulty: "hard",
      subtopics: ["xyz split"],
      explanation:
        "Used to prove that a language is NOT regular.",
      example:
        "Split string into xyz and pump y",
      diagram:
        "Repeat middle part",
      diagramSteps: [
        "Choose string",
        "Split into xyz",
        "Repeat y",
        "Check validity"
      ],
      realWorld:
        "Stretch middle part like rubber 🔁",
      tips:
        "If condition fails → not regular",
      quickSummary:
        "Used to prove non-regular languages",
      importantQuestions: [
        "State pumping lemma",
        "Steps of proof",
        "Solve example"
      ]
    },

    {
      title: "Closure Properties",
      difficulty: "medium",
      subtopics: ["Union", "Concat", "Star"],
      explanation:
        "Regular languages remain regular under union, concatenation, and star.",
      example:
        "L1 ∪ L2 is regular",
      diagram:
        "Combine languages",
      diagramSteps: [
        "Take two languages",
        "Apply operation",
        "Result is regular"
      ],
      realWorld:
        "Combine two systems → still same type",
      tips:
        "Closed = no change in type",
      quickSummary:
        "Regular stays regular after operations",
      importantQuestions: [
        "Define closure properties",
        "Examples",
        "Explain operations"
      ]
    }
  ]
};

export default unit2;