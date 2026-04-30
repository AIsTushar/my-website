export const projectTechIcons = {
  JavaScript: "/icons/js.png",
  React: "/icons/react.png",
  TypeScript: "/icons/typescript.png",
  HTML5: "/icons/html-5.png",
  CSS3: "/icons/css-3.png",
  "Tailwind CSS": "/icons/tailwindcss.png",
  "Next.js": "/icons/nextjs.png",
  "Node.js": "/icons/nodejs.png",
  "Express.js": "/icons/express.png",
  MongoDB: "/icons/mongodb.png",
  PostgreSQL: "/icons/postgresql.png",
  Prisma: "/icons/prisma.png",
  Nginx: "/icons/nginx.png",
  Postman: "/icons/postman.png",
  Stripe: "/icons/stripe.png",
  Supabase: "/icons/supabase.png",
  ReactQuery: "/icons/reactquery.png",
  "VS Code": "/icons/vscode.png",
};

function normalizeSlug(value) {
  if (Array.isArray(value)) {
    return normalizeSlug(value[0]);
  }

  return decodeURIComponent(String(value ?? ""))
    .trim()
    .toLowerCase();
}

const createGallery = (title, images) =>
  images.map((image, index) =>
    typeof image === "string"
      ? {
          src: image,
          alt: `${title} screenshot ${index + 1}`,
        }
      : {
          ...image,
          alt: image.alt ?? `${title} screenshot ${index + 1}`,
        },
  );

const createPlaceholderGallery = (src, title, count = 4) =>
  createGallery(
    title,
    Array.from({ length: count }, () => src),
  );

