const unit5 = {
  id: "unit5",
  title: "Unit 5 – Turing Machine",
  topics: [
    {
      title: "Turing Machine (TM) Basics",
      important: true,
      difficulty: "easy",
      subtopics: ["Definition", "Working"],
      explanation:
        "Turing Machine is a powerful machine used to solve any computational problem. It has an infinite tape and reads/writes symbols step by step.",
      example:
        "Tape: a b b a → machine reads, writes, and moves left or right",
      diagram:
        "Tape ↔ Head ↔ State",
      diagramSteps: [
        "Read symbol from tape",
        "Change state",
        "Write symbol",
        "Move left or right"
      ],
      realWorld:
        "Like a robot 🤖 working step by step on a long tape",
      tips:
        "TM = most powerful machine",
      quickSummary:
        "Reads → writes → moves → decides",
      importantQuestions: [
        "Define Turing Machine",
        "Components of TM",
        "Difference between FA, PDA, TM"
      ]
    },

    {
      title: "7-Tuple Representation",
      important: true,
      difficulty: "medium",
      subtopics: ["Q", "Σ", "Γ", "δ", "q0", "B", "F"],
      explanation:
        "Turing Machine is defined by 7 elements: (Q, Σ, Γ, δ, q0, B, F).",
      example:
        "Q = states, Σ = input symbols, Γ = tape symbols",
      diagram:
        "7 components of TM",
      diagramSteps: [
        "Define states",
        "Define input symbols",
        "Define tape symbols",
        "Define transition function"
      ],
      realWorld:
        "Like system setup with all parts ⚙️",
      tips:
        "Remember: Q Σ Γ δ q0 B F",
      quickSummary:
        "7 parts define TM",
      importantQuestions: [
        "Define 7-tuple",
        "Explain each component",
        "Example of TM"
      ]
    },

    {
      title: "Components of TM",
      difficulty: "easy",
      subtopics: ["Tape", "Head", "Control"],
      explanation:
        "TM has three main parts: tape (memory), head (reads/writes), and control unit (states).",
      example:
        "Head moves left or right on tape",
      diagram:
        "Tape → Head → State",
      diagramSteps: [
        "Read symbol",
        "Write symbol",
        "Move head",
        "Change state"
      ],
      realWorld:
        "Like reading and writing on paper ✍️",
      tips:
        "Tape = memory, Head = worker",
      quickSummary:
        "Three parts: tape, head, control",
      importantQuestions: [
        "Explain components",
        "Working of tape",
        "Head movement"
      ]
    },

    {
      title: "Instantaneous Description (ID)",
      important: true,
      difficulty: "medium",
      subtopics: ["State", "Tape", "Position"],
      explanation:
        "ID shows current state, tape content, and head position at a given moment.",
      example:
        "q0abb → head at first symbol",
      diagram:
        "State + Tape + Head",
      diagramSteps: [
        "Write state",
        "Write tape content",
        "Mark head position"
      ],
      realWorld:
        "Like screenshot 📸 of machine",
      tips:
        "ID = current situation",
      quickSummary:
        "Snapshot of TM",
      importantQuestions: [
        "Define ID",
        "Write ID",
        "Transition of ID"
      ]
    },

    {
      title: "Transition Diagram",
      difficulty: "medium",
      subtopics: ["State graph"],
      explanation:
        "Graph showing how TM moves between states with read/write/move actions.",
      example:
        "q0 --(a→b, R)--> q1",
      diagram:
        "State diagram with actions",
      diagramSteps: [
        "Draw states",
        "Add transitions",
        "Label actions"
      ],
      realWorld:
        "Like flowchart 🔁",
      tips:
        "Similar to DFA but with actions",
      quickSummary:
        "Graph showing TM behavior",
      importantQuestions: [
        "Draw diagram",
        "Explain transitions",
        "Example problem"
      ]
    },

    {
      title: "Language of TM",
      difficulty: "easy",
      subtopics: ["Acceptance"],
      explanation:
        "Language of TM is the set of strings that are accepted by the machine.",
      example:
        "Strings with equal a and b",
      diagram:
        "Input → TM → accept/reject",
      diagramSteps: [
        "Give input",
        "Process using TM",
        "Check final state"
      ],
      realWorld:
        "Pass or fail system",
      tips:
        "Final state = accepted",
      quickSummary:
        "Accepted strings form language",
      importantQuestions: [
        "Define language of TM",
        "Acceptance condition",
        "Examples"
      ]
    },

    {
      title: "Programming Techniques for TM",
      important: true,
      difficulty: "hard",
      subtopics: ["Design steps"],
      explanation:
        "Steps used to design TM for solving problems like palindrome or aⁿbⁿ.",
      example:
        "Mark symbols and move back and forth",
      diagram:
        "Step-by-step processing",
      diagramSteps: [
        "Read input",
        "Mark symbols",
        "Move across tape",
        "Repeat steps"
      ],
      realWorld:
        "Like solving problem step by step",
      tips:
        "Design stepwise",
      quickSummary:
        "Follow steps to build TM",
      importantQuestions: [
        "Design TM",
        "Steps of design",
        "Example problems"
      ]
    },

    {
      title: "Multi-Tape Turing Machine",
      difficulty: "medium",
      subtopics: ["Multiple tapes"],
      explanation:
        "TM with more than one tape to make computation faster.",
      example:
        "Tape1 = input, Tape2 = work",
      diagram:
        "Multiple tapes",
      diagramSteps: [
        "Read input tape",
        "Process using extra tape",
        "Combine results"
      ],
      realWorld:
        "Using multiple notebooks 📚",
      tips:
        "More tapes = faster work",
      quickSummary:
        "Multiple tapes improve efficiency",
      importantQuestions: [
        "Define multi-tape TM",
        "Difference",
        "Advantages"
      ]
    },

    {
      title: "Non-Deterministic TM",
      difficulty: "medium",
      subtopics: ["Multiple paths"],
      explanation:
        "TM that can take multiple possible moves for same input.",
      example:
        "One input → many paths",
      diagram:
        "Branching paths",
      diagramSteps: [
        "Check transitions",
        "Follow all paths",
        "Accept if any path works"
      ],
      realWorld:
        "Multiple choices",
      tips:
        "Like NFA but stronger",
      quickSummary:
        "Many possible moves",
      importantQuestions: [
        "Define NTM",
        "Difference from DTM",
        "Power comparison"
      ]
    },

    {
      title: "Restricted Turing Machine",
      difficulty: "easy",
      subtopics: ["Limitations"],
      explanation:
        "TM with some restrictions like limited movement or memory.",
      example:
        "Only move right",
      diagram:
        "Restricted operations",
      diagramSteps: [
        "Apply restriction",
        "Check behavior",
        "Compare with normal TM"
      ],
      realWorld:
        "Limited system 🚫",
      tips:
        "Less power",
      quickSummary:
        "Restricted version of TM",
      importantQuestions: [
        "Define restricted TM",
        "Examples",
        "Limitations"
      ]
    },

    {
      title: "Halting Problem ⭐",
      important: true,
      difficulty: "hard",
      subtopics: ["Undecidable"],
      explanation:
        "It is impossible to decide whether a Turing Machine will stop or run forever.",
      example:
        "Program may run infinitely",
      diagram:
        "Stop vs infinite loop",
      diagramSteps: [
        "Give input",
        "Run machine",
        "Cannot always predict halt"
      ],
      realWorld:
        "Some problems cannot be solved",
      tips:
        "Halting problem = undecidable",
      quickSummary:
        "Cannot predict stopping",
      importantQuestions: [
        "Define halting problem",
        "Explain undecidability",
        "Examples"
      ]
    },

    {
      title: "Decidability",
      important: true,
      difficulty: "medium",
      subtopics: ["Yes/No"],
      explanation:
        "A problem is decidable if TM can always give YES or NO answer.",
      example:
        "Check if string belongs to language",
      diagram:
        "Yes / No",
      diagramSteps: [
        "Take input",
        "Process",
        "Give answer"
      ],
      realWorld:
        "Clear decision ✔️",
      tips:
        "Always gives answer",
      quickSummary:
        "Decidable = always solvable",
      importantQuestions: [
        "Define decidability",
        "Examples",
        "Difference from undecidable"
      ]
    },

    {
      title: "Complexity (P, NP, NP-Complete) ⭐",
      important: true,
      difficulty: "hard",
      subtopics: ["P", "NP", "NP-Complete"],
      explanation:
        "Classifies problems based on how fast they can be solved.",
      example:
        "P = easy, NP = harder",
      diagram:
        "P ⊆ NP ⊆ NP-Complete",
      diagramSteps: [
        "Understand P",
        "Understand NP",
        "Compare both"
      ],
      realWorld:
        "Easy vs hard problems",
      tips:
        "P = fast, NP = complex",
      quickSummary:
        "Measures problem difficulty",
      importantQuestions: [
        "Define P, NP",
        "What is NP-Complete?",
        "Examples"
      ]
    }
  ]
};

export default unit5;