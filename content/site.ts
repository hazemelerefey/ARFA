/** All portfolio copy and media, gathered from Ahmed Gamal Arfa's previous portfolio. */

export const person = {
  name: "Ahmed Gamal Arfa",
  short: "Ahmed Arfa",
  role: "AI & Data Engineer",
  location: "Cairo, Egypt",
  email: "anaarafa2019@gmail.com",
  phone: "+20 109 064 6919",
  whatsapp: "https://wa.me/201090646919",
  linkedin: "https://www.linkedin.com/in/ahmed-gamal-arfa",
  linkedinHandle: "ahmed-gamal-arfa",
  github: "https://github.com/AhmdArFa",
  githubHandle: "AhmdArFa",
  photo: "/media/profile.jpg",
  intro:
    "I'm Ahmed Gamal Arfa — an AI & Data Engineer designing production-grade ML systems, executive BI products, and audit-by-default data pipelines.",
  footerLine: "AI & Data Engineer designing intelligent systems that turn messy data into measurable business decisions.",
};

export const socials = [
  { label: "LinkedIn", href: person.linkedin },
  { label: "GitHub", href: person.github },
  { label: "WhatsApp", href: person.whatsapp },
  { label: "Email", href: `mailto:${person.email}` },
];

export const stats = [
  { value: 15, suffix: "+", label: "Projects shipped", text: "Dashboards, ML pipelines, and data foundations delivered end to end — each one ending with a business-impact number." },
  { value: 97, suffix: "%", label: "Best model accuracy", text: "Calibrated classification with full ROC and feature-importance analysis, shared with stakeholders in plain language." },
  { value: 60, suffix: "%", label: "Reporting time saved", text: "Executive Power BI products that replaced weekly spreadsheet exports with a single decision surface." },
  { value: 35, suffix: "+", label: "Verified certifications", text: "Microsoft, AWS, Google, Stanford / DeepLearning.AI, Duke, Hugging Face, Anthropic, MathWorks, IBM, and more." },
];

export type Project = {
  slug: string;
  title: string;
  category: "Dashboard" | "AI/ML" | "Data";
  year: string;
  role: string;
  summary: string;
  image: string;
  tags: string[];
  metrics: [string, string][];
  overview: string;
  problem: string;
  dataset: string;
  methodology: string[];
  architecture: string;
  implementation: string[];
  challenges: string[];
  results: string[];
  impact: string;
  lessons: string[];
  github?: boolean;
};