export const projects = [
  {
    slug: "dimcprep-online-question-bank",
    featured: true,
    title: "DIMCPrep: Online Question Bank",
    description:
      "Your trusted online question bank for the Diploma in Intermediate Medical Care with 1200+ expert-crafted questions. Built for doctors, paramedics, and nurses preparing for excellence in pre-hospital emergency care.",
    image: "/projects/dmc.png",
    liveLink: "https://dimcprep.com",
    gitLink: null,
    tags: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Next.js",
      "Tailwind CSS",
    ],
    overview: [
      "DIMCPrep is an online question bank platform designed to help medical professionals prepare for the Diploma in Intermediate Medical Care exam with confidence.",
      "The product focuses on clear study flows, structured practice sessions, and measurable progress tracking so learners can stay consistent across multiple topics.",
    ],
    features: [
      "1200+ expert-crafted practice questions",
      "Category-based filtering for focused revision",
      "Real-time progress tracking and performance summaries",
      "Secure authentication and subscription management",
      "Responsive experience across desktop and mobile devices",
    ],
    lessons: [
      {
        title: "Performance Optimization",
        description:
          "Improved query performance and reduced friction in question browsing by shaping data for fast reads and cleaner UI states.",
        icon: "chart",
      },
      {
        title: "Secure Applications",
        description:
          "Applied practical authentication, authorization, and validation patterns for a safer paid learning product.",
        icon: "shield",
      },
      {
        title: "Payment Integration",
        description:
          "Connected Stripe-based payments with subscription logic and clear account flows for end users.",
        icon: "card",
      },
    ],
    gallery: createGallery("DIMCPrep", [
      "/projects/dmc.png",
      "/projects/dmc-1.png",
      "/projects/dmc-2.png",
      "/projects/dmc-3.png",
      "/projects/dmc-4.png",
      "/projects/dmc-5.png",
    ]),
  },
  {
    slug: "trade-go-limited",
    featured: true,
    title: "trade-go-limited",
    description:
      "A modern, responsive website built with Next.js, Tailwind CSS, and JavaScript for Trade Go Limited, a clean wash chemical supplier based in the UK.",
    image: "/projects/trade-go-limited.png",
    liveLink: "https://tradegolimited.co.uk/",
    gitLink: "https://github.com/AIsTushar/trade-go-limited",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
    overview: [
      "Trade Go Limited is a polished marketing website focused on clarity, trust, and responsive browsing for a business-facing audience.",
      "The project leaned heavily on clean layouts, accessible content structure, and performance-conscious frontend implementation.",
    ],
    features: [
      "Responsive marketing layouts across major breakpoints",
      "Service-focused page sections with clear call to actions",
      "Clean component structure for scalable content updates",
      "Fast-loading imagery and lightweight frontend interactions",
      "Business-first presentation designed for credibility",
    ],
    lessons: [
      {
        title: "Content Hierarchy",
        description:
          "Learned how stronger information hierarchy makes service sites easier to scan and more convincing for first-time visitors.",
        icon: "layout",
      },
      {
        title: "Frontend Consistency",
        description:
          "Refined reusable section patterns and spacing systems to keep the UI cohesive across multiple screens.",
        icon: "layers",
      },
      {
        title: "Delivery Speed",
        description:
          "Balanced visual polish with practical implementation so the site could launch cleanly without unnecessary complexity.",
        icon: "rocket",
      },
    ],
    gallery: createGallery("Trade Go Limited", [
      "/projects/trade-go-limited.png",
      "/projects/trade-go-limited-2.png",
      "/projects/trade-go-limited-3.png",
      "/projects/trade-go-limited-4.png",
    ]),
  },
  {
    slug: "mimic",
    featured: true,
    title: "mimic",
    description:
      "A multi-purpose web application built with Next.js to showcase diverse features and functionalities, including e-commerce, media galleries, Harry Potter content, and more.",
    image: "/projects/mimic.jpg",
    liveLink: "https://mimic-drab.vercel.app",
    gitLink: "https://github.com/AIsTushar/mimic",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
    overview: [
      "Mimic is an experimental multi-surface app that gave room to combine storytelling, product UI, and content-heavy layouts in a single codebase.",
      "The project became a strong sandbox for testing interactions, component reuse, and fast iteration across very different page types.",
    ],
    features: [
      "Multiple content experiences inside one application",
      "Reusable UI patterns shared across varied page designs",
      "Media-focused sections with visual-first presentation",
      "Responsive layouts built for experimentation",
      "Flexible code structure for rapid iteration",
    ],
    lessons: [
      {
        title: "Design Flexibility",
        description:
          "Practiced building components that can stretch across very different use cases without breaking visual consistency.",
        icon: "spark",
      },
      {
        title: "Scalable Structure",
        description:
          "Improved project organization for feature-rich interfaces that keep expanding over time.",
        icon: "boxes",
      },
      {
        title: "Creative Frontend Work",
        description:
          "Used the project to push layout ideas, visual variety, and interaction patterns beyond basic CRUD pages.",
        icon: "palette",
      },
    ],
    gallery: createGallery("Trade Go Limited", [
      "/projects/mimic.jpg",
      "/projects/mimic-2.png",
      "/projects/mimic-3.png",
      "/projects/mimic-4.png",
      "/projects/mimic-5.png",
    ]),
  },
  {
    slug: "hotel-management-system",
    featured: true,
    title: "Hotel Management System",
    description:
      "A modern and fully functional hotel management admin dashboard built with React.js and Supabase. Designed for employees to manage operations efficiently.",
    image: "/projects/project_2.png",
    liveLink: "https://the-wild-oasis-admin-panel-nu.vercel.app/dashboard",
    gitLink: "https://github.com/AIsTushar/The-Wild-Oasis-admin-panel",
    tags: [
      "JavaScript",
      "React",
      "Supabase",
      "Tailwind CSS",
      "VS Code",
      "ReactQuery",
    ],
    overview: [
      "This hotel management dashboard focuses on operational efficiency, helping staff manage bookings, cabins, and guest workflows from a single interface.",
      "It was a strong exercise in building data-heavy admin experiences where clarity, quick updates, and trustworthy UI feedback matter.",
    ],
    features: [
      "Dashboard flows tailored for internal operations",
      "Supabase-backed authentication and data workflows",
      "Filterable tables and management views",
      "Optimistic-feeling interactions for staff productivity",
      "Reusable admin components for long-term maintainability",
    ],
    lessons: [
      {
        title: "Data Workflows",
        description:
          "Gained deeper experience designing interfaces around real operational tasks instead of purely presentational pages.",
        icon: "database",
      },
      {
        title: "State Management",
        description:
          "Strengthened patterns for loading, caching, and syncing dashboard data with a smoother user experience.",
        icon: "refresh",
      },
      {
        title: "Admin UX",
        description:
          "Learned how small interface details can reduce friction for users performing repetitive management tasks.",
        icon: "briefcase",
      },
    ],
    gallery: createPlaceholderGallery(
      "/projects/project_2.png",
      "Hotel Management System",
    ),
  },
  {
    slug: "the-wild-oasis-website",
    featured: true,
    title: "The Wild Oasis Website",
    description:
      "A modern customer-facing hotel website built around a calm booking experience and a polished frontend presentation.",
    image: "/projects/project_3.png",
    liveLink: "https://the-wild-oasis-website-six-blond.vercel.app/",
    gitLink: "https://github.com/AIsTushar/The-Wild-Oasis-Website",
    tags: ["JavaScript", "React", "Supabase", "Tailwind CSS", "VS Code"],
    overview: [
      "The Wild Oasis Website translates hospitality content into a calm, welcoming browsing flow that supports exploration and conversion.",
      "Compared with the admin panel, this project focused more on guest-facing storytelling, booking intent, and polished content presentation.",
    ],
    features: [
      "Guest-focused browsing experience with clear navigation",
      "Calm layout system suited to travel and stay discovery",
      "Responsive booking-oriented screens",
      "Clean separation between content and reusable UI",
      "Accessible spacing and typography choices",
    ],
    lessons: [
      {
        title: "Hospitality Storytelling",
        description:
          "Learned how to use layout, imagery, and pacing to make a booking website feel inviting instead of mechanical.",
        icon: "image",
      },
      {
        title: "Component Reuse",
        description:
          "Reused design patterns effectively while keeping the experience distinct from the admin product.",
        icon: "layers",
      },
      {
        title: "Responsive Details",
        description:
          "Focused on how travel-focused content blocks adapt across screen sizes without losing visual calm.",
        icon: "smartphone",
      },
    ],
    gallery: createPlaceholderGallery(
      "/projects/project_3.png",
      "The Wild Oasis Website",
    ),
  },
  {
    slug: "tour-management-api",
    featured: false,
    title: "Tour management Api",
    description:
      "A backend-focused API project for managing tours, users, and related business flows with a Node.js and Express.js stack.",
    image: "/projects/project_7.png",
    liveLink: null,
    gitLink: "https://github.com/AIsTushar/Tour-management-Api",
    tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "VS Code"],
    overview: [
      "This API project centers on backend architecture and route design for tour-related business logic.",
      "It was especially useful for strengthening controller structure, database modeling, and request validation patterns.",
    ],
    features: [
      "REST-style route structure for core resources",
      "MongoDB-backed data persistence",
      "Separation of controllers, models, and middleware",
      "Validation-focused request handling",
      "Backend code shaped for future expansion",
    ],
    lessons: [
      {
        title: "API Design",
        description:
          "Practiced designing endpoint structures that stay readable and scalable as features expand.",
        icon: "server",
      },
      {
        title: "Database Thinking",
        description:
          "Improved schema planning and data modeling choices for backend-heavy applications.",
        icon: "database",
      },
      {
        title: "Middleware Patterns",
        description:
          "Used middleware more intentionally for validation, error handling, and request transformation.",
        icon: "shield",
      },
    ],
    gallery: createPlaceholderGallery(
      "/projects/project_7.png",
      "Tour Management API",
    ),
  },
  {
    slug: "recipedia",
    featured: false,
    title: "Recipedia - Recipe blog website",
    description:
      "A recipe-focused blog website built with Next.js and Tailwind CSS to present content in a clear and appetizing way.",
    image: "/projects/project_4.png",
    liveLink: "https://recipedia-coral.vercel.app",
    gitLink: "https://github.com/AIsTushar/Recipedia",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
    overview: [
      "Recipedia is a content-led project built around recipe discovery, readable layouts, and a warm editorial feel.",
      "It helped refine content-heavy interface design where imagery, spacing, and legibility all matter equally.",
    ],
    features: [
      "Recipe-first content presentation",
      "Readable long-form layout and content structure",
      "Image-supported browsing experience",
      "Responsive grid and article patterns",
      "Clean UI for visitors exploring food content",
    ],
    lessons: [
      {
        title: "Editorial Layouts",
        description:
          "Learned how to balance images, metadata, and long-form content without overwhelming the page.",
        icon: "book",
      },
      {
        title: "Content UX",
        description:
          "Improved how supporting UI can guide readers through dense content in a calm way.",
        icon: "pen",
      },
      {
        title: "Visual Rhythm",
        description:
          "Practiced building a stronger visual rhythm with cards, grids, and section spacing.",
        icon: "grid",
      },
    ],
    gallery: createPlaceholderGallery("/projects/project_4.png", "Recipedia"),
  },
  {
    slug: "forecaster-single-page",
    featured: false,
    title: "Forecaster Single Page",
    description:
      "A clean single-page weather experience built in Next.js with a focus on simple interaction and clear visual output.",
    image: "/projects/Forecaster.png",
    liveLink: "https://forecaster-single-page-nextjs.vercel.app",
    gitLink: "https://github.com/AIsTushar/forecaster-single-page-nextjs",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
    overview: [
      "Forecaster is a lightweight single-page project focused on simplicity, weather data presentation, and quick interaction.",
      "Its strength comes from reducing friction and keeping the interface easy to understand at a glance.",
    ],
    features: [
      "Single-page weather-focused user flow",
      "Quick information hierarchy for forecasts",
      "Simple but polished component styling",
      "Responsive visual layout for daily use",
      "Clear UI states for user actions",
    ],
    lessons: [
      {
        title: "Simplicity as a Feature",
        description:
          "Practiced removing unnecessary complexity so the product stays useful and lightweight.",
        icon: "spark",
      },
      {
        title: "Fast Feedback",
        description:
          "Improved UI responsiveness and clarity around immediate user actions and results.",
        icon: "bolt",
      },
      {
        title: "Polished Minimalism",
        description:
          "Refined how a small product can still feel considered through typography, spacing, and state design.",
        icon: "palette",
      },
    ],
    gallery: createPlaceholderGallery("/projects/Forecaster.png", "Forecaster"),
  },
  {
    slug: "react-real-estate-website",
    featured: false,
    title: "React Real Estate Website",
    description:
      "A real estate website experience built to present listings, visual hierarchy, and browsing clarity in a modern interface.",
    image: "/projects/React_Real.png",
    liveLink: "https://real-estate-website-cfb.pages.dev",
    gitLink: "https://github.com/AIsTushar/React-Real-Estate-Website",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
    overview: [
      "This project explores how to present property-focused content with stronger hierarchy, imagery, and call-to-action placement.",
      "It was valuable for practicing marketplace-style layouts where scannability and trust are central to the experience.",
    ],
    features: [
      "Property-focused layout patterns",
      "Image-led browsing and CTA placement",
      "Responsive listing-style sections",
      "Modern visual hierarchy for search intent",
      "Reusable components for marketplace pages",
    ],
    lessons: [
      {
        title: "Marketplace Layouts",
        description:
          "Learned how to structure information so users can compare options quickly and comfortably.",
        icon: "grid",
      },
      {
        title: "Conversion Thinking",
        description:
          "Improved the placement of actions and supporting details around high-intent user journeys.",
        icon: "rocket",
      },
      {
        title: "Visual Trust",
        description:
          "Focused more intentionally on presentation choices that help listings feel reliable and easy to evaluate.",
        icon: "shield",
      },
    ],
    gallery: createPlaceholderGallery(
      "/projects/React_Real.png",
      "React Real Estate Website",
    ),
  },
  {
    slug: "portfolio-website",
    featured: false,
    title: "Portfolio - The website you are looking at!",
    description:
      "This portfolio website showcases selected work, writing, and background information through a dark, minimal interface with thoughtful motion.",
    image: "/projects/project_8.png",
    liveLink: "/",
    gitLink: "https://github.com/AIsTushar/my-website",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
    overview: [
      "The portfolio is designed to feel personal, focused, and developer-forward while still giving each section enough visual identity.",
      "It brings together project storytelling, a concise bio, and small interaction details that make the site feel alive.",
    ],
    features: [
      "Focused personal brand presentation",
      "Project and article sections with consistent styling",
      "Reusable motion-enhanced UI components",
      "Dark visual language with accent-driven highlights",
      "Simple structure that stays easy to maintain",
    ],
    lessons: [
      {
        title: "Personal Product Thinking",
        description:
          "Treated the portfolio like a real product instead of a static page, with attention to pacing and storytelling.",
        icon: "user",
      },
      {
        title: "System Reuse",
        description:
          "Built around reusable components so new pages and sections can be added without rewriting the design language.",
        icon: "layers",
      },
      {
        title: "Visual Identity",
        description:
          "Used a tighter visual direction to make the site feel more memorable and more representative of my work.",
        icon: "palette",
      },
    ],
    gallery: createPlaceholderGallery(
      "/projects/project_8.png",
      "Portfolio Website",
    ),
  },
];

export function getProjectBySlug(slug) {
  const normalizedSlug = normalizeSlug(slug);

  return projects.find(
    (project) => normalizeSlug(project.slug) === normalizedSlug,
  );
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getMoreProjects() {
  return projects.filter((project) => !project.featured);
}

export function getRelatedProjects(slug, limit = 4) {
  const normalizedSlug = normalizeSlug(slug);

  return projects
    .filter((project) => normalizeSlug(project.slug) !== normalizedSlug)
    .slice(0, limit);
}
