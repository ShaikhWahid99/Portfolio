const portrait = "/assets/portrait.jpg";
const p1 = "/assets/proj-1.jpg";
const p2 = "/assets/proj-2.jpg";
const p3 = "/assets/proj-3.jpg";
const p4 = "/assets/proj-4.jpg";

export const profile = {
  name: "Wahid Shaikh",
  role: "Backend-focused Full Stack Developer",
  location: "Mumbai, India",
  email: "wahid.shaikh4422@gmail.com",
  phone: "+91-8169120436",
  portrait,
  bio: "Backend-focused full stack developer and IT undergraduate building scalable REST APIs, secure microservices, and AI-driven applications with the MERN stack, FastAPI, LangChain, RAG, LLMs, vector databases, Docker, and AWS.",
  social: {
    github: "https://github.com/ShaikhWahid99",
    linkedin: "https://www.linkedin.com/in/wahidskh",
  },
};

export const skills = [
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "Python", icon: "PY" },
  { name: "Node.js", icon: "ND" },
  { name: "Express.js", icon: "EX" },
  { name: "FastAPI", icon: "FA" },
  { name: "React.js", icon: "RE" },
  { name: "MongoDB", icon: "MO" },
  { name: "PostgreSQL", icon: "PG" },
  { name: "Neo4j", icon: "N4" },
  { name: "Docker", icon: "DK" },
  { name: "AWS", icon: "AWS" },
];

export const stack = [
  "JavaScript",
  "TypeScript",
  "Python",
  "C",
  "Java",
  "SQL",
  "Node.js",
  "Express.js",
  "FastAPI",
  "React.js",
  "Tailwind CSS",
  "ReactFlow",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Neo4j",
  "ChromaDB",
  "Docker",
  "Git",
  "GitHub",
  "Postman",
  "Firebase",
  "Vercel",
  "Render",
  "JWT",
  "Passport.js",
  "Google OAuth",
  "WebRTC",
  "Socket.IO",
  "LangChain",
  "RAG",
  "LLMs",
];

export const projects = [
  {
    title: "Personalized Learning Path Generator",
    image: p1,
    description:
      "Full-stack adaptive learning platform built for SIH Finals with role-based dashboards, JWT, Google OAuth 2.0, bcrypt, Neo4j recommendations, LangChain-powered quiz generation, and ReactFlow learning roadmaps.",
    tech: ["React 18", "TypeScript", "Node.js", "MongoDB", "Neo4j"],
    live: "#",
    github: "#",
  },
  {
    title: "Multimodal RAG",
    image: p2,
    description:
      "FastAPI, React, and PostgreSQL platform for intelligent Q&A over PDFs with text, tables, and images. Includes PyMuPDF/OCR ingestion, ChromaDB retrieval, MiniLM embeddings, Gemini 2.5, and multi-tenant JWT auth.",
    tech: ["FastAPI", "React", "PostgreSQL", "ChromaDB", "Gemini"],
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    image: p3,
    description:
      "Responsive MERN e-commerce app with admin product management, MongoDB Atlas data modeling through Mongoose v7, session login with Passport.js, Passport JWT protected routes, and Vercel deployment.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Passport.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Video Conferencing Web App",
    image: p4,
    description:
      "WebRTC peer-to-peer video calling platform with Socket.IO signaling, session coordination, STUN server configuration for NAT traversal, and a real-time collaborative whiteboard.",
    tech: ["WebRTC", "Socket.IO", "Node.js", "React.js"],
    live: "#",
    github: "#",
  },
];

export const experience = [
  {
    company: "SIH Finals",
    role: "Developer - Personalized Learning Path Generator",
    period: "Nov 2025 - Dec 2025",
    description:
      "Built a full-stack adaptive learning platform with React, TypeScript, Node.js, MongoDB, and Neo4j. Designed graph-based recommendations with Cypher and cosine similarity, integrated external LLM APIs, and delivered interactive ReactFlow roadmaps with resilient authenticated API layers.",
  },
  {
    company: "Multimodal RAG",
    role: "Team Lead",
    period: "Sep 2025 - Apr 2026",
    description:
      "Architected a document intelligence platform using FastAPI, React, and PostgreSQL. Built OCR-based ingestion with PyMuPDF and PyTesseract, hybrid ChromaDB retrieval with MiniLM embeddings, figure extraction, Gemini 2.5 integration, and secure multi-tenant JWT architecture.",
  },
  {
    company: "Mumbai University",
    role: "B.E. Information Technology",
    period: "Aug 2022 - Present",
    description:
      "Pursuing Bachelor of Engineering in Information Technology with a 7.94 CGPI while building production-style full-stack, backend, cloud, and AI projects.",
  },
  {
    company: "Certifications",
    role: "AWS, Oracle, React, Drupal",
    period: "Ongoing",
    description:
      "AWS Academy Machine Learning Foundations, AWS Academy Cloud Web Application Builder, Oracle Cloud Infrastructure Foundations II, React Bootcamp, and Drupal Training Course from SINE IIT Bombay.",
  },
];