export const projects: Project[] = [
  {
    slug: "hospital-patient-flow", title: "Hospital Patient Flow Command Center", category: "Dashboard", year: "2025", role: "Lead BI Engineer",
    summary: "Power BI command center unifying admissions, length-of-stay, revenue, and CSAT across 8 departments.",
    image: "/media/project-hospital-flow.png", tags: ["Power BI", "DAX", "Healthcare BI"],
    metrics: [["300", "Patients"], ["₹37.44M", "Revenue"], ["−50%", "Review time"]],
    overview: "An executive cockpit replacing dozens of spreadsheets with a single drill-through Power BI experience for hospital leadership.",
    problem: "Department heads relied on weekly exports from multiple HIS modules. There was no single source of truth for admissions, LoS, revenue mix, and patient satisfaction.",
    dataset: "300 patient records spanning 12 months across 8 departments — admissions, diagnosis, insurance, billing, and CSAT surveys.",
    methodology: ["Star-schema modeling with fact_admissions and conformed dimensions", "DAX measures for LoS, readmission rate, revenue per bed, and CSAT", "Drill-through from KPI cards to department, diagnosis, and patient detail"],
    architecture: "Source CSV → Power Query staging → star schema → DAX measure groups → 4-page report (Executive, Operations, Finance, Quality).",
    implementation: ["Validated source data with audit pages comparing row counts and totals", "Authored 40+ DAX measures grouped by domain", "Designed an executive-first information hierarchy with progressive detail"],
    challenges: ["Inconsistent insurance category labels required a mapping dimension", "Mixed currency reporting was unified with a parameterized FX layer"],
    results: ["Single decision cockpit replacing 8 weekly spreadsheets", "Cut executive review prep by ~50%", "Surfaced 3 underperforming departments invisible in prior reports"],
    impact: "Leadership now runs weekly operations meetings directly from the dashboard. Time to insight dropped from days to minutes.",
    lessons: ["Star-schema discipline pays off the moment you add a second fact table", "An executive page is a product — design for one decision, not many"], github: true,
  },
  {
    slug: "superstore-sales-dashboard", title: "Superstore Sales Dashboard", category: "Dashboard", year: "2025", role: "BI Engineer",
    summary: "Interactive Power BI dashboard for 4,117+ orders with cross-filters and geo drill-down.",
    image: "/media/project-superstore.png", tags: ["Power BI", "DAX", "Modeling"],
    metrics: [["4,117", "Orders"], ["60%", "Faster reporting"], ["USA", "Geos"]],
    overview: "A regional sales analytics product with real-time slicing across category, segment, and geography.",
    problem: "Sales leaders lacked a single interactive view across regions, segments, and categories.",
    dataset: "Public Superstore dataset — 4,117 orders, 793 customers, 1,862 products over 4 years.",
    methodology: ["Date intelligence with mark-as-date table", "Custom KPI tree linking revenue → margin → discount impact", "Geo map with state-level conditional formatting"],
    architecture: "CSV → Power Query → star schema (orders fact, date/customer/product dims) → DAX → 3-page report.",
    implementation: ["Modeled relationships and disabled bidirectional filtering for performance", "Built reusable measure groups for YoY, QoQ, and rolling 12 months"],
    challenges: ["Discount and profit had inverse relationships — required a dedicated DAX scenario page"],
    results: ["Cut manual reporting by ~60%", "Enabled inventory rebalancing in two underperforming regions"],
    impact: "Sales ops adopted the dashboard as the canonical weekly review surface.",
    lessons: ["Measure groups beat scattered measures every time"], github: true,
  },
  {
    slug: "ml-classification-pipeline", title: "ML Classification Pipeline", category: "AI/ML", year: "2025", role: "ML Engineer",
    summary: "End-to-end classification pipeline with explainable evaluation reaching 97% accuracy.",
    image: "/media/project-confusion-matrix.png", tags: ["Python", "Scikit-Learn", "Matplotlib"],
    metrics: [["97%", "Accuracy"], ["0.98", "ROC AUC"], ["5", "Models"]],
    overview: "A reproducible pipeline from raw CSV to confusion matrix, ROC, and feature importance.",
    problem: "A manual rule-based decision process was inconsistent and hard to audit.",
    dataset: "Tabular classification dataset, ~10k labeled samples with 25 features.",
    methodology: ["Stratified train/val/test split with cross-validation", "Pipeline: imputation → scaling → encoding → model", "Grid search across Logistic Regression, RF, XGBoost, SVM, KNN"],
    architecture: "Sklearn Pipeline + ColumnTransformer; persisted with joblib; eval notebook generates the report.",
    implementation: ["Wrote a reusable EvaluationReport class", "Plotted ROC, PR, calibration, and SHAP-style feature importance"],
    challenges: ["Class imbalance solved with stratification + class_weight, not synthetic oversampling"],
    results: ["97% accuracy with calibrated probabilities", "Interpretable top-5 feature ranking shared with stakeholders"],
    impact: "Replaced manual triage with an auditable model; freed analyst time for higher-value work.",
    lessons: ["A clean Pipeline is the difference between a notebook and a product"], github: true,
  },
  {
    slug: "ai-insight-automation", title: "AI Insight Automation Engine", category: "AI/ML", year: "2025", role: "AI Engineer",
    summary: "Python workflow that profiles datasets, detects anomalies, and writes narrative insights.",
    image: "/media/project-feature-importance.png", tags: ["Python", "Automation", "LLM"],
    metrics: [["1 cmd", "Setup"], ["PDF + MD", "Outputs"], ["5 datasets", "Reuse"]],
    overview: "Drop a CSV, get a profiled report with anomalies, feature signals, and narrative ready for stakeholders.",
    problem: "Analysts repeated the same exploratory work weekly for new datasets.",
    dataset: "Generalizes to any tabular CSV with mixed numeric/categorical columns.",
    methodology: ["Pandas profiling + custom anomaly heuristics", "LLM narrative layer over computed signals"],
    architecture: "CLI → profiling → anomaly module → signal ranking → LLM narrator → PDF/MD export.",
    implementation: ["Modular pipeline with pluggable narrators", "Cached signals to avoid recomputation"],
    challenges: ["LLM hallucinations on numbers — solved by passing only computed signals, never raw data"],
    results: ["Cut repeat analysis cycles", "Reusable across 5 internal datasets"],
    impact: "Analysts ship a baseline report in minutes instead of half a day.",
    lessons: ["LLMs are best as narrators over computed facts, not as analysts"], github: true,
  },
  {
    slug: "recruitment-intelligence", title: "Recruitment Intelligence Dashboard", category: "Dashboard", year: "2025", role: "BI Engineer",
    summary: "Power BI talent analytics tracking funnel stages, source ROI, and time-to-hire bottlenecks.",
    image: "/media/project-superstore.png", tags: ["Power BI", "HR", "DAX"],
    metrics: [["7", "Stages"], ["12", "Sources"], ["−22%", "Time to hire"]],
    overview: "End-to-end recruiting analytics surfacing pipeline health and source quality.",
    problem: "Hiring teams had no visibility into where candidates dropped off or which sources delivered hires.",
    dataset: "ATS export with candidate, stage, source, recruiter, and outcome dimensions.",
    methodology: ["Funnel conversion rates by stage", "Cohort analysis by source"],
    architecture: "ATS CSV → staging → star schema → DAX → 3-page report.",
    implementation: ["DAX time-to-hire measures using event dates", "Conditional formatting for bottleneck stages"],
    challenges: ["Stage definitions varied across recruiters — unified with a stage dim"],
    results: ["Cut average time-to-hire by 22%", "Identified 3 underperforming sources"],
    impact: "Hiring budget reallocated to top-performing sources.",
    lessons: ["A consistent stage taxonomy is half the project"],
  },
  {
    slug: "customer-segmentation", title: "Customer Segmentation Lab", category: "AI/ML", year: "2025", role: "Data Scientist",
    summary: "K-Means segmentation producing behavioral customer groups for personalization experiments.",
    image: "/media/project-clustering.png", tags: ["Python", "K-Means", "Pandas"],
    metrics: [["5", "Segments"], ["8K", "Records"], ["+11%", "Lift"]],
    overview: "Behavioral segmentation pipeline with interpretable segment profiles ready for marketing.",
    problem: "Marketing relied on broad generic lists — campaigns underperformed.",
    dataset: "Transactional and behavioral data for 8K customers.",
    methodology: ["RFM features + K-Means + silhouette validation"],
    architecture: "Pandas pipeline → joblib model → segment table joined back to CRM.",
    implementation: ["Generated one-page profile per segment for marketing"],
    challenges: ["Outlier customers skewed centroids — handled with log-transform"],
    results: ["5 interpretable segments with distinct CLV"],
    impact: "First personalized campaign drove +11% lift on a control segment.",
    lessons: ["A segment without a one-pager will never be used"],
  },
  {
    slug: "revenue-forecasting", title: "Revenue Forecasting Studio", category: "Data", year: "2025", role: "Data Scientist",
    summary: "Forecasting prototype combining decomposition, scenarios, and BI visuals for planning.",
    image: "/media/project-roc.png", tags: ["Python", "Forecasting", "BI"],
    metrics: [["12 mo", "Horizon"], ["3", "Scenarios"], ["6.2%", "MAPE"]],
    overview: "Forward-looking revenue scenarios published to a Power BI planning dashboard.",
    problem: "Leadership relied on backward-looking reporting for forward-looking decisions.",
    dataset: "5 years of monthly revenue across 4 business units.",
    methodology: ["STL decomposition", "Prophet + ETS ensemble", "3 scenario assumptions"],
    architecture: "Python forecast → parquet → Power BI semantic model → planning report.",
    implementation: ["Backtested rolling-origin with MAPE/MAE", "Surfaced confidence intervals in BI"],
    challenges: ["Promotional spikes distorted seasonality — modeled as exogenous regressor"],
    results: ["MAPE 6.2% on holdout", "Planning meetings adopted scenario language"],
    impact: "Annual planning anchored on a quantified forecast instead of a flat target.",
    lessons: ["Forecasts only matter when packaged into a planning conversation"], github: true,
  },
  {
    slug: "pizza-sales-analytics", title: "Pizza Sales Analytics", category: "Dashboard", year: "2024", role: "Analyst",
    summary: "End-to-end SQL + Power BI analysis on $817K revenue and 49K+ pizzas across multiple slices.",
    image: "/media/project-pizza-sales.png", tags: ["Power BI", "SQL", "Excel"],
    metrics: [["$817K", "Revenue"], ["49K", "Pizzas"], ["+15%", "Uplift"]],
    overview: "Revenue and menu analytics surfacing top sellers, slow slots, and seasonal trends.",
    problem: "Chain operated on intuition — no clear view of revenue drivers or weakest hours.",
    dataset: "Order, order_detail, pizza, and pizza_type tables — 48,620 pizzas across 21,350 orders.",
    methodology: ["SQL aggregation views feeding Power BI", "Time-of-day and weekday seasonality decomposition"],
    architecture: "MySQL → SQL views → Power BI import → 4-page report.",
    implementation: ["Wrote 20+ SQL views for reusable metrics", "Designed an executive overview + 3 deep dives"],
    challenges: ["Late-night sales pattern was hidden until hour-of-day binning was introduced"],
    results: ["Informed menu pruning and promotion design", "Contributed to a 15% revenue uplift quarter-over-quarter"],
    impact: "Promotions are now scheduled based on hour-of-day demand curves rather than gut feel.",
    lessons: ["SQL views > ad-hoc queries when an analysis becomes a product"], github: true,
  },
  {
    slug: "pizza-dashboard-dark", title: "Pizza Dashboard — Executive Dark Theme", category: "Dashboard", year: "2024", role: "BI Designer",
    summary: "Dark, executive-friendly Power BI view over orders, payments, and delivery KPIs.",
    image: "/media/project-pizza-dark.png", tags: ["Power BI", "DAX", "UI"],
    metrics: [["Dark", "Theme"], ["12", "KPIs"], ["8", "Slicers"]],
    overview: "A modern, high-contrast operational view designed for boardroom screens.",
    problem: "Stakeholders found the existing light theme tiring during long executive reviews.",
    dataset: "Same pizza order data, re-modeled for operational KPIs.",
    methodology: ["High-contrast palette tuned for projection screens", "Dynamic slicer panel"],
    architecture: "Reused star schema from the analytics report; new visual theme + measures.",
    implementation: ["Authored a custom JSON theme", "Designed slicer panel with smart bookmarks"],
    challenges: ["Color contrast had to remain WCAG AA on screen and in print"],
    results: ["Became the default surface for weekly reviews"],
    impact: "Increased stakeholder engagement during recurring reviews.",
    lessons: ["Theming is a product decision, not a finishing touch"],
  },
  {
    slug: "protein-clustering", title: "Protein Clustering Analysis", category: "Data", year: "2024", role: "Data Scientist",
    summary: "Unsupervised segmentation of a biological dataset, revealing 3 distinct protein clusters.",
    image: "/media/project-clustering.png", tags: ["Python", "Pandas", "Clustering"],
    metrics: [["3", "Clusters"], ["PCA + KMeans", "Method"], ["12", "Features"]],
    overview: "PCA-reduced clustering pipeline producing an interpretable segmentation of protein samples.",
    problem: "The dataset lacked labels but researchers suspected hidden structure.",
    dataset: "Public protein expression dataset with 12 numeric features.",
    methodology: ["Standardization → PCA (2 components) → KMeans with elbow + silhouette validation"],
    architecture: "Notebook pipeline persisted to a parquet cluster table for downstream analysis.",
    implementation: ["Compared KMeans, DBSCAN, and Agglomerative clustering"],
    challenges: ["Choosing K — combined elbow, silhouette, and domain context"],
    results: ["3 well-separated clusters with distinct centroid profiles"],
    impact: "Accelerated hypothesis generation for downstream lab work.",
    lessons: ["PCA is a communication tool as much as a modeling one"], github: true,
  },
  {
    slug: "sql-data-quality-pipeline", title: "SQL Data Quality Pipeline", category: "Data", year: "2024", role: "Data Engineer",
    summary: "Structured SQL pipeline with deduplication, validation, semantic layers, and audit checks.",
    image: "/media/project-code.png", tags: ["SQL", "ETL", "Data Quality"],
    metrics: [["30+", "Rules"], ["12", "Tables"], ["Daily", "Audit"]],
    overview: "A reusable SQL foundation that turns messy business tables into trustworthy analytical sources.",
    problem: "Downstream dashboards inherited dirty data — silent failures and inconsistent KPIs.",
    dataset: "Operational business tables across orders, customers, and inventory.",
    methodology: ["Bronze/silver/gold layering", "Idempotent transforms with surrogate keys", "Audit rules per layer"],
    architecture: "Raw → staged → cleaned → semantic → audit views.",
    implementation: ["30+ validation rules expressed as SQL", "Row-count and checksum reconciliation"],
    challenges: ["Late-arriving data — handled with merge logic and watermarking"],
    results: ["Trustworthy semantic layer powering all downstream BI"],
    impact: "Eliminated silent KPI drift across 4 dashboards.",
    lessons: ["Audit views are the cheapest insurance you will ever write"], github: true,
  },
];

