export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhawnakumari",
  },
  {
    label: "Email",
    href: "mailto:bhawnakumari6375@gmail.com",
  },
  {
    label: "Call",
    href: "tel:+916375051125",
  },
];

export const site = {
  initials: "BK",
  name: "Bhawna Kumari",
  role: "Web Developer",
  availability: "Delhi, India",
  email: "bhawnakumari6375@gmail.com",
  phone: "+91 63750 51125",
  heroLine:
    "Associate Engineer with over a year of experience in crafting responsive, user-centric web applications. Skilled in Tailwind CSS, JavaScript, and React.js to create seamless digital experiences that enhance user engagement.",
  aboutTitle: "Built with intent.",
  aboutCopy: [
    "Associate Engineer with over a year of experience in crafting responsive, user-centric web applications. Skilled in Tailwind CSS, JavaScript, and React.js to create seamless digital experiences that enhance user engagement.",
    "I design and optimize modern interfaces for healthcare, e-commerce, and real-estate platforms, with a focus on performance, clarity, and conversion-oriented user experiences.",
  ],
  stats: [
    { value: "1+", label: "Years Experience", icon: "spark" },
    { value: "30%", label: "Faster Page Loads", icon: "layers" },
    { value: "47+", label: "UI Issues Resolved", icon: "heart" },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Tailwind CSS",
    "Bootstrap",
    "Context API",
    "Redux Toolkit",
    "Axios",
    "Figma",
    "Responsive Web Design",
    "Cross-Browser Compatibility",
  ],
  workFilters: ["All", "Web App", "Dashboard", "UI/UX"],
  contactTitle: "Have a good problem to solve?",
  contactCopy:
    "I am a Front-End Developer at MCITI Services in Delhi, and I am open to freelance work and interesting opportunities. Let’s build something great together.",
};

export const projects = [
  {
    id: "youtube-clone",
    title: "YouTube App UI Clone",
    category: "Web App",
    status: "Personal",
    type: "quote",
    theme: "lime",
    quote: "Search, scroll, and chat in real time.",
    description:
      "Fetched video details from YouTube API, managed a collapsible sidebar, added autocomplete search, and implemented infinite scroll with skeleton loading for a smoother experience.",
    tags: ["React.js", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: "shopping-cart",
    title: "Shopping Cart",
    category: "UI/UX",
    status: "Personal",
    type: "logo",
    theme: "coral",
    logoLetter: "S",
    description:
      "Built a product listing experience with search, price and rating filters, stock and delivery options, and cart state management using Context API and Redux Toolkit.",
    tags: ["React.js", "Context API", "Redux Toolkit"],
  },
  {
    id: "live-chat",
    title: "Live Chat Feature",
    category: "Web App",
    status: "Project",
    type: "chart",
    theme: "blue",
    metricLabel: "Communication",
    metricValue: "Real-time",
    metricHint: "Streaming",
    metricTime: "Live",
    description:
      "Enabled users to send real-time messages during video streaming, improving live interaction and collaboration for the platform experience.",
    tags: ["React.js", "JavaScript", "UI/UX"],
  },
  {
    id: "real-estate",
    title: "Real Estate Platform",
    category: "Dashboard",
    status: "Client work",
    type: "chart",
    theme: "navy",
    metricLabel: "Lead conversion",
    metricValue: "Responsive",
    metricHint: "Tenant + super-admin",
    metricTime: "MCITI",
    description:
      "Designed and optimized a fully responsive tenant and super-admin platform with multi-step registration, advanced property search, lead generation, and booking flows.",
    tags: ["React.js", "Tailwind CSS", "Figma"],
  },
];
