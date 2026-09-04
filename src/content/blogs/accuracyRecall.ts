import type { Blog } from "./types";

const accuracyFailureDetection: Blog = {
  slug: "why-accuracy-can-be-misleading-in-failure-detection-systems",

  title: "Why Accuracy Can Be Misleading in Failure Detection Systems",

  description:
    "Why accuracy can give a misleading picture of model performance when detecting failures in highly imbalanced datasets.",

  excerpt:
    "A model can achieve high accuracy while missing the failures we actually care about. Here's why accuracy alone isn't enough for failure detection.",

  publishedAt: "2026-09-04",

  readingTime: "4 min read",

  featured: true,

  tags: [
    "Machine Learning",
    "Anomaly Detection",
    "Model Evaluation",
    "Data Science",
  ],

  content: [
    {
      type: "paragraph",
      text: "When evaluating a machine learning model, accuracy is usually one of the first metrics we look at.",
    },

    {
      type: "paragraph",
      text: "It is simple, intuitive, and easy to compare. But that simplicity can become a problem when the data is highly imbalanced.",
    },

    {
      type: "paragraph",
      text: "Failure detection is a good example.",
    },

    {
      type: "paragraph",
      text: "Imagine a dataset with 10,000 observations:",
    },

    {
      type: "list",
      items: [
        "9,800 are normal",
        "200 are failures",
      ],
    },

    {
      type: "paragraph",
      text: "Now consider a model that predicts every observation as normal.",
    },

    {
      type: "paragraph",
      text: "It correctly classifies 9,800 observations and achieves 98% accuracy.",
    },

    {
      type: "paragraph",
      text: "But it detects none of the failures.",
    },

    {
      type: "heading",
      level: 2,
      text: "Why Class Imbalance Matters",
    },

    {
      type: "paragraph",
      text: "In many real-world failure detection problems, failures are much less common than normal behavior.",
    },

    {
      type: "paragraph",
      text: "A spacecraft doesn't fail every time telemetry is collected. A server doesn't crash on every request. A manufacturing machine doesn't produce defective components most of the time.",
    },

    {
      type: "paragraph",
      text: "Normal behavior dominates the dataset.",
    },

    {
      type: "paragraph",
      text: "This creates a class imbalance between:",
    },

    {
      type: "paragraph",
      text: "Normal observations → majority class",
    },

    {
      type: "paragraph",
      text: "Failure/anomaly observations → minority class",
    },

    {
      type: "paragraph",
      text: "When one class vastly outnumbers the other, accuracy can be dominated by the majority class.",
    },

    {
      type: "paragraph",
      text: "If 99% of the observations are normal, a model that predicts \"normal\" almost everywhere can achieve close to 99% accuracy without actually being good at detecting failures.",
    },

    {
      type: "paragraph",
      text: "So the important question isn't only how many predictions the model gets right.",
    },

    {
      type: "paragraph",
      text: "It is whether the model is actually detecting the minority class.",
    },

    {
      type: "heading",
      level: 2,
      text: "What Accuracy Hides",
    },

    {
      type: "paragraph",
      text: "A model can make two important types of mistakes:",
    },

    {
      type: "list",
      items: [
        "False positive: normal behavior is classified as a failure.",
        "False negative: an actual failure is classified as normal.",
      ],
    },

    {
      type: "paragraph",
      text: "These errors don't necessarily have the same consequences.",
    },

    {
      type: "paragraph",
      text: "A false positive may result in an unnecessary alert or inspection. A false negative, however, means that an actual failure has gone undetected.",
    },

    {
      type: "paragraph",
      text: "That difference matters when evaluating a failure detection system.",
    },

    {
      type: "paragraph",
      text: "A model with slightly lower overall accuracy may therefore be more useful if it detects substantially more of the failures we care about.",
    },

    {
      type: "heading",
      level: 2,
      text: "Looking Beyond Accuracy",
    },

    {
      type: "paragraph",
      text: "This is where precision and recall become important.",
    },

    {
      type: "paragraph",
      text: "Recall tells us how many of the actual failures the model detects.",
    },

    {
      type: "paragraph",
      text: "Precision tells us how often the failures identified by the model are actually failures.",
    },

    {
      type: "paragraph",
      text: "Looking at both gives us a much better understanding of how the model behaves on the target class.",
    },

    {
      type: "paragraph",
      text: "A model with high recall but very low precision may generate too many false alarms.",
    },

    {
      type: "paragraph",
      text: "A model with high precision but low recall may identify failures accurately when it raises an alert, but miss too many failures altogether.",
    },

    {
      type: "paragraph",
      text: "The right balance depends on the system and the consequences of these errors.",
    },

    {
      type: "heading",
      level: 2,
      text: "A Practical Example",
    },

    {
      type: "paragraph",
      text: "I encountered this problem while working on supervised anomaly detection for NASA SMAP spacecraft telemetry during my research internship at IIT Patna.",
    },

    {
      type: "paragraph",
      text: "The dataset had severe class imbalance, so accuracy wasn't enough when comparing the models. I evaluated approaches including One-Class SVM, Random Forest, and SVC, and optimized the final pipeline using RandomizedSearchCV and SMOTE.",
    },

    {
      type: "paragraph",
      text: "The final model achieved 88% accuracy, but that number alone didn't tell me how well it was detecting anomalies.",
    },

    {
      type: "paragraph",
      text: "For the anomaly class, precision and recall were also important parts of the evaluation.",
    },

    {
      type: "paragraph",
      text: "This was a useful reminder that the best-looking overall metric isn't necessarily the best indicator of whether a model is solving the problem it was built to solve.",
    },

    {
      type: "heading",
      level: 2,
      text: "Accuracy Isn't Useless",
    },

    {
      type: "paragraph",
      text: "None of this means accuracy is a bad metric.",
    },

    {
      type: "paragraph",
      text: "When the classes are reasonably balanced and different types of errors have similar consequences, accuracy can be a useful measure.",
    },

    {
      type: "paragraph",
      text: "The problem is relying on it as the only measure of performance when the data is heavily imbalanced and the minority class is the primary concern.",
    },

    {
      type: "paragraph",
      text: "Model evaluation should reflect the actual objective of the system.",
    },

    {
      type: "paragraph",
      text: "For failure detection, that means asking not only whether the model is usually correct, but whether it can reliably identify the failures that matter.",
    },

    {
      type: "heading",
      level: 2,
      text: "The Bigger Lesson",
    },

    {
      type: "paragraph",
      text: "A model can look successful according to a metric and still perform poorly at the task we built it for.",
    },

    {
      type: "paragraph",
      text: "The metric isn't necessarily wrong. Sometimes, we're simply asking it to answer the wrong question.",
    },

    {
      type: "paragraph",
      text: "So don't stop at the accuracy score. Ask:",
    },

    {
      type: "paragraph",
      text: "Is the model actually good at detecting the failures?",
    },

    {
      type: "paragraph",
      text: "That is what the system was built to do.",
    },
  ],
};

export default accuracyFailureDetection;