export const featured = ["hospital-patient-flow", "ml-classification-pipeline", "superstore-sales-dashboard", "ai-insight-automation", "pizza-sales-analytics", "sql-data-quality-pipeline"];

export const expertise = [
  { title: "Applied AI", text: "Classification, clustering, RAG, and narrator-pattern LLM systems.", items: ["Classification", "Clustering", "RAG systems", "LLM narrators", "Evaluation reports", "Model cards"], image: "/media/project-confusion-matrix.png" },
  { title: "Executive BI", text: "Power BI products with DAX measure groups and drill-through UX.", items: ["Power BI", "DAX measure groups", "Star schemas", "Drill-through", "KPI trees", "Custom themes"], image: "/media/project-hospital-flow.png" },
  { title: "Data Engineering", text: "Layered SQL pipelines with audit-by-default.", items: ["SQL pipelines", "Bronze / silver / gold", "Validation rules", "Audit views", "ETL", "Data quality"], image: "/media/project-code.png" },
  { title: "Machine Learning", text: "Reproducible pipelines from raw data to evaluated, deployable models.", items: ["Scikit-Learn", "Pipelines", "Grid search", "Calibration", "Feature importance", "Joblib"], image: "/media/project-feature-importance.png" },
  { title: "Forecasting", text: "Decomposition, ensembles, and scenarios packaged for planning.", items: ["STL decomposition", "Prophet + ETS", "Backtesting", "Scenarios", "Confidence intervals", "Planning BI"], image: "/media/project-roc.png" },
  { title: "Delivery", text: "Discovery → ship → measure. Documented, reproducible, owned.", items: ["Discovery", "Scoping", "Documentation", "Reproducibility", "Handover", "Impact metrics"], image: "/media/project-superstore.png" },
];

