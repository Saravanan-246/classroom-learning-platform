const unit4 = {
  id: "unit4",
  title: "Unit 4 – CFL Properties",
  topics: [
    {
      title: "Simplification of CFG",
      important: true,
      difficulty: "easy",
      subtopics: ["Clean grammar"],
      explanation:
        "Simplification means removing extra or useless rules from CFG without changing the language.",
      example:
        "Remove unused variables and extra rules",
      diagram:
        "Original CFG → Simplified CFG",
      diagramSteps: [
        "Find useless symbols",
        "Remove them",
        "Keep only useful rules"
      ],
      realWorld:
        "Cleaning notes before exam 🧹",
      tips:
        "Clean grammar = easy to solve",
      quickSummary:
        "Remove unnecessary rules but keep same language",
      importantQuestions: [
        "What is simplification?",
        "Steps of simplification",
        "Example problem"
      ]
    },

    {
      title: "Remove ε-productions",
      important: true,
      difficulty: "medium",
      subtopics: ["Empty string"],
      explanation:
        "ε-production means rule that gives empty string. We remove it carefully without changing the language.",
      example:
        "A → ε",
      diagram:
        "Remove ε and update other rules",
      diagramSteps: [
        "Find ε-productions",
        "Remove them",
        "Update other rules"
      ],
      realWorld:
        "Removing empty steps from process",
      tips:
        "ε = empty → handle carefully",
      quickSummary:
        "Remove ε but adjust grammar properly",
      importantQuestions: [
        "What is ε-production?",
        "Steps to remove ε",
        "Solve example"
      ]
    },

    {
      title: "Remove Unit Productions",
      important: true,
      difficulty: "easy",
      subtopics: ["A → B"],
      explanation:
        "Unit production means rule like A → B. We remove it by directly connecting A to B’s rules.",
      example:
        "A → B, B → a → so A → a",
      diagram:
        "A → B → a becomes A → a",
      diagramSteps: [
        "Find unit rules",
        "Replace with actual rules",
        "Remove middle variable"
      ],
      realWorld:
        "Skip middle person 🧍",
      tips:
        "Direct connection is better",
      quickSummary:
        "Remove A → B by replacing with real output",
      importantQuestions: [
        "What is unit production?",
        "Steps to remove",
        "Example problem"
      ]
    },

    {
      title: "Remove Useless Symbols",
      important: true,
      difficulty: "easy",
      subtopics: ["Unreachable", "Non-generating"],
      explanation:
        "Useless symbols are variables that are never used or never produce final strings.",
      example:
        "Variable not reachable from start symbol",
      diagram:
        "Remove unused nodes",
      diagramSteps: [
        "Find unreachable symbols",
        "Find non-generating symbols",
        "Remove both"
      ],
      realWorld:
        "Delete dead code 💀",
      tips:
        "Remove unused variables",
      quickSummary:
        "Keep only useful symbols",
      importantQuestions: [
        "What are useless symbols?",
        "How to identify them?",
        "Steps to remove"
      ]
    },

    {
      title: "Chomsky Normal Form (CNF) ⭐",
      important: true,
      difficulty: "hard",
      subtopics: ["A → BC", "A → a"],
      explanation:
        "In CNF, every rule must be either A → BC or A → a.",
      example:
        "A → BC, A → a",
      diagram:
        "Only two variables or one terminal",
      diagramSteps: [
        "Remove ε-productions",
        "Remove unit productions",
        "Convert to CNF form"
      ],
      realWorld:
        "Strict format rules 📏",
      tips:
        "Only 2 variables or 1 terminal",
      quickSummary:
        "CNF = A → BC or A → a",
      importantQuestions: [
        "Define CNF",
        "Steps to convert CFG to CNF",
        "Solve conversion"
      ]
    },

    {
      title: "Greibach Normal Form (GNF) ⭐",
      important: true,
      difficulty: "hard",
      subtopics: ["Starts with terminal"],
      explanation:
        "In GNF, every rule must start with a terminal followed by variables.",
      example:
        "A → aBC",
      diagram:
        "Terminal comes first",
      diagramSteps: [
        "Convert grammar",
        "Ensure terminal is first",
        "Adjust variables"
      ],
      realWorld:
        "Start with action first 🚀",
      tips:
        "GNF = terminal first",
      quickSummary:
        "Every rule starts with terminal",
      importantQuestions: [
        "Define GNF",
        "Difference CNF vs GNF",
        "Conversion steps"
      ]
    },

    {
      title: "Pumping Lemma for CFL ⭐",
      important: true,
      difficulty: "hard",
      subtopics: ["uvxyz split"],
      explanation:
        "Used to prove that a language is NOT context-free.",
      example:
        "Split string into uvxyz and repeat v and y",
      diagram:
        "uvxyz → repeat v and y",
      diagramSteps: [
        "Choose long string",
        "Split into uvxyz",
        "Repeat v and y",
        "Check validity"
      ],
      realWorld:
        "Stretch middle parts 🔁",
      tips:
        "If rule fails → not CFL",
      quickSummary:
        "Used to prove non-CFL languages",
      importantQuestions: [
        "State pumping lemma",
        "Steps of proof",
        "Solve example"
      ]
    },

    {
      title: "Closure Properties of CFL",
      difficulty: "medium",
      subtopics: ["Union", "Concat", "Star"],
      explanation:
        "CFL is closed under union, concatenation, and star, but not under intersection.",
      example:
        "L1 ∪ L2 is CFL",
      diagram:
        "Combine languages",
      diagramSteps: [
        "Take languages",
        "Apply operation",
        "Check result"
      ],
      realWorld:
        "Some operations allowed, some not ⚠️",
      tips:
        "CFL not fully closed",
      quickSummary:
        "Union, concat, star allowed; intersection not",
      importantQuestions: [
        "Closure properties",
        "Allowed operations",
        "Examples"
      ]
    },

    {
      title: "Decision Properties of CFL",
      difficulty: "medium",
      subtopics: ["Yes/No problems"],
      explanation:
        "Decision properties check whether a language has certain properties like emptiness or finiteness.",
      example:
        "Check if language is empty",
      diagram:
        "Yes / No decision",
      diagramSteps: [
        "Take problem",
        "Check condition",
        "Answer yes or no"
      ],
      realWorld:
        "Like answering exam questions ✔️",
      tips:
        "Decision = yes/no answer",
      quickSummary:
        "Used to check properties of languages",
      importantQuestions: [
        "Define decision properties",
        "Types",
        "Examples"
      ]
    }
  ]
};

export default unit4;