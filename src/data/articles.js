const author = {
  name: "Azizul Islam Tushar",
  avatar: "/me.png",
};

const practiceCta = {
  title: "Want to practice more?",
  description:
    "Check out more articles on React, JavaScript, TypeScript, and frontend engineering.",
  label: "View all articles",
  href: "/articles",
};

export const articles = [
  {
    slug: "entry-level-react-interview-questions",
    featured: true,
    title: "Entry Level React Interview Questions",
    description:
      "10 questions and relatively short but comprehensive answers for entry level devs.",
    image: "/articles/react_question.png",
    author,
    publishDate: "2023-02-01",
    publishDateLabel: "Feb 1, 2023",
    readTime: "10 min read",
    tags: ["React", "JavaScript", "Frontend", "Interview", "Web Development"],
    cta: practiceCta,
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "Preparing for your first React developer role? Here are 10 essential interview questions with concise explanations to help you ace your interview.",
        ],
      },
      {
        id: "what-is-react",
        title: "What is React?",
        paragraphs: [
          "React is a JavaScript library for building user interfaces. It was developed by Facebook and is maintained by Meta and a community of developers.",
        ],
      },
      {
        id: "why-react",
        title: "Why React?",
        bullets: [
          "Component-based architecture",
          "Reusable UI components",
          "Virtual DOM for better performance",
          "Large ecosystem and community support",
          "One-way data binding",
        ],
      },
      {
        id: "interview-questions",
        title: "10 Interview Questions",
        questions: [
          {
            id: "what-is-jsx",
            title: "1. What is JSX?",
            answer:
              "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows us to describe UI directly inside JavaScript in a readable way.",
            code: "const element = <h1>Hello, React!</h1>;",
          },
          {
            id: "what-are-props",
            title: "2. What are props?",
            answer:
              "Props are read-only inputs passed from a parent component to a child component. They let components stay reusable and configurable.",
            code:
              "function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}",
          },
          {
            id: "what-is-state",
            title: "3. What is state?",
            answer:
              "State is built-in React data that belongs to a component. When state changes, React re-renders the component with the updated value.",
            code: "const [count, setCount] = useState(0);",
          },
          {
            id: "what-is-a-component",
            title: "4. What is a component?",
            answer:
              "A component is a reusable building block of a React app. Components can return JSX and manage logic, state, and props.",
            code:
              "function Button() {\n  return <button>Click me</button>;\n}",
          },
          {
            id: "what-is-virtual-dom",
            title: "5. What is the virtual DOM?",
            answer:
              "The virtual DOM is a lightweight in-memory representation of the real DOM. React compares updates there first and changes only what is necessary in the browser.",
            code:
              "// React updates the virtual DOM first\nsetItems((current) => [...current, newItem]);",
          },
          {
            id: "what-is-usestate",
            title: "6. What is useState?",
            answer:
              "useState is a React Hook that lets function components store and update local state.",
            code:
              "const [isOpen, setIsOpen] = useState(false);\nsetIsOpen(true);",
          },
          {
            id: "what-is-useeffect",
            title: "7. What is useEffect?",
            answer:
              "useEffect is a Hook used for side effects like fetching data, subscribing to events, or syncing values after render.",
            code:
              "useEffect(() => {\n  document.title = `Count: ${count}`;\n}, [count]);",
          },
          {
            id: "what-is-key-in-lists",
            title: "8. What is key in lists?",
            answer:
              "A key helps React identify which list items changed, were added, or were removed. Stable keys improve rendering correctness and performance.",
            code:
              "items.map((item) => <li key={item.id}>{item.name}</li>);",
          },
          {
            id: "what-is-conditional-rendering",
            title: "9. What is conditional rendering?",
            answer:
              "Conditional rendering means showing different UI based on state or props using normal JavaScript conditions.",
            code:
              "{isLoggedIn ? <Dashboard /> : <SignInPrompt />}",
          },
          {
            id: "what-is-react-router",
            title: "10. What is React Router?",
            answer:
              "React Router is a routing library for React applications. It helps map URLs to components for navigation in single-page apps.",
            code:
              "<Route path=\"/about\" element={<AboutPage />} />",
          },
        ],
      },
      {
        id: "tips-resources",
        title: "Tips & Resources",
        paragraphs: [
          "For interview prep, focus on explaining concepts in your own words instead of memorizing one-line definitions. Small working examples often help you stand out more than long theory answers.",
        ],
        bullets: [
          "Practice answering out loud",
          "Build one small demo per concept",
          "Review hooks, props, state, and rendering flow",
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          "A strong beginner React interview usually comes down to clarity. If you understand the basics well and can explain them simply, you are already in a strong position.",
        ],
      },
    ],
  },
  {
    slug: "advanced-javascript-tricks",
    featured: true,
    title: "Advanced JavaScript Tricks",
    description:
      "Explore closures, the event loop, and execution context with practical examples that make the language easier to reason about.",
    image: "/articles/image.jpg",
    author,
    publishDate: "2023-02-08",
    publishDateLabel: "Feb 8, 2023",
    readTime: "8 min read",
    tags: ["JavaScript", "Frontend", "Performance"],
    cta: practiceCta,
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "JavaScript starts feeling much more predictable once you understand how scope, async scheduling, and references actually behave under the hood.",
        ],
      },
      {
        id: "closures",
        title: "Closures",
        paragraphs: [
          "A closure is created when a function remembers variables from the scope where it was defined, even after that outer scope has finished running.",
        ],
      },
      {
        id: "event-loop",
        title: "Event Loop",
        paragraphs: [
          "The event loop coordinates synchronous code, microtasks, and macrotasks so JavaScript can handle asynchronous operations without blocking everything.",
        ],
        bullets: [
          "Synchronous code runs first",
          "Microtasks like resolved promises run before timers",
          "Macrotasks like setTimeout run after the current turn is done",
        ],
      },
      {
        id: "execution-context",
        title: "Execution Context",
        paragraphs: [
          "Execution context determines what variables, functions, and `this` refer to while code is running.",
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          "The more comfortable you get with these internals, the easier it becomes to debug strange runtime behavior without guessing.",
        ],
      },
    ],
  },
  {
    slug: "understanding-javascript-closures",
    featured: false,
    title: "Understanding JavaScript Closures",
    description:
      "A focused guide to closures with plain-language explanations and examples you can use in interviews or day-to-day coding.",
    image: "/articles/image.jpg",
    author,
    publishDate: "2023-02-11",
    publishDateLabel: "Feb 11, 2023",
    readTime: "7 min read",
    tags: ["JavaScript", "Closures", "Interview"],
    cta: practiceCta,
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "Closures are one of those JavaScript ideas that seem abstract until you see how often they appear in callbacks, factories, and hooks.",
        ],
      },
      {
        id: "how-they-work",
        title: "How They Work",
        paragraphs: [
          "A function keeps access to variables from its lexical scope. That is the entire core idea, and it unlocks a lot of useful patterns.",
        ],
      },
      {
        id: "real-world-use",
        title: "Real World Use",
        bullets: [
          "Event handlers",
          "Private state inside factory functions",
          "Memoization helpers",
          "React Hooks and custom hooks",
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          "Once closures click, a lot of JavaScript starts to feel more intentional instead of magical.",
        ],
      },
    ],
  },
  {
    slug: "guide-to-advanced-react-patterns",
    featured: false,
    title: "A Guide to Advanced React Patterns",
    description:
      "A practical overview of composable patterns that help React codebases stay flexible as features grow.",
    image: "/articles/react_question.png",
    author,
    publishDate: "2023-02-14",
    publishDateLabel: "Feb 14, 2023",
    readTime: "12 min read",
    tags: ["React", "Patterns", "Frontend"],
    cta: practiceCta,
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "As React projects grow, patterns matter more than isolated components. Good patterns reduce friction and help teams scale their thinking.",
        ],
      },
      {
        id: "compound-components",
        title: "Compound Components",
        paragraphs: [
          "Compound components give consumers flexibility while keeping related UI pieces tied to a clear shared API.",
        ],
      },
      {
        id: "render-props-and-hooks",
        title: "Render Props and Hooks",
        paragraphs: [
          "Hooks replaced many render-prop use cases, but the underlying goal is the same: share behavior without duplicating logic.",
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          "Pattern choice should follow clarity. The best abstraction is usually the one your future self can still understand quickly.",
        ],
      },
    ],
  },
  {
    slug: "typescript-tips-you-should-know",
    featured: false,
    title: "TypeScript Tips You Should Know",
    description:
      "A collection of TypeScript habits that make code easier to maintain without turning everything into type gymnastics.",
    image: "/articles/image.jpg",
    author,
    publishDate: "2023-02-18",
    publishDateLabel: "Feb 18, 2023",
    readTime: "6 min read",
    tags: ["TypeScript", "Frontend", "DX"],
    cta: practiceCta,
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "TypeScript is most helpful when it makes intent clearer. The goal is not to impress the compiler. The goal is to make bugs harder to write.",
        ],
      },
      {
        id: "use-inference-well",
        title: "Use Inference Well",
        paragraphs: [
          "You do not need to annotate every variable. Let inference carry the simple cases and spend your effort on public boundaries.",
        ],
      },
      {
        id: "prefer-narrow-types",
        title: "Prefer Narrow Types",
        bullets: [
          "Use string unions for known variants",
          "Model nullable states explicitly",
          "Avoid `any` whenever a better shape exists",
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          "A good TypeScript codebase usually feels calmer, not louder. Small habits compound into much better maintainability.",
        ],
      },
    ],
  },
];

function normalizeSlug(value) {
  if (Array.isArray(value)) {
    return normalizeSlug(value[0]);
  }

  return decodeURIComponent(String(value ?? ""))
    .trim()
    .toLowerCase();
}

export function getArticleBySlug(slug) {
  const normalizedSlug = normalizeSlug(slug);

  return articles.find(
    (article) => normalizeSlug(article.slug) === normalizedSlug,
  );
}

export function getFeaturedArticles() {
  return articles.filter((article) => article.featured);
}

export function getAllArticles() {
  return articles;
}

export function getRelatedArticles(slug, limit = 4) {
  const normalizedSlug = normalizeSlug(slug);

  return articles
    .filter((article) => normalizeSlug(article.slug) !== normalizedSlug)
    .slice(0, limit);
}