export const process = [
  { title: "Discovery", line: "Understanding the decision comes first.", time: "1–2 days", steps: ["I study the context.", "I define the decision.", "I clarify the constraints."] },
  { title: "Data audit", line: "Trust the data before modeling it.", time: "2–4 days", steps: ["I profile every source.", "I write the audit views.", "I flag what can't be trusted."] },
  { title: "Modeling", line: "Star schemas and pipelines, not one-off queries.", time: "1–2 weeks", steps: ["I build the semantic layer.", "I train and evaluate models.", "I keep everything reproducible."] },
  { title: "Product", line: "A dashboard is a product, not a report.", time: "1–2 weeks", steps: ["I design for one decision.", "I refine the hierarchy.", "I test with real stakeholders."] },
  { title: "Measure", line: "If it isn't measured, it didn't ship.", time: "Ongoing", steps: ["I document the runbook.", "I hand over with full rationale.", "I report the business impact."] },
];

export type Certification = { title: string; issuer: string; via?: string; date: string; image: string; verify?: string; featured?: boolean };
const cv = (id: string) => `https://coursera.org/verify/${id}`;
const ms = (path: string) => `https://learn.microsoft.com/en-us/users/ahmedarafa-2102/credentials/certification/${path}`;
/** Newest first within each issuer; dates and verification links come from the issued certificates. */
export const certifications: Certification[] = [
  { title: "Microsoft Certified: Fabric Analytics Engineer Associate", issuer: "Microsoft", date: "Jul 2026", image: "/media/cert-fabric-analytics.png", verify: ms("fabric-analytics-engineer-associate"), featured: true },
  { title: "Microsoft Certified: Power BI Data Analyst Associate", issuer: "Microsoft", date: "Jul 2026", image: "/media/cert-powerbi-data-analyst.jpg", verify: ms("data-analyst-associate"), featured: true },
  { title: "AWS: AI Practitioner Certificate", issuer: "AWS", via: "Manara", date: "Aug 2026", image: "/media/certs/aws-ai-practitioner.jpg", featured: true },
  { title: "AWS: Becoming a Machine Learning Engineer", issuer: "AWS", via: "Manara", date: "Aug 2026", image: "/media/certs/aws-ml-engineer.jpg", featured: true },
  { title: "The LLM Course — Fundamentals of LLMs", issuer: "Hugging Face", date: "Jun 2026", image: "/media/certs/huggingface-llm-course.jpg", featured: true },
  { title: "Claude 101", issuer: "Anthropic", date: "Apr 2026", image: "/media/certs/anthropic-claude-101.jpg", featured: true },
  { title: "Google Data Analytics Professional Certificate", issuer: "Google", via: "Coursera", date: "Apr 2026", image: "/media/cert-google-data-analytics-pro.jpg", verify: "https://coursera.org/verify/professional-cert/TG20A15GDG36", featured: true },
  { title: "Supervised Machine Learning: Regression and Classification", issuer: "Stanford / DeepLearning.AI", via: "Coursera", date: "May 2026", image: "/media/cert-supervised-ml.jpg", verify: cv("1PTIMQL4VPCN"), featured: true },
  { title: "Introduction to Retrieval Augmented Generation (RAG)", issuer: "Duke University", via: "Coursera", date: "Apr 2026", image: "/media/cert-rag-duke.jpg", verify: cv("ZGCS32LQHNZX"), featured: true },
  { title: "Data Analyst L1 — Completion Badge", issuer: "UN", date: "2026", image: "/media/badge-data-analyst-l1.png" },
  { title: "Preparing Data for Analysis with Microsoft Excel", issuer: "Microsoft", via: "Coursera", date: "Jun 2026", image: "/media/certs/excel-microsoft.jpg", verify: cv("I62G3KOTBIA2") },
  { title: "Image Segmentation, Filtering, and Region Analysis", issuer: "MathWorks", via: "Coursera", date: "Jun 2026", image: "/media/cert-image-segmentation.jpg", verify: cv("S91BA5Z00Z23") },
  { title: "Introduction to Image Processing", issuer: "MathWorks", via: "Coursera", date: "May 2026", image: "/media/cert-image-processing.jpg", verify: cv("SAX1PI6OB1Y9") },
  { title: "Business Analytics Foundations: Descriptive, Exploratory, and Explanatory Analytics", issuer: "LinkedIn Learning", date: "May 2026", image: "/media/certs/linkedin-business-analytics.jpg" },
  { title: "Speed Up Data Analysis and Presentation Building", issuer: "Google", via: "Coursera", date: "May 2026", image: "/media/cert-speed-up-data-analysis.jpg", verify: cv("6PZ88D3IIS0I") },
  { title: "Critical Thinking", issuer: "LinkedIn Learning", date: "Apr 2026", image: "/media/certs/linkedin-critical-thinking.jpg" },
  { title: "Learning Microsoft Copilot for Business Analysis", issuer: "LinkedIn Learning", date: "Apr 2026", image: "/media/certs/linkedin-copilot.jpg" },
  { title: "Vibe Coding Your First Agent with Google Gemini", issuer: "LinkedIn Learning", date: "Apr 2026", image: "/media/certs/linkedin-gemini-agent.jpg" },
  { title: "Introduction to Data Analysis Using Python", issuer: "Google", via: "Coursera", date: "Apr 2026", image: "/media/certs/python-google.jpg", verify: cv("RBV3VK4DB291") },
  { title: "Accelerate Your Job Search with AI", issuer: "Google", via: "Coursera", date: "Apr 2026", image: "/media/cert-accelerate-job-search-ai.jpg", verify: cv("EHMTT6JVEGU7") },
  { title: "Google Data Analytics Capstone: Complete a Case Study", issuer: "Google", via: "Coursera", date: "Apr 2026", image: "/media/cert-capstone.jpg", verify: cv("7FEQAARUFOY5") },
  { title: "Data Analysis with R Programming", issuer: "Google", via: "Coursera", date: "Apr 2026", image: "/media/cert-r-programming.jpg", verify: cv("PCW22VL4RXV0") },
  { title: "LinkedIn Profile Optimization", issuer: "Careerflow", date: "Mar 2026", image: "/media/certs/careerflow-linkedin.jpg" },
  { title: "Share Data Through the Art of Visualization", issuer: "Google", via: "Coursera", date: "Mar 2026", image: "/media/cert-share-data.png", verify: cv("96USRGISXFWY") },
  { title: "Analyze Data to Answer Questions", issuer: "Google", via: "Coursera", date: "Feb 2026", image: "/media/cert-analyze-data.png", verify: cv("Z1H7JVQL6YNN") },
  { title: "Process Data from Dirty to Clean", issuer: "Google", via: "Coursera", date: "Feb 2026", image: "/media/cert-process-data.png", verify: cv("NV6IXEMV2XKY") },
  { title: "Prepare Data for Exploration", issuer: "Google", via: "Coursera", date: "Feb 2026", image: "/media/cert-prepare-data.png", verify: cv("KQN3572RFIWW") },
  { title: "Ask Questions to Make Data-Driven Decisions", issuer: "Google", via: "Coursera", date: "Jan 2026", image: "/media/certs/ask-questions.jpg", verify: cv("YOR8X7CUIG9K") },
  { title: "Delivering Quality Work with Agility", issuer: "IBM", via: "Coursera", date: "Jan 2026", image: "/media/cert-agility.jpg", verify: cv("NGYP5FPXS8UD") },
  { title: "Foundations: Data, Data, Everywhere", issuer: "Google", via: "Coursera", date: "Jan 2026", image: "/media/certs/foundations-data.jpg", verify: cv("S23651PTKDWB") },
  { title: "Intermediate SQL", issuer: "DataCamp", date: "Dec 2025", image: "/media/cert-datacamp-sql-intermediate.jpg" },
  { title: "Introduction to SQL", issuer: "DataCamp", date: "Nov 2025", image: "/media/cert-datacamp-sql-intro.jpg" },
  { title: "Introduction to Python", issuer: "DataCamp", date: "Oct 2025", image: "/media/cert-datacamp-python.jpg" },
  { title: "Database Fundamentals", issuer: "ITI", via: "Mahara-Tech", date: "Feb 2025", image: "/media/cert-database-fundamentals.png" },
  { title: "Front End Development (90 hours)", issuer: "ITI", date: "Oct 2020", image: "/media/certs/iti-front-end.jpg" },
  { title: "Intermediate-Level Training in Python", issuer: "Delta Technological University", date: "Sep 2020", image: "/media/certs/dtu-python.jpg" },
  { title: "English Language Course", issuer: "Delta Technological University", date: "Sep 2020", image: "/media/certs/dtu-english.jpg" },
];

