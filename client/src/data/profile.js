// Central content module — all data here is sourced from Sanuji's CV and GitHub profile.
// Update this file to change site content; no other file should hardcode personal data.

export const personal = {
  name: "Sanuji Weerasinghe",
  fullName: "W. A. Sanuji Dewmini Weerasinghe",
  role: "Data Science Undergraduate",
  taglines: [
    "Turning data into decisions.",
    "Building end-to-end ML systems.",
    "From raw data to real impact.",
  ],
  tagline: "Data Science undergraduate building end-to-end ML, data engineering & full-stack systems.",
  shortBio:
    "Final-year Data Science undergraduate at the University of Peradeniya with a strong foundation in statistics, machine learning, and data engineering — currently leading a research project on deep-learning-based rooftop solar PV forecasting.",
  location: "Colombo, Sri Lanka",
  email: "sanujiweerasinghe@gmail.com",
  github: "https://github.com/sanujiweerasinghe",
  githubUsername: "sanujiweerasinghe",
  linkedin: "https://www.linkedin.com/in/sanuji-weerasinghe-b91b9a24b",
  resumeUrl: "/resume.pdf",
  photo: "/profile.jpg",
};

export const about = {
  summary:
    "Final-year Data Science undergraduate at the University of Peradeniya with a strong foundation in statistics, machine learning, and data engineering. Currently leading a final-year research project on deep-learning-based rooftop solar PV forecasting and geospatial suitability mapping for grid integration. Experienced in delivering end-to-end data solutions — from ingestion and cleaning through modelling, deployment, and interactive visualization — using Python, scikit-learn, deep learning frameworks, Apache Airflow, and RAG systems. Seeking a Data Science / Data Engineering internship to apply analytical and software-engineering skills to real-world problems, with a particular interest in financial data, business intelligence, and intelligent automation.",
  interests: [
    "Machine Learning & Deep Learning",
    "Data Engineering & MLOps",
    "Retrieval-Augmented Generation (RAG)",
    "Geospatial Analysis & Remote Sensing",
    "Business Intelligence & Analytics",
    "Financial Data & Intelligent Automation",
  ],
  softSkills: [
    "Leadership",
    "Teamwork",
    "Effective Communication",
    "Critical Thinking",
    "Problem Solving",
    "Analytical Reasoning",
    "Time Management",
  ],
};

export const education = [
  {
    degree: "BSc (Hons) in Data Science",
    institution: "University of Peradeniya",
    period: "2022 — Present",
    detail: "GPA: 3.45 / 4.00",
    coursework: [
      "Statistics",
      "Time Series Analysis",
      "Probability Theory",
      "Data Analytics",
      "Database Management",
      "Machine Learning",
    ],
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "Sri Lanka",
    period: "2020",
    detail: "Combined Mathematics: A · Chemistry: B · Physics: C",
    coursework: [],
  },
];

export const experience = [
  {
    role: "Job Skills Development Trainee",
    organization: "Bank of Ceylon",
    period: "Jan 2021 — Apr 2021",
    location: "Ratmalana Super Grade Branch, Sri Lanka",
    points: [
      "Completed the Bank's structured Job Skills Development Training Programme for School Leavers, gaining hands-on experience in day-to-day commercial-bank operations.",
      "Supported front-office and back-office banking operations, with a focus on customer service.",
    ],
  },
];

export const research = {
  title: "Monsoon-Stratified Rooftop Solar PV Forecasting for Grid Stability",
  type: "Final-Year Research Project (DSC 4996)",
  institution: "University of Peradeniya",
  period: "2026 — Ongoing",
  status: "Ongoing",
  summary:
    "A satellite-imagery and time-series research project that detects rooftop solar panels across Sri Lankan districts and forecasts district-level rooftop PV generation under different monsoon regimes, to support grid stability planning.",
  objectives: [
    "Built a satellite-imagery pipeline across 5 Sri Lankan districts that detects rooftop solar panels, benchmarking YOLOv8-seg and ResUNet segmentation models to estimate district-level rooftop PV potential.",
    "Benchmarked CNN-LSTM against a Transformer for monsoon-stratified day- and week-ahead PV forecasting (5 districts × 4 monsoon regimes), evaluated with MAE, RMSE, R², and skill scores against a persistence baseline.",
    "Engineered a leakage-safe, 39-feature time-series dataset spanning 8 years and 5 districts from NASA POWER and public meteorological sources, applying strict chronological splits and bootstrap confidence intervals.",
  ],
  technologies: [
    "Python",
    "PyTorch",
    "CNN-LSTM & Transformer",
    "ResUNet / YOLOv8-seg",
    "Satellite Imagery & GIS",
    "Time-Series Forecasting",
  ],
  focusAreas: ["Renewable Energy Forecasting", "Geospatial AI", "Grid Integration", "Deep Learning"],
};

