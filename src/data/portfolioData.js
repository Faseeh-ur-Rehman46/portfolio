export const initialPortfolioData = {
  personal: {
    name: "Muhammad Faseeh Altaf",
    shortName: "Faseeh",
    initials: "MF.",
    greeting: "Hello! I Am Muhammad Faseeh Altaf",
    field: "Computer Science",
    university: "University of Central Punjab (UCP)",
    degree: "Bachelor of Science in Computer Science",
    sloganRole: "Full-Stack & AI Engineer",
    punchline: "Judges a book by its cover...",
    punchlineSubtitle: "Because if the cover does not impress you, what else can?",
    typewriterRoles: [
      "Full-Stack Developer.",
      "AI & ML Solutions Engineer.",
      "Computer Vision Researcher.",
      "Software Engineer."
    ],
    currentRole: "Full-Stack Developer & AI Solutions",
    company: "K-TECH CLANS",
    bio: "I’m a full-stack and AI engineer currently working at K-TECH CLANS, where I build React, React Native, and Django systems — including a sale-prediction and automated low-stock ordering flow. Alongside that, I build end-to-end products: retrieval-augmented AI systems, a computer vision pipeline detecting image tampering with 90%+ accuracy, and a telemetry/observability platform with ML-based error clustering.",
    bioSecond: "I care most about the parts of engineering that don’t show up in a demo: getting the underlying approach correct (not just working), and shipping things other people can actually install, deploy, or extend. React, Next.js, Python, and AWS are my primary tools; TensorFlow and OpenCV for ML/CV work.",
    statusBadge: "Open to Remote & Relocation",
    email: "faseehaltaf46@gmail.com",
    location: "Pakistan · Open to Remote & Relocation",
    avatar: "/faseeh.jpg",
    stats: [
      { label: "Repositories", value: "11+" },
      { label: "CV Accuracy", value: "90%+" },
      { label: "AI & Full-Stack", value: "Production" },
      { label: "Primary Stack", value: "React · Python · AWS" }
    ]
  },
  socials: {
    github: "https://github.com/Faseeh-ur-Rehman46",
    linkedin: "https://www.linkedin.com/in/muhammad-faseeh-altaf-19613224a/",
    email: "mailto:faseehaltaf46@gmail.com"
  },
  experiences: [
    {
      id: "exp-1",
      title: "Full-Stack & Software Engineer",
      company: "K-TECH CLANS",
      period: "Jan 2026 — Present",
      role: "Full-Stack & ML Engineering",
      description: "Full-stack development on enterprise management systems built with React, React Native, and Django at K-TECH CLANS. Worked on a sale prediction feature and an automated low-stock alert flow — when inventory drops below a set threshold, the system flags it and, on manager approval, automatically places a restock order with the vendor.",
      highlights: [
        "Engineered cross-platform web & mobile workflows in React and React Native integrated with scalable Django REST APIs.",
        "Built predictive sales forecasting logic to anticipate inventory depletion before stockouts occur.",
        "Designed an automated low-stock alert pipeline with one-click manager approval to trigger direct vendor restock orders."
      ],
      tags: ["React Native", "Django", "Python", "Sale Prediction ML", "REST APIs", "PostgreSQL"],
      accent: "#a855f7"
    },
    {
      id: "exp-2",
      title: "Full-Stack & RAG AI Engineer",
      company: "Open-Source & Product Engineering",
      period: "2025 — Present",
      role: "Full-Stack & GenAI Developer",
      description: "Architected production-ready React & Next.js applications integrated with Google Gemini LLMs and Supabase pgvector cosine similarity search for real-time contextual retrieval.",
      highlights: [
        "Built modular React components and backend pipelines for seamless LLM & vector search integration.",
        "Engineered vector embedding retrieval pipelines using Supabase pgvector for low-latency contextual responses.",
        "Created streaming interfaces with source context citations and modern glassmorphic UI."
      ],
      tags: ["TypeScript", "React", "Next.js", "Gemini API", "Supabase pgvector", "RAG"],
      accent: "#a855f7"
    },
    {
      id: "exp-3",
      title: "AI & Computer Vision Researcher",
      company: "Independent Engineering",
      period: "2025 — 2026",
      role: "ML & Computer Vision Engineer",
      description: "Architected deep learning forensic pipelines for digital media authentication (90%+ accuracy) and cloud-hosted time-series electricity load forecasting systems on AWS.",
      highlights: [
        "Combined Error Level Analysis (ELA) with custom CNN architectures in TensorFlow & OpenCV to detect image splicing.",
        "Trained and deployed time-series forecasting models (Statsmodels/pmdarima & Scikit-learn) on AWS EC2 with Streamlit dashboards.",
        "Focused on reproducible ML pipelines from data preprocessing to cloud deployment."
      ],
      tags: ["TensorFlow", "OpenCV", "Python", "AWS EC2", "Scikit-Learn", "Streamlit"],
      accent: "#a855f7"
    },
    {
      id: "exp-4",
      title: "B.S. in Computer Science",
      company: "University of Central Punjab (UCP)",
      period: "Undergraduate",
      role: "Computer Science Scholar",
      description: "Focusing on distributed systems, software engineering architecture, machine learning algorithms, database systems, and computer vision pipelines.",
      highlights: [
        "Strong foundation in Data Structures, Algorithms, C++, SQL, and Object-Oriented Software Engineering.",
        "Built 11+ repositories spanning observability, cryptography, full-stack AI, and deep learning.",
        "Bridging academic ML theory with deployable cloud-native web applications."
      ],
      tags: ["Computer Science", "C++", "Python", "SQL", "Algorithms", "System Design"],
      accent: "#a855f7"
    }
  ],
  skills: {
    orbiting: [
      { name: "React & Next.js", category: "frontend", ring: 1 },
      { name: "Python", category: "backend", ring: 1 },
      { name: "TypeScript", category: "languages", ring: 1 },
      { name: "Django", category: "backend", ring: 2 },
      { name: "TensorFlow", category: "ai", ring: 2 },
      { name: "Data Entry", category: "data", ring: 2 },
      { name: "AWS Cloud", category: "cloud", ring: 3 },
      { name: "OpenCV", category: "ai", ring: 3 },
      { name: "Docker", category: "cloud", ring: 3 }
    ],
    categories: [
      {
        title: "Languages",
        code: "01",
        items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"]
      },
      {
        title: "Frontend",
        code: "02",
        items: ["React", "Next.js", "React Native", "Vite", "Tailwind CSS"]
      },
      {
        title: "Backend",
        code: "03",
        items: ["Django", "Flask", "Node.js", "REST APIs", "Socket.io"]
      },
      {
        title: "AI / Machine Learning",
        code: "04",
        items: ["TensorFlow", "OpenCV", "Scikit-learn", "Statsmodels / pmdarima", "MediaPipe", "Streamlit"]
      },
      {
        title: "Generative AI",
        code: "05",
        items: ["RAG Pipelines", "LLM APIs (Gemini)", "Embeddings & Vector Search", "Ollama (Local LLMs)"]
      },
      {
        title: "Databases & Cloud",
        code: "06",
        items: ["PostgreSQL", "MySQL", "Supabase (pgvector)", "AWS (EC2)", "Vercel", "Docker"]
      },
      {
        title: "Data Entry Expert",
        code: "07",
        items: [
          "High-Speed Data Entry (99.9% Accuracy)",
          "MS Excel (VLOOKUP, XLOOKUP, Pivot Tables)",
          "Google Sheets & Spreadsheet Automation",
          "Data Cleaning, Mining & Formatting",
          "CRM Data Management & Lead Generation",
          "PDF / Scanned Document to Excel Conversion"
        ]
      }
    ]
  },
  projects: [
    {
      id: "tracelens",
      number: "01",
      title: "Tracelens",
      category: "Developer Analytics · TypeScript",
      year: "2026",
      badge: "Observability & ML",
      tagline: "An advanced developer analytics and telemetry tracing platform designed for real-time observability, distributed request tracing, and performance metrics.",
      description: "Engineered a unified distributed request-tracing and telemetry platform utilizing OpenTelemetry-like spans to monitor performance bottlenecks, latency spikes, and ML-based error clustering in real-time.",
      problem: "Modern web applications produce fragmented telemetry logs that are difficult to correlate without heavy, expensive enterprise monitoring infrastructure.",
      solution: "Engineered a unified distributed request-tracing and telemetry platform utilizing OpenTelemetry-like spans to monitor performance bottlenecks and error propagation in real-time.",
      role: "Lead Full-Stack Developer",
      tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Socket.io", "REST APIs"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Faseeh-ur-Rehman46",
      liveUrl: "https://github.com/Faseeh-ur-Rehman46",
      accentColor: "#a855f7",
      metrics: ["Real-Time Spans", "ML Error Clustering", "Sub-second Socket Stream"]
    },
    {
      id: "rag-knowledge-engine",
      number: "02",
      title: "RAG Knowledge Engine & Vector Search",
      category: "Full-Stack RAG · Gemini & Supabase",
      year: "2026",
      badge: "GenAI & Vector Search",
      tagline: "A full-stack retrieval-augmented generation (RAG) system backed by Google Gemini LLM and Supabase pgvector.",
      description: "Built a lightweight React & Next.js architecture that connects to Supabase vector search, performs cosine similarity retrieval over custom knowledge bases, and streams contextual LLM answers.",
      problem: "Static applications and documentation portals cannot dynamically synthesize context-specific answers from large custom datasets in real time.",
      solution: "Engineered a plug-and-play React & Next.js pipeline backed by Supabase pgvector embeddings and Google Gemini API for high-precision retrieval.",
      role: "Full-Stack & AI Engineer",
      tags: ["TypeScript", "React", "Google Gemini API", "Supabase pgvector", "Next.js", "RAG"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Faseeh-ur-Rehman46",
      liveUrl: "https://github.com/Faseeh-ur-Rehman46",
      accentColor: "#a855f7",
      metrics: ["Cosine Vector Search", "Gemini LLM Streaming", "Low-Latency Retrieval"]
    },
    {
      id: "image-tampering-detection",
      number: "03",
      title: "Image Tampering Detection",
      category: "AI Computer Vision · TensorFlow",
      year: "2026",
      badge: "90%+ CV Accuracy",
      tagline: "An intelligent computer vision system leveraging deep learning to distinguish authentic images from spliced and tampered media with over 90% accuracy.",
      description: "Developed an AI forensic pipeline using Error Level Analysis (ELA) and Convolutional Neural Networks (CNNs) in TensorFlow and OpenCV to detect digital image splicing and manipulation.",
      problem: "Digital image manipulation and deepfakes make visual content authentication difficult, requiring automated, reliable forensic detection pipelines.",
      solution: "Developed an AI forensic pipeline using Error Level Analysis (ELA) and Convolutional Neural Networks (CNNs) in TensorFlow to detect image splicing with 90%+ accuracy.",
      role: "AI / ML & Full-Stack Developer",
      tags: ["Python", "TensorFlow", "OpenCV", "Flask", "React", "Tailwind CSS", "ELA Forensics"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Faseeh-ur-Rehman46",
      liveUrl: "https://github.com/Faseeh-ur-Rehman46",
      accentColor: "#a855f7",
      metrics: ["90%+ Detection Accuracy", "ELA + CNN Pipeline", "Flask + React UI"]
    },
    {
      id: "electricity-forecast-app",
      number: "04",
      title: "Electricity Forecast App",
      category: "Time-Series ML · AWS Cloud",
      year: "2025",
      badge: "AWS Deployed",
      tagline: "A cloud-hosted predictive analytics application using machine learning to forecast electricity consumption trends and assist in energy load management.",
      description: "Implemented time-series forecasting models in Python deployed on AWS EC2, featuring an interactive Streamlit dashboard for real-time energy consumption trend visualization.",
      problem: "Energy grids and organizations experience costly waste due to inaccurate short-term power demand forecasts and volatile usage patterns.",
      solution: "Implemented time-series forecasting models in Python deployed on AWS EC2, featuring an interactive Streamlit dashboard for real-time trend visualization.",
      role: "ML & Cloud Engineer",
      tags: ["Python", "AWS EC2", "Streamlit", "Pandas", "Scikit-Learn", "Time Series ML"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Faseeh-ur-Rehman46",
      liveUrl: "https://github.com/Faseeh-ur-Rehman46",
      accentColor: "#a855f7",
      metrics: ["AWS EC2 Hosted", "Time-Series ARIMA/ML", "Interactive Streamlit"]
    },
    {
      id: "folder-locker",
      number: "05",
      title: "Folder Locker",
      category: "Security Utility · Cryptography",
      year: "2025",
      badge: "Security & Crypto",
      tagline: "A lightweight folder locking and file encryption utility designed to protect sensitive local directories with password authentication.",
      description: "Implemented cryptographic directory protection and password hashing in Python with clean CLI and graphical locking capabilities for zero-bloat local security.",
      problem: "Users need simple, offline privacy solutions to guard private local folders without installing bloated third-party security software.",
      solution: "Implemented AES-based directory obfuscation and password hashing in Python with clean CLI and graphical locking capabilities.",
      role: "Python Developer",
      tags: ["Python", "Cryptography", "OS Utilities", "Security", "Desktop Utility"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Faseeh-ur-Rehman46",
      liveUrl: "https://github.com/Faseeh-ur-Rehman46",
      accentColor: "#a855f7",
      metrics: ["AES Encryption", "Zero-Dependency CLI/GUI", "Fast Local Lock"]
    }
  ]
};