export const experience = [
  { role: "Data Analyst & AI Trainee", org: "Ministry of Communications & IT — Digilians Program", period: "2025 – Present", status: "Active",
    points: ["Built 4+ executive Power BI dashboards across Sales, Healthcare, and HR using DAX — cut reporting prep ~60%.", "Engineered SQL data-cleaning pipelines for 4,000+ rows with validation and audit checks.", "Trained classification models in Scikit-Learn, reaching 97% accuracy with full ROC and feature-importance analysis.", "Translated stakeholder requirements into KPI trees and drill-through reports for evidence-based decisions."],
    tags: ["Power BI", "DAX", "SQL", "Python", "Scikit-Learn"] },
  { role: "Volunteer — Data & Tech Mentor", org: "MCIT Digilians Community", period: "2024 – Present", status: "Active",
    points: ["Mentor 15+ junior students in SQL, Python, and Power BI fundamentals.", "Review peer projects and dashboards, providing structured feedback on data modeling and KPI design.", "Run community knowledge-sharing sessions on AI/ML workflows."], tags: [] },
  { role: "Professional Diploma — Data Analysis & AI", org: "Egyptian Military Academy × MCIT Digilians", period: "Sep 2025 – Aug 2026", status: "In progress",
    points: ["Coursework: Python, Advanced SQL, Statistics, ML, Power BI & DAX, ETL & Data Warehousing.", "Capstone projects across retail, healthcare, and HR analytics.", "Training in stakeholder communication and end-to-end project delivery."], tags: [] },
  { role: "Bachelor of Information Technology", org: "Faculty of Computers & Information", period: "Sep 2019 – Jul 2023", status: "Complete",
    points: ["Coursework: Databases, Data Structures & Algorithms, Software Engineering, Networking.", "Graduation project delivered with distinction; foundation for transition into data and AI."], tags: [] },
];

