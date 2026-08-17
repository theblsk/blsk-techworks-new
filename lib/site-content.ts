export const siteConfig = {
  name: "BLSK Labs",
  tagline: "Independent Software Delivery",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://blsk.dev",
  email: "sales@blsk.dev",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    "mailto:sales@blsk.dev?subject=Project%20discovery%20call",
  description:
    "BLSK Labs is an independent software delivery partner for founders and teams building web applications, SaaS products, mobile apps, APIs, and backend systems.",
}

export const services = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    description:
      "Plan, build, and improve business software from the first technical decision through production support.",
    metaDescription:
      "Custom software development for businesses that need product strategy, web apps, mobile apps, backend systems, integrations, and long-term support.",
    h1: "Custom software for work that needs to hold up in production.",
    overview:
      "We turn operational problems, product ideas, and legacy workflows into maintainable software. Work can start from a blank page, an existing codebase, or a focused feature backlog. AI can accelerate delivery, but design decisions, code review, testing, and production responsibility remain engineer-led.",
    deliverables: [
      "Product discovery and technical scoping",
      "Web and mobile application development",
      "Backend systems, APIs, and integrations",
      "Cloud deployment, monitoring, and support",
    ],
    fit: [
      "Founders validating a product with real users",
      "Teams replacing spreadsheet-heavy operations",
      "Companies that need a long-term technical partner",
    ],
    proof: "Pulse combines reservation records, hotel integrations, automation workflows, and an AI data assistant in one operational system.",
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    shortTitle: "Web Apps",
    description:
      "Design and develop secure, responsive web applications for dashboards, portals, SaaS products, and internal workflows.",
    metaDescription:
      "Web application development for dashboards, portals, SaaS products, admin tools, and business workflows using modern frontend and backend architecture.",
    h1: "Web applications built around the work people actually do.",
    overview:
      "From customer-facing portals to internal platforms, we build web applications that are easy to use, dependable in production, and structured so future development stays manageable.",
    deliverables: [
      "Next.js and React application development",
      "Authentication and role-based access control",
      "Admin dashboards and internal tools",
      "Responsive UI implementation and deployment",
    ],
    fit: [
      "SaaS founders building a first production product",
      "Businesses modernizing manual workflows",
      "Teams that need a web app connected to real data",
    ],
    proof: "Pulse gives hotel teams a web platform for reservation visibility, automation setup, and AI-assisted data exploration.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    description:
      "Build iOS and Android applications with shared codebases, clean user flows, and backend integrations that support production use.",
    metaDescription:
      "Cross-platform mobile app development for iOS and Android, including React Native apps, authentication, notifications, APIs, and backend integration.",
    h1: "Mobile apps for products that need to work beyond a prototype.",
    overview:
      "We build cross-platform mobile applications for companies that need a dependable product experience on iOS and Android without duplicating every part of the codebase.",
    deliverables: [
      "React Native mobile app development",
      "Authentication, user profiles, and permissions",
      "Push notifications and realtime updates",
      "API integration and release support",
    ],
    fit: [
      "Founders launching a mobile-first product",
      "Businesses adding a mobile layer to an existing platform",
      "Teams that need one codebase across iOS and Android",
    ],
    proof: "Previous mobile work includes authenticated apps with realtime notifications, backend APIs, and production deployment pipelines.",
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    shortTitle: "SaaS",
    description:
      "Build SaaS platforms with authentication, billing-ready architecture, multi-tenant data models, dashboards, and scalable backend foundations.",
    metaDescription:
      "SaaS development services for founders and teams building subscription products, multi-tenant platforms, dashboards, APIs, and production infrastructure.",
    h1: "SaaS development for founders ready to build a real product.",
    overview:
      "We help SaaS teams move from concept to production with the product, data, and backend foundations needed to support real customers.",
    deliverables: [
      "MVP scoping and product architecture",
      "Multi-tenant database design",
      "Subscription-ready product workflows",
      "Analytics, admin tools, and customer operations",
    ],
    fit: [
      "Founders building a focused SaaS MVP",
      "Teams extending an existing SaaS product",
      "Businesses turning internal software into a marketable product",
    ],
    proof: "Pulse is an active SaaS-style platform used for hospitality data, automation, and AI-assisted operational visibility.",
  },
  {
    slug: "backend-api-development",
    title: "Backend and API Development",
    shortTitle: "Backend APIs",
    description:
      "Develop backend services, APIs, data pipelines, integrations, and reconciliation workflows where reliability and data integrity matter.",
    metaDescription:
      "Backend and API development for production systems, integrations, data pipelines, reconciliation workflows, AWS infrastructure, and operational software.",
    h1: "Backend and API development for systems where the data has to be right.",
    overview:
      "We build backend services for products that depend on correct data, reliable integrations, and operational visibility. This includes API layers, event-driven workflows, and reconciliation-heavy systems.",
    deliverables: [
      "REST and GraphQL API development",
      "Database design and performance improvements",
      "Cloud functions, jobs, and event-driven workflows",
      "Observability, alerts, and production hardening",
    ],
    fit: [
      "Payment, hospitality, logistics, and operations-heavy products",
      "Teams with complex data synchronization needs",
      "Companies replacing fragile manual or legacy backend processes",
    ],
    proof: "An anonymized PayFac reconciliation engagement involved AWS systems responsible for the integrity of millions of transactional records.",
  },
  {
    slug: "legacy-system-refactoring",
    title: "Legacy System Refactoring",
    shortTitle: "Refactoring",
    description:
      "Improve existing software by reducing technical debt, stabilizing critical flows, and modernizing the parts that slow the business down.",
    metaDescription:
      "Legacy system refactoring for businesses that need to improve performance, stabilize critical workflows, reduce technical debt, and modernize safely.",
    h1: "Legacy software refactoring without losing sight of the business.",
    overview:
      "We improve existing systems in controlled steps. The goal is not a rewrite for its own sake; it is better reliability, clearer architecture, and faster delivery where the business actually feels it.",
    deliverables: [
      "Codebase assessment and risk mapping",
      "Performance and reliability improvements",
      "Database and API cleanup",
      "Incremental migration plans",
    ],
    fit: [
      "Teams slowed down by fragile legacy code",
      "Products that need new features without a risky rewrite",
      "Businesses with critical workflows that need stabilization",
    ],
    proof: "Prior engineering work includes reducing slow backend paths, improving deployment flows, and rebuilding data exports for operational use.",
  },
]

