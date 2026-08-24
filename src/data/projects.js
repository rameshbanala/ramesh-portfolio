import fixitImg from "../assets/fixit.png";
import mypocketImg from "../assets/mypocket.jpg";
import resumeAnalyzerImg from "../assets/resume_analyzer.png";
import agrofixImg from "../assets/agrofix.png";

export const primaryProjects = [
  {
    slug: "fixit",
    title: "FixIt",
    tagline: "Hyperlocal home-repair marketplace",
    image: fixitImg,
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Socket.IO",
    ],
    overview:
      "A rebuilt marketplace connecting homeowners with verified repair providers, with a three-role system (customer, provider, admin) and real-time booking updates. Redis-backed background jobs handle matching and notifications without blocking request paths.",
    architecture: [
      "React 19 / Vite / Tailwind",
      "Node.js / Express API",
      "PostgreSQL",
    ],
    architectureBranch: {
      from: "PostgreSQL",
      steps: ["Redis", "BullMQ", "Background Jobs"],
    },
    realtime: {
      label: "Socket.IO",
      steps: ["Real-time Booking Updates"],
    },
    highlights: [
      "Customer / provider / admin role system with scoped API access",
      "Redis + BullMQ background job queue for matching and notifications",
      "Socket.IO-driven real-time booking status updates",
      "Full rebuild from an earlier learning version to a production-shaped architecture",
    ],
    liveDemo: "https://new-fixit-rho.vercel.app",
    github: null,
  },
  {
    slug: "mypocket",
    title: "MyPocket",
    tagline: "Offline-first personal finance app",
    image: mypocketImg,
    imageOrientation: "portrait",
    technologies: ["React Native", "SQLite", "Firebase"],
    overview:
      "An offline-first personal finance app for tracking expenses, income, and savings goals. All data is written to a local SQLite store first, so the app is fully usable without a network connection, then synced to Firebase in the background. Supports importing bank statements directly.",
    architecture: ["React Native", "Local SQLite", "Sync Layer", "Firebase"],
    highlights: [
      "Offline-first / local-first architecture — SQLite is the source of truth on-device",
      "Background synchronization to Firebase once connectivity returns",
      "Bank statement import and parsing across CSV, XLSX, and PDF formats",
      "Automatic transaction classification into spending categories",
    ],
    liveDemo: null,
    github: null,
    apkUrl:
      "https://drive.google.com/file/d/1wd6sAJJU2sgQ26f6ZV5dS-XYxc0YAGBo/view?usp=drive_link",
  },
];

export const secondaryProjects = [
  {
    title: "Estate360 — Real Estate Platform",
    description:
      "Real estate listing and management platform built at ScaleOrange Technologies — PERN + React Native monorepo sharing business logic across web and mobile, with geo-based property filtering and a multi-role (buyer, seller, agent, admin) access system.",
    image: null,
    technologies: [
      "PostgreSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "React Native",
    ],
    liveDemo: null,
    github: null,
    workProject: true,
  },
  {
    title: "Resume Analyzer — AI Resume Evaluation Platform",
    description:
      "Full-stack application that parses, evaluates, and scores resumes using Gemini. PostgreSQL schema with JSONB fields for flexible resume data, plus personalized improvement and upskilling suggestions generated from the parsed content.",
    image: resumeAnalyzerImg,
    technologies: ["Node.js", "Express.js", "PostgreSQL", "React.js", "Gemini AI"],
    liveDemo: "https://resume-analyzer-app.netlify.app",
    github: "https://github.com/rameshbanala/resume-analyzer",
  },
  {
    title: "AgroFix — Bulk Agro Order Management",
    description:
      "Platform for managing bulk fruit and vegetable orders for institutions, with user/admin roles, order tracking, and a responsive UI for agricultural commerce management.",
    image: agrofixImg,
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
    liveDemo: "https://agrofix.netlify.app/",
    github: "https://github.com/rameshbanala/agro-fix-frontend",
  },
  {
    title: "NxtWatch — YouTube Clone with Dark Mode",
    description:
      "A YouTube-style platform with category-based video browsing, JWT authentication, watchlist management, and theme switching.",
    image: null,
    technologies: ["React.js", "JavaScript", "JWT Auth"],
    liveDemo: "https://rameshnextwatch.netlify.app",
    github: "https://github.com/rameshbanala/nxtwatch",
  },
  {
    title: "Wikipedia Search App",
    description:
      "A dynamic Wikipedia search tool with real-time API integration, instant search results, and a responsive UI.",
    image: null,
    technologies: ["JavaScript", "Bootstrap", "REST API"],
    liveDemo: "https://wikiproj.ccbp.tech",
    github: null,
  },
];
