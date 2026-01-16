/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rabindra Regmi | Senior Backend & Blockchain Engineer",
  description:
    "Senior Backend & Blockchain Engineer with 5+ years of experience building scalable frontend and backend systems, microservices, and blockchain infrastructure. Strong in Rust, Go, Typescript, React and Node.js with production deployments on AWS and Kubernetes; focused on performance, reliability, and security.",
  og: {
    title: "Rabindra Regmi Portfolio",
    type: "website",
    url: "https://rabindraregmi.com.np/",
  },
};

//Home Page
const greeting = {
  title: "Rabindra Regmi",
  logo_name: "RabindraRegmi",
  nickname: "",
  subTitle:
    "Senior Backend & Blockchain Engineer (5+ years) building scalable microservices and blockchain infrastructure. Strong in Rust, Go, Typescript,Node.js; AWS + Kubernetes production deployments; focused on reliability, performance, and security.",
  resumeLink:
    "https://drive.google.com/file/d/1nnnmnSkZ7qdYQiHQyqGtbkA6czhzf9rv/view?usp=sharing",
  portfolio_repository: "https://github.com/rabindraregmi",
  githubProfile: "https://github.com/rabindraregmi",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/rabindraregmi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rabindraregmi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:regmirabindra2014@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/rabindra.regmi.0/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rabindra_regmi/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "BackendImg",
      skills: [
        "⚡ Building scalable backend systems in Rust, Go, and Node.js",
        "⚡ Developing microservices and APIs using REST and GraphQL",
        "⚡ Implementing authentication and authorization with JWT and OAuth",
        "⚡ Integrating with external APIs and databases",
        "⚡ Monitoring and logging with Prometheus and Grafana",
        "⚡ Containerizing applications with Docker and Kubernetes",
        "⚡ CI/CD pipelines with GitHub Actions and Jenkins",
        "⚡ Testing and debugging with Jest and Mocha",
        "⚡ Code quality with SonarQube and ESLint",
        "⚡ Performance optimization with Redis and Memcached",
      ],
      softwareSkills: [
        {
          skillName: "Rust",
          fontAwesomeClassname: "simple-icons:rust",
          style: { color: "#000000" },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: { color: "#00ADD8" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: { color: "#231F20" },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: { color: "#E10098" },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#000000" },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
      ],
    },
    {
      title: "Blockchain & Web3",
      fileName: "DesignImg",
      skills: [
        "⚡ Building blockchain infrastructure: indexers, relayers, bridges, and explorer backends",
        "⚡ Smart contract development & testing using Solidity and Hardhat (EVM)",
        "⚡ Experience with L2 infrastructure and rollups; EigenLayer AVS development (Go)",
      ],
      softwareSkills: [
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: { color: "#363636" },
        },
        // Hardhat icon varies by template; keep if it renders, otherwise remove.
        {
          skillName: "Solana",
          fontAwesomeClassname: "simple-icons:solana",
          style: { color: "#4E4E4E" },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: { color: "#3C3C3D" },
        },
        {
          skillName: "Web3.js",
          fontAwesomeClassname: "simple-icons:web3dotjs",
          style: { color: "#F16822" },
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "simple-icons:rust",
          style: { color: "#000000" },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: { color: "#00ADD8" },
        },
      ],
    },
    {
      title: "Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Production deployments on AWS with Docker + Kubernetes",
        "⚡ CI/CD with GitHub Actions and GitOps deployments (ArgoCD)",
        "⚡ Observability with Prometheus + Grafana for monitoring and reliability",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: { color: "#7B42BC" },
        },
        // Argo icon sometimes uses "argo" or "argocd" depending on icon set
        {
          skillName: "ArgoCD",
          fontAwesomeClassname: "simple-icons:argo",
          style: { color: "#EF7B4D" },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: { color: "#E6522C" },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: { color: "#F46800" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
      ],
    },
    {
      title: "Frontend (as needed)",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building product UIs with React/Next.js for frontend applications",
        "⚡ Styling with Tailwind, SCSS",
        "⚡ Building responsive web applications",
        "⚡ Optimizing frontend performance with React.js and Next.js",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#000000" },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#06B6D4" },
        },
        {
          skillName: "SCSS",
          fontAwesomeClassname: "simple-icons:sass",
          style: { color: "#CC6699" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "IOE Pulchowk Campus, Lalitpur",
      subtitle: "Bachelor in Computer Engineering",
      logo_path: "tu.png",
      alt_name: "IOE",
      duration: "2016 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI, TOC etc.",
        "⚡ Apart from this, I have done courses on Data Science, Blockchain Development and Full Stack Development.",
      ],
      website_link: "https://pcampus.edu.np/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  // certifications: [
  //   {
  //     title: "Machine Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "stanford_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
  //     alt_name: "Stanford University",
  //     color_code: "#8C151599",
  //   },
  //   {
  //     title: "Deep Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "Data Science",
  //     subtitle: "- Alex Aklson",
  //     logo_path: "ibm_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Big Data",
  //     subtitle: "- Kim Akers",
  //     logo_path: "microsoft_logo.png",
  //     certificate_link:
  //       "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
  //     alt_name: "Microsoft",
  //     color_code: "#D83B0199",
  //   },
  //   {
  //     title: "Advanced Data Science",
  //     subtitle: "- Romeo Kienzler",
  //     logo_path: "ibm_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Advanced ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "DL on Tensorflow",
  //     subtitle: "- Laurence Moroney",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "Fullstack Development",
  //     subtitle: "- Jogesh Muppala",
  //     logo_path: "coursera_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
  //     alt_name: "Coursera",
  //     color_code: "#2A73CC",
  //   },
  //   {
  //     title: "Kuberenetes on GCP",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link:
  //       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  //   {
  //     title: "Cryptography",
  //     subtitle: "- Saurabh Mukhopadhyay",
  //     logo_path: "nptel_logo.png",
  //     certificate_link:
  //       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
  //     alt_name: "NPTEL",
  //     color_code: "#FFBB0099",
  //   },
  //   {
  //     title: "Cloud Architecture",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link:
  //       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  // ],
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Senior Backend & Blockchain Engineer with 5+ years of experience building scalable backend systems, microservices, and blockchain infrastructure. Focused on performance, reliability, and security.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Cedro Labs (now Twine Labs)",
          // (Your CV doesn't include a public company URL; add one if you want.)
          company_url: "",
          logo_path: "twine-logo.png", // replace with your actual asset name if different
          duration: "Nov 2023 - Present",
          location: "Remote (US-based)",
          description:
            "• Led end-to-end development of an omnichain lending/borrowing protocol across EVM chains using React, Node.js, and TypeScript.\n" +
            "• Developed an Active Validator Service (AVS) on EigenLayer for AI-based DeFi protocols using Go.\n" +
            "• Built and maintained an L2 blockchain indexer with 99% reliability powering a production explorer.\n" +
            "• Designed and maintained microservices (bridge, L1 indexer, relayer) using Kafka for scalable event-driven architecture.\n" +
            "• Implemented a centralized bridge backend supporting Arbitrum, Base, and Twine Chain using Rust services.\n" +
            "• Reduced transaction processing latency by ~60% via Kafka-based asynchronous execution.\n" +
            "• Deployed and monitored Ethereum execution/consensus clients on Kubernetes.\n" +
            "• Built CI/CD with GitHub Actions + ArgoCD; maintained internal API and workflow documentation.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Ibriz.Ai (Venture 23)",
          company_url: "https://ibriz.ai/",
          logo_path: "ibriz_logo.png",
          duration: "Feb 2022 - Nov 2023",
          location: "Remote (US-based)",
          description:
            "• Built and maintained a centralized bridge between Aleo and Ethereum using Go.\n" +
            "• Developed multiple chain indexers supporting cross-chain bridge operations using Node.js.\n" +
            "• Built backend infrastructure for a Web3 game server using Node.js.\n" +
            "• Developed dApp interfaces using React + Redux with wallet integrations and on-chain workflows.\n" +
            "• Developed and tested smart contracts using Solidity and Hardhat for EVM chains.",
          color: "#0879bf",
        },
        {
          title: "Associate Software Engineer",
          company: "LIS Nepal",
          company_url: "https://lisnepal.com.np/",
          logo_path: "lis-logo.png",
          duration: "April 2021 - Jan 2022",
          location: "Lalitpur, Nepal",
          description:
            "• Contributed to frontend development for compliance management software using React.\n" +
            "• Developed backend services using Django and supported production deployments.\n" +
            "• Built SQL-based reporting workflows and ETL pipelines using Python.",

          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    // {
    //   title: "Internships",
    //   work: false,
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. Following are few of my college projects and my individual projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // data: [
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_bg_2.png",
    description:
      "I am available on almost every social media. Want to discuss about problems, potential roles or jobs? You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kathmandu, Nepal, 44600",
    locality: "Kathmandu",
    country: "NEP",
    region: "Bagmati",
    postalCode: "44600",
    streetAddress: "Balaju",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
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