export const caseStudies = [
  {
    slug: "pulse-hospitality-platform",
    title: "Pulse hospitality guest management platform",
    client: "Pulse",
    label: "Hospitality SaaS",
    description:
      "A guest-management system for hotels, connecting reservation data, operational automations, and AI-assisted analysis in one product.",
    metaDescription:
      "Case study: BLSK Labs built Pulse, a hospitality guest management platform with hotel integrations, reservation records, automation workflows, and AI data exploration.",
    challenge:
      "Hotel teams need reservation data to remain useful after it enters the system. Pulse needed to collect it from providers such as Oracle Hospitality and Alliance, keep 32 hotel-property integrations current, and let teams act as guests move through reservation states.",
    solution:
      "BLSK Labs leads Pulse's technology; its founder serves as CTO. We built API polling and webhook systems around hotel providers, the reservation and automation platform, email workflows, AI-assisted reservation analysis, and AI-assisted form creation.",
    outcome:
      "Pulse is launched and profitable. It holds more than 324,000 reservation records across 32 hotel properties and runs an average of three automations per property for each reservation-state transition.",
    services: ["Technology Leadership", "SaaS Development", "Backend and API Development", "AI-Assisted Workflows"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Cloud Run", "Oracle Hospitality APIs", "Alliance APIs"],
  },
  {
    slug: "payfac-reconciliation-systems",
    title: "Payment reconciliation systems",
    client: "Confidential PayFac — prior leadership role",
    label: "Payments Infrastructure · Prior experience",
    description:
      "Reconciliation systems for a payments facilitator processing millions of dollars in transactions.",
    metaDescription:
      "Case study: anonymized PayFac reconciliation systems on AWS, focused on data integrity, transaction processing, exports, and operational reliability.",
    challenge:
      "The reconciliation domain required accurate processing of large transaction volumes, dependable customer-facing exports, and clear failure handling for operations.",
    solution:
      "In a prior role as Head of Reconciliation, BLSK Labs' founder led the engineering work: AWS Step Functions orchestration, scheduled workflows, SNS failure alerts, ECS tasks, Parameter Store configuration, reconciliation services, and export systems.",
    outcome:
      "The workflows supported the reconciliation of millions of dollars in transactions, with operational alerts for failures and dependable exports built around processed data.",
    services: ["Reconciliation Engineering", "AWS Orchestration", "Data Integrity"],
    stack: ["AWS Step Functions", "ECS", "SNS", "Parameter Store", "Docker", "CloudWatch"],
  },
]

export const faqs = [
  {
    question: "What types of companies does BLSK Labs work with?",
    answer:
      "We work with start-ups, founders, small teams, and growing businesses worldwide. The best fit is a team that needs a dependable partner to build or improve a web app, mobile app, SaaS product, backend system, or long-term technical capability.",
  },
  {
    question: "Do you work with every industry?",
    answer:
      "We work across many industries, including hospitality, payments, logistics, commerce, operations, and AI-assisted software. We do not take liquor nightlife related or gambling projects.",
  },
  {
    question: "Can you work on an existing codebase?",
    answer:
      "Yes. Work can start from an existing codebase, a partially built MVP, a legacy system, or a new product idea. The first step is usually a technical review and a clear scope for the first useful improvement.",
  },
  {
    question: "Do you offer hourly, fixed-price, and retainer work?",
    answer:
      "Yes. We can work hourly, fixed-price, or on a retainer, depending on how clear the scope is and how much ongoing support the work needs. We will recommend a model after the first conversation.",
  },
  {
    question: "How does a new project usually start?",
    answer:
      "Most projects start with a 15- or 30-minute introductory call. We discuss the business goal, current system, timeline, and constraints. If there is a fit, the next step is a short written scope covering the requirements, technical risks, timeline, and recommended engagement model.",
  },
]