export const about = {
  lead: "Engineer first. Storyteller second.",
  sub: "I build intelligent systems that survive Monday morning — reproducible, audited, and designed around the decisions they support.",
  paragraphs: [
    "I'm a Data Analyst & AI Engineer trained at the Egyptian Military Academy through the MCIT Digilians national initiative. My day-to-day is split across three surfaces: production ML pipelines, executive Power BI products, and SQL data foundations that everything else relies on.",
    "I believe a notebook is a draft, a dashboard is a product, and an evaluation report is a contract. That framing shapes how I scope, build, and ship.",
    "Recent work has shipped 60% faster reporting, 97% model accuracy with calibrated probabilities, and audit views that catch silent KPI drift before stakeholders do.",
  ],
  facts: [["Based in", "Cairo, Egypt"], ["Open to", "Full-time · Contract · Consulting"], ["Languages", "English, Arabic"], ["Currently", "MCIT Digilians · Military Academy"]] as [string, string][],
  values: [
    ["Precision over speed", "Ship correct, even if it takes another iteration. Trust compounds."],
    ["Working backwards", "Write the case study first. Build to make it true."],
    ["Measure or it didn't ship", "Every project ends with a business-impact number."],
    ["Stakeholder-first", "The dashboard nobody opens is the dashboard you didn't design for."],
  ] as [string, string][],
  roadmap: [
    ["Foundations", ["SQL fluency", "Python + Pandas", "Statistics", "Power BI & DAX"]],
    ["Applied AI", ["Scikit-Learn pipelines", "Evaluation reporting", "Feature engineering", "Model cards"]],
    ["Systems", ["RAG architectures", "MLOps loops", "Data quality at scale", "LLM narrator pattern"]],
    ["Next", ["Vector DBs in production", "Real-time feature stores", "Agentic workflows with guards"]],
  ] as [string, string[]][],
  skills: [
    ["Languages", "Python, SQL, R, DAX, M (Power Query)"],
    ["ML & AI", "Scikit-Learn, Pandas, NumPy, PyTorch (basics), RAG, LLM narrator"],
    ["BI & Visualization", "Power BI, Excel, Matplotlib, Plotly"],
    ["Data Engineering", "PostgreSQL, MySQL, SQL Server, ETL, Data Quality"],
    ["Tools", "Git, VS Code, Jupyter, Linux"],
  ] as [string, string][],
};

