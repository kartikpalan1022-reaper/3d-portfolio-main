const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Projects",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "About Me",
    link: "#aboutMe",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 0, suffix: "+", label: "Years of Experience" },
  // { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 27, suffix: "+", label: "DSA Problems Solved" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/web.png",
    title: "Full Stack Engineering",
    desc: "Creating modern, scalable, and responsive web applications from frontend to backend.",
  },
  {
    imgPath: "/images/ai.png",
    title: "AI & Machine Learning",
    desc: "Building intelligent applications powered by machine learning and data-driven models.",
  },
  {
    imgPath: "/images/dsa.png",
    title: "Problem Solving",
    desc: "Designing efficient algorithms and solving complex coding challenges using DSA.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
        "Built an AI-powered SEO analysis platform that automates website audits, tracks keyword rankings, and delivers actionable optimization insights through AI-driven reports.",

    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",

    title: "Full Stack & AI Developer",

    date: "July 2026",

    responsibilities: [
      "Developed a full-stack SEO platform using React, TypeScript, Node.js, Express, and MongoDB.",
      "Integrated Browserbase, Playwright, and Google Gemini API to automate website auditing and generate AI-powered SEO recommendations.",
      "Implemented Google keyword rank tracking, competitor analysis, scheduled updates with cron jobs, and an interactive analytics dashboard.",
    ],
    liveLink: "https://seo-rank-tracker-front.vercel.app",
  },
  {
    review:
        "Built a full-stack restaurant reservation platform that streamlines table bookings, restaurant management, and role-based access for customers, restaurant owners, and administrators.",

    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",

    title: "MERN Stack Developer",

    date: "June 2026",

    responsibilities: [
      "Developed a full-stack restaurant reservation platform using React, TypeScript, Node.js, Express.js, and MongoDB.",
      "Implemented JWT authentication, role-based access control, secure booking workflows, and Cloudinary-powered image uploads.",
      "Built dedicated dashboards for customers, restaurant owners, and administrators with booking management and restaurant approval features.",
    ],

    liveLink: "https://quick-dine-tan.vercel.app/",
  },
  {
    review:
        "Currently developing a full-stack social media management platform focused on simplifying content planning, scheduling, and multi-platform publishing through a modern and scalable architecture.",

    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",

    title: "Full Stack Developer",

    date: "Ongoing",

    responsibilities: [
      "Building a responsive React-based dashboard for scheduling and managing social media content.",
      "Developing scalable backend APIs, authentication, and database architecture for secure content management.",
      "Implementing post scheduling, analytics, and multi-platform publishing features as part of an ongoing development process.",
    ],

    // liveLink: "https://your-live-demo.vercel.app", // Remove this line if not deployed yet
    liveLink : "#"


  },
  {
    review:
        "Developed a full-stack food delivery platform with secure authentication, online payments, and a dedicated admin dashboard for efficient food and order management.",

    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",

    title: "MERN Stack Developer",

    date: "May 2026",

    responsibilities: [
      "Built a MERN-based food delivery application with JWT authentication, cart management, and order processing.",
      "Integrated Stripe payment gateway for secure online transactions and implemented RESTful APIs using Node.js and Express.",
      "Developed a dedicated admin dashboard to manage food items, customer orders, and order status updates with MongoDB as the backend database.",
    ],

    liveLink: "https://food-del-sigma-nine.vercel.app/",

  }
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const aboutMe = {

  name: "Kartik Palan",

  profileImg: "/images/profile.jpeg",

  sections: [

    {
      title: "🎓 Education",

      items: [

        "B.Tech in Electronics & Telecommunication",

        "IIIT Bhubaneswar", // <- yaha college naam change kar dena agar zarurat ho

        "2023 - 2027",

        "CGPA : 8.18",

      ],
    },

    {
      title: "🏫 Academic Background",

      items: [
        "Nirmala Memorial Foundation College of Science & Commerce, Higher Secondary (HSC) - 83.5%",
        "Marol Education Academy High School, Secondary (SSC) - 90.8%",

      ],
    },

    {
      title: "⚡ Interests",

      items: [

        "♟️ Chess",

        "🏸 Badminton",

        "💪 Fitness",

        "🤖 Artificial Intelligence",

        "🌍 Open Source",

        "🎵 Music",

        "✈️ Exploring New Technologies",

      ],
    },

    {
      title: "🎯 Current Focus",

      items: [

        "Building scalable Full Stack Applications",

        "Machine Learning & AI",

        "System Design",

        "Data Structures & Algorithms",

        "Open Source Contributions",

      ],
    },

  ],

};

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://instagram.com/kartik_palan_"
  },
  {
    name: "leetcode",
    imgPath: "/images/leetcode.png",
    link:"https://leetcode.com/u/Kartik_Palan/"
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    link:"https://github.com/kartikpalan1022-reaper/"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link:"www.linkedin.com/in/kartik-palan"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  aboutMe,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
