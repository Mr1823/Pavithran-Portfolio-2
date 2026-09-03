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
    url: "https://mr1823.github.io/Pavithran-Portfolio-2/",
  },
};

//Home Page
const greeting = {
  title: "Pavithran S",
  logo_name: "PavithranS",
  nickname: "Pavi",
  subTitle:
    "AI & Data Science Student \u00b7 Founder, BuildWithUs \u00b7 Building toward Zoho",
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
        "\u26a1 Built the Intelligence Layer for RageRadar (a B2B SaaS) using Claude Haiku and Claude Sonnet",
        "\u26a1 Led a Firebase-to-Supabase migration and set up GitHub MCP / Supabase MCP developer workflows",
        "\u26a1 Experimenting with local LLMs via Ollama for personal AI-assistant projects",
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
        "\u26a1 Building end-to-end MERN stack apps \u2014 React front ends, Node/Express APIs, MongoDB data layers",
        "\u26a1 Shipping native Android apps in Java (Android Studio) and cross-platform apps in Flutter",
        "\u26a1 Implementing JWT auth, Razorpay payments, and REST APIs for real client products at BuildWithUs",
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
        "\u26a1 Managing MongoDB and Room DB (SQLite) data layers across web and Android projects",
        "\u26a1 Daily dev workflow with Git, GitHub, and VS Code, working as a 4-person team",
        "\u26a1 Integrating Razorpay payments, Cloudinary media storage, and Supabase into production apps",
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
      logo_path: "kcet_logo.png",
      alt_name: "KCET, Anna University",
      duration: "2024 - 2028",
      descriptions: [
        "\u26a1 Third-year student, affiliated with Anna University \u2014 CGPA 8.01/10",
        "\u26a1 Core coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks",
      ],
      website_link: "https://kamarajengg.edu.in",
    },
    {
      title: "Veeramamunivar RC Hr. Sec. School, Tenkasi",
      subtitle: "Higher Secondary Certificate (HSC - 12th)",
      logo_path: "education.svg",
      alt_name: "Veeramamunivar RC Hr. Sec. School",
      duration: "",
      descriptions: ["\u26a1 Scored 76%"],
      website_link: "",
    },
    {
      title: "Veeramamunivar RC Hr. Sec. School, Tenkasi",
      subtitle: "Secondary School Leaving Certificate (SSLC - 10th)",
      logo_path: "education.svg",
      alt_name: "Veeramamunivar RC Hr. Sec. School",
      duration: "",
      descriptions: ["\u26a1 Scored 59.4%"],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships and Freelance Work",
  description:
    "I build production web and mobile products \u2014 as an AI Product Engineering Intern at Straw Labs, and as the founder of BuildWithUs, a freelance studio delivering client projects across the MERN stack, Flutter, and native Android.",
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
          logo_path: "strawlabs_logo.png",
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
          logo_path: "lamdatechsoftics_logo.png",
          duration: "December 2024 (15 days)",
          location: "Virudhunagar, Tamil Nadu",
          description:
            "Completed a 15-day offline internship. Built an Instagram clone frontend \u2014 feed, profile, and stories UI \u2014 using HTML, CSS, and JavaScript.",
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
          logo_path: "buildwithus_logo.png",
          duration: "January 2025 - Present",
          location: "Tenkasi, Tamil Nadu",
          description:
            "Founded and run a Udyam-registered freelance studio with three teammates, delivering paid web and mobile projects for retail clients end to end \u2014 requirements, build, QA, and handover. Built a MERN e-commerce platform for Sri Ram Jewellery with custom JWT auth and server-side Razorpay verification, and a Flutter retail/wholesale app for Manisha Fashions with phone+OTP login and a Node/Express/MongoDB backend.",
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
    "A mix of freelance client builds, personal Android apps, and experiments across the MERN stack, Flutter, and local AI tooling.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Articles and blogs I publish will appear here.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pavithran_profile.png",
    description:
      "I'm available on LinkedIn, GitHub, and email. I can help with full-stack web development, Android/Flutter apps, and AI-assisted product features \u2014 reach out and I'll get back to you within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Coming soon.",
    link: "",
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
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