export type Article = { slug: string; title: string; topic: string; date: string; read: string; excerpt: string; body: string[]; image: string };
export const articles: Article[] = [
  { slug: "from-notebook-to-product", title: "From notebook to product: shipping ML that survives Monday morning", topic: "Machine Learning", date: "Jun 2026", read: "6 min", image: "/media/project-confusion-matrix.png",
    excerpt: "Most ML projects die at the demo. A short field guide to the boring discipline that turns a notebook into a system stakeholders actually use.",
    body: ["A working notebook is a draft. A working product is a contract.", "The gap is not glamorous. It is reproducible pipelines, calibrated probabilities, and an evaluation report a non-technical stakeholder can read.", "Three habits matter more than any framework choice: a single Pipeline object, an EvaluationReport class, and a one-page model card. Everything else is decoration.", "Treat the first deployment as documentation. Write the runbook before you write the model."] },
  { slug: "dax-measure-groups", title: "Why I write DAX in measure groups, not measures", topic: "Power BI", date: "May 2026", read: "4 min", image: "/media/project-superstore.png",
    excerpt: "Scattered measures rot. Measure groups scale. A practical pattern from real Power BI engagements.",
    body: ["A measure is a contract. Five measures are a feature. Fifty scattered measures are a maintenance liability.", "Group measures by domain — Sales, Margin, Returns — and store each group in its own empty table. Power BI's modeling pane becomes a navigable API.", "Name measures by output, not input. `Net Revenue YoY %` beats `calc_net_rev_yoy`.", "The discipline is small. The compounding return across a 12-month engagement is huge."] },
  { slug: "the-sql-audit-view", title: "The cheapest insurance in analytics: SQL audit views", topic: "SQL", date: "Apr 2026", read: "5 min", image: "/media/project-code.png",
    excerpt: "Three SQL views that catch silent KPI drift before stakeholders do.",
    body: ["Silent failures are the worst kind. KPIs slide 4% and nobody notices for a quarter.", "Three audit views, refreshed daily, will cover 80% of the risk: row-count delta, checksum reconciliation, and rule-violation count.", "Store them in a dedicated `_audit` schema. Wire them into a single dashboard tile. Sleep better."] },
  { slug: "llm-as-narrator", title: "LLMs are best as narrators, not analysts", topic: "AI", date: "Mar 2026", read: "5 min", image: "/media/project-feature-importance.png",
    excerpt: "Why I let Python do the math and the LLM tell the story — and never the other way around.",
    body: ["LLMs hallucinate numbers because numbers are tokens to them. The fix is architectural, not promptural.", "Compute every signal in code. Pass the LLM a structured JSON of facts. Ask it to narrate, not to derive.", "Your accuracy ceiling becomes the quality of your code, not the temperature of your model."] },
  { slug: "career-data-to-ai", title: "Moving from data analyst to AI engineer without burning out", topic: "Career", date: "Feb 2026", read: "7 min", image: "/media/project-roc.png",
    excerpt: "A pragmatic roadmap built around shipping, not certifications.",
    body: ["Certifications open doors. Shipped work keeps them open.", "Pick one project per quarter that forces a new technique. Constrain it to two weeks of execution after one week of design.", "Write the case study before the project is done. Working backwards from the artifact clarifies the scope."] },
];

