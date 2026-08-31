export const experiences = [
  {
    company: "Tvara",
    role: "Full Stack Developer",
    location: "Andhra Pradesh, India",
    duration: "Jun 2026 – Present",
    current: true,
    tags: ["AI", "Backend", "Integrations", "Telephony"],
    summary:
      "B2B sales automation / AI-powered CRM SaaS platform — building AI-driven campaign generation, telephony infrastructure, and production backend services.",
    groups: [
      {
        title: "AI-Powered Campaign Generation",
        bullets: [
          "Built LLM-powered campaign generation — lead matching, structured JSON drafting, and a multi-stage approval workflow.",
          "Implemented anti-hallucination validation and prompt engineering to keep generated output reliable in production.",
        ],
      },
      {
        title: "Telephony",
        bullets: [
          "Owned telephony infrastructure integration — SIP/WebRTC calling, webhook handling, billing deduplication, and call-metadata mapping across multiple providers.",
          "Designed the provisioning and deprovisioning state machine for voice infrastructure.",
        ],
      },
      {
        title: "Production Engineering",
        bullets: [
          "Built Go and Node.js backend services; implemented Zoho CRM sync via the outbox pattern and integrated the WhatsApp Business API.",
          "Debugged and resolved push-notification delivery failures and enforced API-level access control.",
          "Shipped React Native/Expo call-recording retrieval on Android using expo-media-library + StorageAccessFramework — no native Kotlin required.",
        ],
      },
    ],
    techStack: [
      "Go",
      "Node.js",
      "Next.js",
      "React Native",
      "Gemini",
      "Twilio",
      "SIP/WebRTC",
      "Zoho CRM",
      "WhatsApp Business API",
      "Firebase",
    ],
  },
  {
    company: "ScaleOrange Technologies",
    role: "Software Developer Intern — Full Stack & Mobile",
    location: "Hyderabad, India (Hybrid)",
    duration: "May 2025 – Mar 2026",
    current: false,
    tags: ["Mobile", "Backend", "Infra"],
    summary:
      "10-month full-stack and mobile internship — shipped production applications serving real users, from mobile apps to infrastructure.",
    groups: [
      {
        title: "ServeNest",
        bullets: [
          "Architected and shipped ServeNest — a cross-platform React Native app connecting 5,000+ users with hyperlocal service providers via integrated maps, WhatsApp deep-links, and direct calls.",
          "Built role-based admin dashboards with real-time analytics, reducing manual reporting effort by ~60%.",
        ],
      },
      {
        title: "Estate360 & Backend",
        bullets: [
          "Built and deployed Estate360 (PERN + React Native monorepo) — a real estate listing and management platform sharing business logic across web and mobile.",
          "Integrated the Razorpay payment gateway with webhook handlers for subscription-based monetisation.",
          "Optimised PostgreSQL queries with JSONB indexing, reducing average API response time by ~40%.",
        ],
      },
      {
        title: "Infrastructure",
        bullets: [
          "Managed Linux VMs, configured Docker containers for isolated service deployments, and set up an Nginx reverse proxy with custom domain and SSL termination.",
        ],
      },
    ],
    techStack: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "Razorpay",
      "Firebase FCM",
      "Linux",
    ],
  },
];
