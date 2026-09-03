/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pavithran S | Portfolio",
  description:
    "Full Stack & Android Developer and founder of BuildWithUs, a freelance studio shipping client web and mobile products. Third-year AI & Data Science student.",
  og: {
    title: "Pavithran S Portfolio",
    type: "website",
    // TODO: update once you know your final deploy URL (GitHub Pages default shown below)
    url: "https://mr1823.github.io/Pavithran-Portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Pavithran S",
  logo_name: "PavithranS",
  nickname: "Pavi",
  subTitle:
    "AI & Data Science Student · Founder, BuildWithUs · Building toward Zoho",
  resumeLink:
    "https://drive.google.com/file/d/1kSkgSu4I-XqD5j7BJc7HRy-_c_1eu8vm/view?usp=sharing",
  portfolio_repository: "https://github.com/Mr1823/Pavithran-Portfolio-2",
  githubProfile: "https://github.com/Mr1823",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Mr1823",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/paviofficial",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:paviofficial18@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "AI Product Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Built the Intelligence Layer for RageRadar (a B2B SaaS) using Claude Haiku and Claude Sonnet",
        "⚡ Led a Firebase-to-Supabase migration and set up GitHub MCP / Supabase MCP developer workflows",
        "⚡ Experimenting with local LLMs via Ollama for personal AI-assistant projects",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack & Mobile Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building end-to-end MERN stack apps — React front ends, Node/Express APIs, MongoDB data layers",
        "⚡ Shipping native Android apps in Java (Android Studio) and cross-platform apps in Flutter",
        "⚡ Implementing JWT auth, Razorpay payments, and REST APIs for real client products at BuildWithUs",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon-plain:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "simple-icons:androidstudio",
          style: {
            color: "#3DDC84",
          },
        },
      ],
    },
    {
      title: "Tools, Databases & Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Managing MongoDB and Room DB (SQLite) data layers across web and Android projects",
        "⚡ Daily dev workflow with Git, GitHub, and VS Code, working as a 4-person team",
        "⚡ Integrating Razorpay payments, Cloudinary media storage, and Supabase into production apps",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#003B57",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "Razorpay",
          fontAwesomeClassname: "simple-icons:razorpay",
          style: {
            color: "#0C2451",
          },
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "simple-icons:cloudinary",
          style: {
            color: "#3448C5",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3ECF8E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/MrBlackHeart/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kamaraj College of Engineering and Technology (KCET)",
      subtitle: "B.Tech in Artificial Intelligence & Data Science",
      logo_path: "kcet_logo.png", // TODO: swap in the real KCET logo
      alt_name: "KCET, Anna University",
      duration: "2024 - 2028",
      descriptions: [
        "⚡ Third-year student, affiliated with Anna University — CGPA 8.01/10",
        "⚡ Core coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks",
      ],
      website_link: "https://kamarajengg.edu.in",
    },
  ],
};

const certifications = {
  // Add entries once you have certificate_link + org logo for:
  //   Cisco NetAcad (Intro to Modern AI, Data Analytics Essentials, Apply AI),
  //   Anthropic certificate series, Microsoft AI Skills Fest.
  // Each entry: { title, subtitle, logo_path, certificate_link, alt_name, color_code }
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships and Freelance Work",
  description:
    "I build production web and mobile products — as an AI Product Engineering Intern at Straw Labs, and as the founder of BuildWithUs, a freelance studio delivering client projects across the MERN stack, Flutter, and native Android.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "AI Product Engineering Intern",
          company: "Straw Labs (Genesis Cohort 01)",
          company_url: "https://www.strawlabs.in/",
          logo_path: "strawlabs_logo.png", // TODO: swap in real logo
          duration: "June 2026 - September 2026",
          location: "Hybrid / Remote",
          description:
            "Selected for a 14-week AI-native product cohort building RageRadar, a B2B Rage Index SaaS. Built the Intelligence Layer using Claude Haiku and Claude Sonnet, led the Firebase-to-Supabase migration, and set up the GitHub MCP and Supabase MCP developer workflow.",
          color: "#fca311",
        },
        {
          title: "Frontend Development Intern",
          company: "Lamda Tech Softics",
          company_url: "https://in.linkedin.com/company/lamda-tech-softics",
          logo_path: "lamdatechsoftics_logo.png", // TODO: swap in real logo
          duration: "December 2024 (15 days)",
          location: "Virudhunagar, Tamil Nadu",
          description:
            "Completed a 15-day offline internship. Built an Instagram clone frontend — feed, profile, and stories UI — using HTML, CSS, and JavaScript.",
          color: "#5A6377",
        },
      ],
    },
    {
      title: "Freelance",
      experiences: [
        {
          title: "Founder",
          company: "BuildWithUs",
          company_url: "https://www.buildwithus.co.in",
          logo_path: "buildwithus_logo.png", // TODO: swap in real logo
          duration: "January 2025 - Present",
          location: "Tenkasi, Tamil Nadu",
          description:
            "Founded and run a Udyam-registered freelance studio with three teammates, delivering paid web and mobile projects for retail clients end to end — requirements, build, QA, and handover. Built a MERN e-commerce platform for Sri Ram Jewellery with custom JWT auth and server-side Razorpay verification, and a Flutter retail/wholesale app for Manisha Fashions with phone+OTP login and a Node/Express/MongoDB backend.",
          color: "#fca311",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I build full-stack web apps, native Android apps, and AI-powered products using the MERN stack, Flutter, Java, and Python. Projects are auto-fetched from my GitHub.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Articles, blogs, and research — coming soon.",
  avatar_image_path: "projects_image.svg",
};

// Keep the section structure; add entries when you publish articles or blogs.
const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pavithran_profile.png", // TODO: swap in your profile photo
    description:
      "I'm most responsive on LinkedIn and email. Feel free to reach out about freelance projects, collaborations, or anything related to full-stack development, Android, and AI.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I plan to document my experiences building real products and learning AI — stay tuned.",
    link: "", // TODO: add your blog URL when ready
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Tenkasi, Tamil Nadu, India",
    locality: "Tenkasi",
    country: "India",
    region: "Tamil Nadu",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Tenkasi",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 93637 50806",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
