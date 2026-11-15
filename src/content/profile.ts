/**
 * Central content file — edit your details here.
 *
 * Contact links: set `url` to a real address to make it clickable.
 * Leave it as `null` and the site shows a clearly marked, non-clickable placeholder.
 * Email: set `email` only to a verified address; a mailto link appears automatically.
 */

export type ContactLink = {
  label: string;
  /** Real profile URL, or null while it hasn't been supplied. */
  url: string | null;
};

export const profile = {
  name: "Aayush Pandey",
  initials: "AP",
  role: "Developer, designer & problem solver",
  location: "Varanasi, India",
  education: "Computer Science & Engineering student at PSIT, Kanpur",
  heroIntro:
    "A Computer Science & Engineering student at PSIT, Kanpur. I connect thoughtful design, engineering and problem-solving to create useful digital experiences.",
  interests: [
    "Full-stack development",
    "UI/UX & visual design",
    "Data structures & algorithms",
    "Research & storytelling & content creation",
  ],
  availability: "Open to collaborations, internships, and creative opportunities.",
};

export const contact: {
  /** Verified email only. null = show "Contact details to be added". */
  email: string | null;
  links: ContactLink[];
} = {
  email: "aayupanvar20@gmail.com",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/aayushpandey1930" },
    { label: "GitHub", url: "https://github.com/Aayushpandey1930" },
    { label: "Instagram", url: "https://www.instagram.com/aayushpandey019/" },
  ],
};

export const navItems = [
  { id: "introduction", label: "Introduction" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "learnings", label: "Learnings" },
] as const;

export type SkillGroup = {
  icon: "pen" | "code" | "bulb";
  title: string;
  description: string;
  tags: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    icon: "pen",
    title: "Design and UI/UX",
    description:
      "Exploring visual systems, interface clarity and user-centred design from first wireframes to clickable prototypes.",
    tags: ["Figma", "UI / UX", "Wireframing", "Prototyping", "Visual & graphic design"],
  },
  {
    icon: "code",
    title: "Full-stack development",
    description:
      "Building responsive, functional web apps while learning how structure, logic and data fit together.",
    tags: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "Python",
      "SQL · MySQL · PostgreSQL",
      "Git & GitHub",
    ],
  },
  {
    icon: "bulb",
    title: "Coding and problem-solving",
    description:
      "Practising data structures and algorithms regularly and bringing a research mindset to every problem.",
    tags: [
      "C++",
      "Python",
      "Data structures",
      "Algorithms",
      "LeetCode practice",
      "Research & analysis",
    ],
  },
];

export const mindset = {
  quote: ["“Design with empathy.", "Code with logic.", "Create with curiosity.”"],
  body: "I enjoy exploring where design, UI/UX, full-stack development, data structures and algorithms and graphic design meet.",
  exploringLabel: "Currently exploring",
  exploring: "Design systems, coding challenges and visual storytelling",
};

export const learnings = [
  {
    tag: "01 / Design",
    title: "Design systems help me stay consistent.",
    body: "Setting up type, colour and spacing early makes an interface easier to iterate on and much easier to hand over to code.",
  },
  {
    tag: "02 / Building",
    title: "Clean code makes a project easier to maintain.",
    body: "Small components, clear names and readable structure help me build faster and debug with more confidence.",
  },
  {
    tag: "03 / Process",
    title: "Prototypes help validate ideas quickly.",
    body: "A rough clickable prototype surfaces wrong assumptions before they turn into hours of rework.",
  },
  {
    tag: "04 / Practice",
    title: "DSA is a habit, not a sprint.",
    body: "Solving problems a little at a time is teaching me to break things down, spot patterns and reason about trade-offs.",
  },
  {
    tag: "05 / Research",
    title: "Verify before you publish.",
    body: "Editorial work taught me to check sources, cross-reference claims and let evidence shape the story not the other way round.",
  },
];

export const creative = {
  intro:
    "Graphic design, visual storytelling and research sit alongside my code. They shape how I frame problems and how I explain the work.",
  cards: [
    {
      tag: "01 / Type & expression",
      variant: "serif" as const,
      lines: ["Curiosity", "takes shape."],
      caption: "Graphic design and typographic play expressive type, quiet structure.",
    },
    {
      tag: "02 / Research & rhythm",
      variant: "sans" as const,
      lines: ["Think. Make.", "Refine."],
      caption: "Content research and visual storytelling, practised one post at a time.",
    },
  ],
  collaboration: {
    label: "The collaborative mindset",
    title: "Listen closely. Share early. Build together.",
    body: "From hackathon teams to community projects, I care about clarity, shared ownership and bringing curiosity to the work.",
  },
};