export const engagements = [
  { name: "Full-time", duration: "Permanent role", note: "For teams hiring an AI & Data Engineer", items: ["ML pipelines and evaluation", "Executive BI products", "SQL data foundations", "Stakeholder-facing delivery", "Mentoring and documentation"], cta: "Start a conversation" },
  { name: "Contract", duration: "2–12 weeks", note: "For scoped projects with a clear outcome", items: ["One defined deliverable", "Fixed scope and timeline", "Weekly progress reviews", "Full handover and runbook", "Impact metric agreed upfront"], cta: "Scope a project" },
  { name: "Consulting", duration: "Flexible", note: "For a second opinion on data or AI work", items: ["Data model reviews", "Dashboard audits", "ML evaluation reviews", "Architecture guidance", "Async or live sessions"], cta: "Book a call" },
];

export const faqs = [
  ["What kind of roles are you open to?", "Full-time AI & Data Engineer or BI roles, scoped contracts, and short consulting engagements. Remote or Cairo-based."],
  ["Which tools do you work with?", "Python (Pandas, Scikit-Learn), SQL (PostgreSQL, MySQL, SQL Server), Power BI with DAX and Power Query, and Git-based workflows."],
  ["How do you start a project?", "With a short discovery call to understand the decision the work should support, then a written scope with an agreed impact metric."],
  ["Can you work with messy or incomplete data?", "Yes. Every project starts with a data audit — profiling, validation rules, and audit views — before any modeling begins."],
  ["How quickly do you reply?", "Within 24 hours on email or WhatsApp."],
];
