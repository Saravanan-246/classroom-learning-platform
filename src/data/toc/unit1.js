const unit1 = {
  id: "unit1",
  title: "Unit 1 – Automata Theory",
  topics: [
    {
      title: "Set, Relations, Functions",
      difficulty: "easy",
      subtopics: ["Set", "Relation", "Function"],
      explanation:
        "A Set is a collection of elements. A Relation shows connection between elements. A Function is a special relation where each input has only one output.",
      example: {
        good: "1 → A, 2 → B, 3 → C",
        bad: "1 → A and 1 → B (invalid function)"
      },
      diagram: "Input → Output mapping",
      diagramSteps: [
        "Take input values",
        "Map each input to output",
        "Ensure only one output per input"
      ],
      realWorld:
        "Student → Roll Number (one student has only one roll number)",
      tips: "Function = One input → One output 💡",
      quickSummary:
        "Relation allows many outputs, Function allows only one output.",
      importantQuestions: [
        "Define set, relation, function",
        "Difference between relation and function",
        "Types of functions"
      ]
    },

    {
      title: "Formal Proof",
      difficulty: "medium",
      subtopics: ["Direct Proof", "Contradiction", "Induction"],
      explanation:
        "Proof is used to show a statement is always true. Methods include direct proof, contradiction, and induction.",
      example:
        "1 + 2 + ... + n = n(n+1)/2 using induction",
      diagram: "Base case → Assume → Prove next",
      diagramSteps: [
        "Prove base case (n=1)",
        "Assume true for n=k",
        "Prove for n=k+1"
      ],
      realWorld:
        "Like climbing stairs step by step — if first step works, all steps work.",
      tips: "Induction = Domino effect 🧱",
      quickSummary:
        "Prove first → assume → prove next → done for all.",
      importantQuestions: [
        "What is mathematical induction?",
        "Steps of induction",
        "Solve one induction problem"
      ]
    },

    {
      title: "Alphabets, Strings, Languages",
      difficulty: "easy",
      subtopics: ["Alphabet", "String", "Language"],
      explanation:
        "Alphabet is a set of symbols. String is a sequence of symbols. Language is a collection of strings.",
      example:
        "Σ = {0,1}, String = 101, Language = all binary numbers",
      diagram: "Alphabet → String → Language",
      diagramSteps: [
        "Define symbols (Σ)",
        "Create strings",
        "Group into language"
      ],
      realWorld:
        "Letters → Words → Dictionary 📖",
      tips: "Alphabet = letters, String = word, Language = set of words",
      quickSummary:
        "Language = group of strings formed from alphabet.",
      importantQuestions: [
        "Define alphabet, string, language",
        "Finite vs infinite language",
        "Examples of languages"
      ]
    },

    {
      title: "Finite Representation",
      difficulty: "easy",
      subtopics: ["Finite", "Infinite"],
      explanation:
        "Languages can be finite (limited strings) or infinite (unlimited strings).",
      example: "L = {a, aa, aaa, aaaa}",
      diagram: "Finite vs Infinite",
      diagramSteps: [
        "Check number of strings",
        "Limited → finite",
        "Unlimited → infinite"
      ],
      realWorld:
        "Menu card vs buffet 🍽",
      tips: "Finite = small, Infinite = endless",
      quickSummary:
        "Finite = countable, Infinite = uncountable.",
      importantQuestions: [
        "Define finite language",
        "Methods to represent languages"
      ]
    },

    {
      title: "Chomsky Hierarchy",
      important: true,
      difficulty: "hard",
      subtopics: ["Regular", "CFL", "CSL", "RE"],
      explanation:
        "Chomsky Hierarchy classifies languages into 4 types based on power and complexity.",
      example:
        "Regular ⊂ CFL ⊂ CSL ⊂ RE",
      diagram: "Regular → CFL → CSL → RE",
      diagramSteps: [
        "Start with Regular",
        "Expand to CFL",
        "Expand to CSL",
        "Expand to RE"
      ],
      realWorld:
        "Small box inside bigger box 📦",
      tips: "Real Cool Students Rock 😎",
      quickSummary:
        "Regular < CFL < CSL < RE (increasing power).",
      importantQuestions: [
        "Explain Chomsky hierarchy",
        "Draw diagram",
        "Machine for each type",
        "Compare all types"
      ]
    }
  ]
};

export default unit1;