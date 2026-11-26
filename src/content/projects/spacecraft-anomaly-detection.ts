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
        "SMOTE",
        "RandomizedSearchCV",
        "Matplotlib"
    ],

    status: "Completed",

    featured: true,

    github: "https://github.com/m-s-shanmukha-aditya/smap-spacecraft-anomaly-detection",

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
            "Early experiments with other classifiers, including One-Class SVM and Random Forest, did not help and were dropped; the final pipeline uses an RBF-kernel SVC with PCA, SMOTE on the training data and RandomizedSearchCV."
        ],

        architecture: {
            description: [
                "Raw telemetry signals and anomaly interval metadata were first transformed into a supervised learning dataset.",
                "Statistical features were extracted from each telemetry segment to represent spacecraft behaviour in a compact numerical form.",
                "Feature standardization and Principal Component Analysis (PCA) reduced redundancy while preserving dominant signal characteristics.",
                "The final pipeline combined PCA, SMOTE on the training data, RandomizedSearchCV, and an RBF Support Vector Classifier for binary anomaly detection."
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
                    "Applied SMOTE to the training data and focused on anomaly precision and recall as well as overall accuracy."
            },
            {
                title: "Model Selection",
                description:
                    "Early experiments with other classifiers did not help on the engineered feature space.",
                solution:
                    "Dropped those experiments and used an RBF-kernel SVC with PCA, SMOTE on the training data, and RandomizedSearchCV."
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
                    "Used for held-out test results on the stated split."
            },
            {
                title: "Accuracy",
                value: "88%",
                description:
                    "Held-out test result on a random stratified split of timesteps from one channel with two anomaly intervals."
            },
            {
                title: "Anomaly Detection",
                value: "~65% Precision / Recall",
                description:
                    "Held-out test result on that split."
            }
        ],

        limitations: [
            "Evaluation is a random stratified split of timesteps from one channel with two anomaly intervals, so the reported precision and recall are optimistic. Features are per-timestep, not windowed. The scoring metric targets the Normal class."
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
            "Evaluate contrastive learning approaches for telemetry embeddings.",
            "Develop feature representations capable of preserving contextual relationships between anomaly classes."
        ]
    }
};