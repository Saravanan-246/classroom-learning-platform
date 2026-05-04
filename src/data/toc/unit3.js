const unit3 = {
  id: "unit3",
  title: "Unit 3 – CFG & PDA",
  topics: [
    {
      title: "Context Free Grammar (CFG)",
      important: true,
      difficulty: "easy",
      subtopics: ["Definition", "Rules", "Language generation"],
      explanation:
        "CFG is a set of rules used to generate strings of a language. It has variables, terminals, and production rules.",
      example:
        "S → aSb | ab (generates equal number of a and b)",
      diagram:
        "Start symbol → apply production rules → generate string",
      diagramSteps: [
        "Start from S",
        "Apply production rules",
        "Replace variables step by step",
        "Get final string"
      ],
      realWorld:
        "Like recipe 🍳 → rules tell how to cook final dish",
      tips:
        "CFG = rules to build strings",
      quickSummary:
        "CFG generates strings using production rules",
      importantQuestions: [
        "Define CFG",
        "Components of CFG",
        "Write CFG for given language"
      ]
    },

    {
      title: "Structure of CFG",
      difficulty: "easy",
      subtopics: ["V", "Σ", "P", "S"],
      explanation:
        "CFG has 4 parts: Variables (V), Terminals (Σ), Production Rules (P), Start Symbol (S).",
      example:
        "G = (V, Σ, P, S)",
      diagram:
        "CFG = (V, Σ, P, S)",
      diagramSteps: [
        "Define variables",
        "Define terminals",
        "Write rules",
        "Choose start symbol"
      ],
      realWorld:
        "Like system setup ⚙️ with all components",
      tips:
        "Remember: V T P S 🔥",
      quickSummary:
        "CFG = (Variables, Terminals, Rules, Start)",
      importantQuestions: [
        "Define structure of CFG",
        "Explain each component",
        "Give example"
      ]
    },

    {
      title: "Types of Grammar",
      difficulty: "medium",
      subtopics: ["Type 0", "Type 1", "Type 2", "Type 3"],
      explanation:
        "Grammars are classified into 4 types based on power: Regular, Context-Free, Context-Sensitive, Unrestricted.",
      example:
        "Type 2 = CFG",
      diagram:
        "Hierarchy: Regular ⊂ CFL ⊂ CSL ⊂ RE",
      diagramSteps: [
        "Start from Regular",
        "Move to CFG",
        "Then CSL",
        "Then RE"
      ],
      realWorld:
        "Small system inside bigger system 📦",
      tips:
        "Same as Chomsky hierarchy",
      quickSummary:
        "4 grammar types based on power",
      importantQuestions: [
        "Types of grammar",
        "Difference between types",
        "Examples"
      ]
    },

    {
      title: "Derivation (Leftmost & Rightmost)",
      important: true,
      difficulty: "medium",
      subtopics: ["Leftmost", "Rightmost"],
      explanation:
        "Derivation means generating a string step by step from start symbol.",
      example:
        "S → aSb → aaSbb → aabb",
      diagram:
        "Leftmost = expand left variable first, Rightmost = expand right variable first",
      diagramSteps: [
        "Start with S",
        "Choose variable",
        "Replace step by step",
        "Reach final string"
      ],
      realWorld:
        "Solving step-by-step problem",
      tips:
        "Left = first, Right = last",
      quickSummary:
        "Derivation builds string step by step",
      importantQuestions: [
        "Define derivation",
        "Leftmost vs rightmost",
        "Solve derivation"
      ]
    },

    {
      title: "Parse Tree",
      important: true,
      difficulty: "medium",
      subtopics: ["Tree structure"],
      explanation:
        "Parse tree shows how a string is derived using a tree structure.",
      example:
        "Root = Start symbol, Leaves = final string",
      diagram:
        "Tree with branches showing derivation",
      diagramSteps: [
        "Start from root",
        "Expand nodes",
        "Reach leaf nodes"
      ],
      realWorld:
        "Family tree 🌳 structure",
      tips:
        "Tree = visual derivation",
      quickSummary:
        "Parse tree represents derivation visually",
      importantQuestions: [
        "Define parse tree",
        "Construct parse tree",
        "Relation with derivation"
      ]
    },

    {
      title: "Ambiguity in Grammar",
      important: true,
      difficulty: "hard",
      subtopics: ["Multiple trees"],
      explanation:
        "A grammar is ambiguous if one string has more than one parse tree.",
      example:
        "Same string → two different trees",
      diagram:
        "Two parse trees for one string",
      diagramSteps: [
        "Generate string",
        "Build first tree",
        "Build second tree",
        "Compare both"
      ],
      realWorld:
        "Same sentence → different meanings 😵",
      tips:
        "Ambiguity = confusion",
      quickSummary:
        "One string → multiple parse trees",
      importantQuestions: [
        "Define ambiguity",
        "Example",
        "How to remove ambiguity"
      ]
    },

    {
      title: "Pushdown Automata (PDA)",
      important: true,
      difficulty: "medium",
      subtopics: ["Stack", "FA + Stack"],
      explanation:
        "PDA is a finite automaton with extra memory (stack). It is used to recognize context-free languages.",
      example:
        "Balanced parentheses using stack",
      diagram:
        "FA + Stack memory",
      diagramSteps: [
        "Read input",
        "Push to stack",
        "Pop from stack",
        "Check empty/final state"
      ],
      realWorld:
        "Stack of plates 🍽",
      tips:
        "PDA = FA + Stack",
      quickSummary:
        "Uses stack to store memory",
      importantQuestions: [
        "Define PDA",
        "Components of PDA",
        "Difference from DFA"
      ]
    },

    {
      title: "Acceptance in PDA",
      difficulty: "medium",
      subtopics: ["Final state", "Empty stack"],
      explanation:
        "PDA accepts strings either by reaching final state or by empty stack.",
      example:
        "Stack empty → accepted",
      diagram:
        "Push and pop operations",
      diagramSteps: [
        "Process input",
        "Check stack",
        "Check final state"
      ],
      realWorld:
        "Two ways to pass exam 😄",
      tips:
        "Final state OR empty stack",
      quickSummary:
        "Two acceptance methods",
      importantQuestions: [
        "Acceptance methods",
        "Examples",
        "Differences"
      ]
    },

    {
      title: "Languages of PDA",
      difficulty: "medium",
      subtopics: ["Context-free languages"],
      explanation:
        "PDA recognizes context-free languages such as balanced strings.",
      example:
        "L = {aⁿbⁿ}",
      diagram:
        "Push a, pop b",
      diagramSteps: [
        "Push symbols",
        "Match symbols",
        "Pop symbols"
      ],
      realWorld:
        "Counting using stack 📊",
      tips:
        "Stack helps matching",
      quickSummary:
        "PDA handles balanced patterns",
      importantQuestions: [
        "Define language of PDA",
        "Examples",
        "Relation with CFG"
      ]
    },

    {
      title: "NPDA vs DPDA",
      difficulty: "medium",
      subtopics: ["Non-deterministic", "Deterministic"],
      explanation:
        "NPDA allows multiple transitions, DPDA allows only one transition for each input.",
      example:
        "NPDA = many paths, DPDA = single path",
      diagram:
        "Branching vs single flow",
      diagramSteps: [
        "Check transitions",
        "Multiple or single",
        "Compare behavior"
      ],
      realWorld:
        "NPDA = flexible, DPDA = strict",
      tips:
        "NPDA > DPDA in power",
      quickSummary:
        "NPDA more powerful than DPDA",
      importantQuestions: [
        "Difference NPDA vs DPDA",
        "Examples",
        "Power comparison"
      ]
    },

    {
      title: "Equivalence of PDA",
      important: true,
      difficulty: "hard",
      subtopics: ["CFG ↔ PDA"],
      explanation:
        "CFG and PDA are equivalent, meaning they describe the same class of languages.",
      example:
        "CFG ↔ PDA",
      diagram:
        "Two-way relationship",
      diagramSteps: [
        "Convert CFG to PDA",
        "Convert PDA to CFG",
        "Show equivalence"
      ],
      realWorld:
        "Two ways to solve same problem 🤝",
      tips:
        "CFG = rules, PDA = machine",
      quickSummary:
        "Both represent CFL",
      importantQuestions: [
        "Explain equivalence",
        "Conversion methods",
        "Examples"
      ]
    }
  ]
};

export default unit3;