export const projects = [
  {
    title: "Janashakthi Smart Claims",
    subtitle: "AI-Powered Insurance Claim Processing",
    year: "2025",
    description:
      "A full-stack, multi-portal web application (Branch, Digital, and Admin portals) enabling end-to-end insurance claim submission, AI-powered document analysis, and fraud detection for Janashakthi Insurance.",
    features: [
      "AI-powered OCR pipeline with OpenCV image preprocessing",
      "Weighted five-factor risk-scoring engine (date validity, policy-limit check, name matching, prescription–bill gap) to auto-approve, flag, or reject claims",
      "Role-based JWT authentication across Branch, Customer, and Admin roles",
    ],
    tech: ["Django REST Framework", "React (TypeScript)", "OpenCV", "Python"],
    category: "Full Stack",
    github: "https://github.com/sanujiweerasinghe/janashakthi-smart-claims",
    demo: null,
  },
  {
    title: "Retrieval-Augmented Q&A System",
    subtitle: "RAG Smart Document Chatbot",
    year: "2026",
    description:
      "An end-to-end RAG application that answers natural-language questions grounded in a custom document corpus, with source citations to minimize hallucination.",
    features: [
      "Document chunking, vector embedding, and semantic retrieval",
      "Local LLM inference via Ollama",
      "Interactive Streamlit interface with source-cited answers",
    ],
    tech: ["Python", "ChromaDB", "Sentence-Transformers", "Streamlit", "Ollama"],
    category: "AI/ML",
    github: "https://github.com/sanujiweerasinghe/rag-smart-doc-chatbot",
    demo: null,
  },
  {
    title: "Customer Churn Prediction",
    subtitle: "Cost-Sensitive Churn Model with MLOps",
    year: "2026",
    description:
      "An XGBoost churn-prediction model with feature engineering, class-imbalance handling, and SHAP-based explainability, productionised with a full MLOps pipeline.",
    features: [
      "MLflow experiment tracking",
      "FastAPI + Docker serving layer",
      "CI/CD via GitHub Actions with data-drift monitoring",
    ],
    tech: ["Python", "XGBoost", "MLflow", "FastAPI", "Docker", "GitHub Actions"],
    category: "MLOps",
    github: "https://github.com/sanujiweerasinghe/customer-churn-prediction",
    demo: null,
  },
  {
    title: "Biomedical NLP NER Pipeline",
    subtitle: "Named Entity Recognition Benchmark",
    year: "2025",
    description:
      "A biomedical Named Entity Recognition system benchmarking multiple word embeddings using a BiLSTM-CRF architecture.",
    features: [
      "Embedding comparison: Word2Vec, GloVe, FastText, and BERT",
      "BiLSTM-CRF sequence-labelling architecture",
      "Evaluation across precision, recall, and F1-score",
    ],
    tech: ["Python", "PyTorch", "BiLSTM-CRF", "BERT"],
    category: "AI/ML",
    github: "https://github.com/sanujiweerasinghe/NLP-NER-pipeline",
    demo: null,
  },
  {
    title: "Tea Leaf Disease Classification",
    subtitle: "Transfer Learning for Agricultural Diagnostics",
    year: "2025",
    description:
      "Applied transfer learning with VGG16 and ResNet50 (ImageNet pre-trained) to classify three tea leaf diseases — Brown Blight, Algal Leaf, and White Spot — with data augmentation.",
    features: [
      "Data augmentation: flip, rotation, colour jitter",
      "Benchmarked VGG16 vs ResNet50 on accuracy, precision, recall, and F1-score",
      "Visualized training curves and confusion matrices for model comparison",
    ],
    tech: ["Python", "PyTorch", "VGG16", "ResNet50", "scikit-learn", "Matplotlib"],
    category: "AI/ML",
    github: "https://github.com/sanujiweerasinghe/tea-leaf-disease-classification",
    demo: null,
  },
  {
    title: "Hybrid RAG Chatbot",
    subtitle: "Local Embeddings + Google Gemini",
    year: "2026",
    description:
      "A high-performance Hybrid RAG chatbot combining local HuggingFace embeddings with Google Gemini, designed to avoid API rate limits with zero-cost indexing.",
    features: [
      "Local HuggingFace embeddings for zero-cost document indexing",
      "Google Gemini for response generation",
      "Hybrid retrieval pipeline avoiding embedding-API rate limits",
    ],
    tech: ["Python", "HuggingFace", "Google Gemini", "RAG"],
    category: "AI/ML",
    github: "https://github.com/sanujiweerasinghe/advanced-rag-bot",
    demo: null,
  },
  {
    title: "Personal Health Mention Classification",
    subtitle: "LSTM vs. Bi-LSTM Benchmark",
    year: "2025",
    description:
      "A text classification project benchmarking LSTM and Bi-LSTM architectures for detecting personal health mentions in social media text.",
    features: [
      "Text preprocessing and sequence embedding for social media data",
      "LSTM vs. Bi-LSTM architecture comparison",
      "Evaluation across accuracy, precision, recall, and F1-score",
    ],
    tech: ["Python", "TensorFlow/Keras", "LSTM", "Bi-LSTM", "NLP"],
    category: "AI/ML",
    github: "https://github.com/sanujiweerasinghe/personal-health-mention-classification-LSTM-vs.-Bi-LSTM",
    demo: null,
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "R", "Java", "JavaScript / TypeScript", "SQL"],
  },
  {
    category: "AI / ML & Deep Learning",
    items: [
      "scikit-learn",
      "PyTorch",
      "XGBoost",
      "SHAP",
      "CNN-LSTM & Transformers",
      "ResUNet / U-Net / YOLOv8-seg",
      "BiLSTM-CRF",
      "OpenCV",
    ],
  },
  {
    category: "Data Engineering & MLOps",
    items: [
      "Apache Airflow",
      "ETL Pipelines",
      "Data Warehousing",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "MLflow",
      "FastAPI",
      "GitHub Actions",
    ],
  },
  {
    category: "BI & Visualization",
    items: ["Power BI", "Streamlit", "Matplotlib", "Seaborn", "OLAP"],
  },
  {
    category: "Web Development",
    items: ["React (TypeScript)", "Django REST Framework", "Node.js / Express", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools & Version Control",
    items: ["Git", "GitHub", "Jupyter", "Docker"],
  },
];

export const achievements = [
  {
    title: "Champion — IEEE INSL Central Provincial New Innovation Competition",
    organization: '"Hope Project"',
    year: "2024",
    type: "Competition",
  },
  {
    title: "Champion — KickStart Weekend 2024",
    organization: "SIRED Business Idea Competition (Business Idea Pitch)",
    year: "2024",
    type: "Competition",
  },
];
