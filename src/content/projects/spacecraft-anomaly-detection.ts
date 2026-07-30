import type { Project } from "./types";

export const spacecraftTelemetry: Project = {
    id: "spacecraft-telemetry",
    slug: "spacecraft-telemetry-anomaly-detection",

    title: "Spacecraft Telemetry Anomaly Detection",
    subtitle: "Supervised Machine Learning on NASA SMAP Telemetry",

    summary:
        "A supervised anomaly detection pipeline developed during my internship at IIT Patna to detect anomalous spacecraft behaviour from NASA SMAP telemetry using statistical feature engineering, dimensionality reduction, and classical machine learning.",

    overview:
        "This project was carried out during my Machine Learning internship at IIT Patna, where the objective was to reproduce and extend an existing LS-SVM based research methodology for spacecraft telemetry anomaly detection. Instead of proposing a new algorithm, the work focused on building a complete and reproducible machine learning pipeline—from transforming raw telemetry into supervised training data, to feature engineering, model selection, hyperparameter optimization, and performance evaluation under severe class imbalance.",

    year: 2025,

    category: "Research",

    technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "PCA",
        "SVC",
        "Random Forest",
        "One-Class SVM",
        "SMOTE",
        "RandomizedSearchCV",
        "Matplotlib"
    ],

    status: "Completed",

    featured: false,

    detail: {
        hero: {
            duration: "May 2025 – July 2025",
            role: "Machine Learning Research Intern"
        },

        problem: [
            "Spacecraft continuously generate large volumes of telemetry data that must be monitored to identify abnormal system behaviour before failures occur.",
            "The NASA SMAP dataset provides anomaly intervals instead of sample-level labels, making it unsuitable for directly training supervised machine learning models.",
            "The objective was to reproduce a published LS-SVM based anomaly detection methodology while engineering a complete supervised learning pipeline capable of distinguishing normal and anomalous telemetry behaviour."
        ],

        solution: [
            "Converted anomaly interval metadata into supervised binary labels by mapping anomaly windows onto individual telemetry samples.",
            "Extracted statistical features from telemetry signals instead of directly modelling raw time-series data, followed by feature normalization and PCA for dimensionality reduction.",
            "Systematically evaluated One-Class SVM, Random Forest, and Support Vector Classifier under identical preprocessing and evaluation pipelines.",
            "Addressed severe class imbalance using SMOTE, optimized hyperparameters through RandomizedSearchCV, and selected an RBF-kernel SVC as the final model."
        ],

        architecture: {
            description: [
                "Raw telemetry signals and anomaly interval metadata were first transformed into a supervised learning dataset.",
                "Statistical features were extracted from each telemetry segment to represent spacecraft behaviour in a compact numerical form.",
                "Feature standardization and Principal Component Analysis (PCA) reduced redundancy while preserving dominant signal characteristics.",
                "Multiple classical machine learning models were trained and compared using identical feature representations.",
                "The final pipeline combined SMOTE, PCA, RandomizedSearchCV, and an RBF Support Vector Classifier for binary anomaly detection."
            ]
        },

        challenges: [
            {
                title: "Generating Supervised Labels",
                description:
                    "NASA SMAP provides anomaly intervals rather than per-sample labels, requiring significant preprocessing before supervised learning could be applied.",
                solution:
                    "Developed a preprocessing pipeline that mapped anomaly intervals onto telemetry samples to generate binary training labels."
            },
            {
                title: "Severe Class Imbalance",
                description:
                    "The dataset contained approximately a 43:1 ratio between normal and anomalous samples, making conventional accuracy an unreliable evaluation metric.",
                solution:
                    "Applied SMOTE, class weighting, and focused on anomaly precision and recall rather than overall accuracy alone."
            },
            {
                title: "Model Selection",
                description:
                    "Different classical machine learning algorithms behaved very differently on the engineered feature space.",
                solution:
                    "Compared One-Class SVM, Random Forest, and SVC through systematic experimentation before selecting the final optimized classifier."
            },
            {
                title: "Anomaly-Type Classification",
                description:
                    "Although binary anomaly detection performed well, extending the system to classify different anomaly categories proved unreliable.",
                solution:
                    "Analysis showed that statistical feature representations lacked sufficient temporal and contextual information to reliably distinguish anomaly types, highlighting an important limitation of the approach."
            }
        ],

        results: [
            {
                title: "Final Model",
                value: "RBF Support Vector Classifier",
                description:
                    "Selected after systematic comparison with One-Class SVM and Random Forest."
            },
            {
                title: "Accuracy",
                value: "88%",
                description:
                    "Achieved on the final supervised anomaly detection pipeline despite severe class imbalance."
            },
            {
                title: "Anomaly Detection",
                value: "~65% Precision / Recall",
                description:
                    "Maintained balanced anomaly detection performance under approximately 43:1 class imbalance."
            }
        ],

        lessonsLearned: [
            "Building a reliable machine learning system requires far more effort in data preparation than model selection.",
            "Feature engineering and preprocessing significantly influence downstream model performance.",
            "Accuracy alone is insufficient for evaluating anomaly detection systems under severe class imbalance.",
            "Understanding why a model fails is often more valuable than simply improving benchmark metrics.",
            "Statistical feature representations are effective for binary anomaly detection but insufficient for capturing richer temporal relationships required for anomaly-type classification."
        ],

        futureWork: [
            "Investigate temporal feature representations capable of modelling sequential spacecraft behaviour.",
            "Explore deep representation learning for anomaly-type classification.",
            "Evaluate contrastive learning approaches for robust telemetry embeddings.",
            "Develop feature representations capable of preserving contextual relationships between anomaly classes."
        ]
    }
};