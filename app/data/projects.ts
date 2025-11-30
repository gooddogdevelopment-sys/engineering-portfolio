export interface Project {
  id: number;
  order: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies?: string[];
  tags?: string[];
  status: string;
  category: string;
  completedDate: string;
  duration: string;
  liveUrl: string | null;
  githubUrl: string | null;
  capabilities: string[];
  futureImprovements: string[];
  technicalDetails: string;
}

export const allProjects: Project[] = [
  {
    id: 6,
    order: 2,
    title: 'AI Dev Toolkit',
    shortDescription:
      'A web-based toolkit for developers working with AI models, providing utilities for testing and deployment.',
    description:
      'A comprehensive, web-based toolkit designed to streamline the workflow for developers working with AI models. Features include model comparison, performance testing, and one-click deployment pipelines, all accessible through an intuitive user interface.',
    image: '/img/ai-dev-toolkit.png',
    tags: ['API', 'Interface', 'Development', 'AI', 'Experimental'],
    status: 'Coming Soon!',
    category: 'Web Application',
    completedDate: 'Coming Soon!',
    duration: '',
    liveUrl: null,
    githubUrl: null,
    capabilities: [
      'Compare performance metrics of different AI models side-by-side.',
      'Automate deployment of models to various cloud environments.',
      'Test model inference with custom inputs via a user-friendly UI.',
      'Monitor model performance and resource usage in real-time.',
    ],
    futureImprovements: [
      'Integration with more cloud providers (Azure, GCP).',
      'Support for a wider range of model types and frameworks.',
      'Collaborative features for team-based model development.',
    ],
    technicalDetails:
      'The frontend is built with Nuxt.js for a fast, server-rendered experience. The backend is a Python FastAPI service that communicates with various AI model APIs and cloud services. Docker is used to containerize the application for consistent deployments.',
  },
  {
    id: 2,
    order: 3,
    title: 'Journal Analysis API',
    shortDescription:
      'An API that performs sentiment analysis and entity recognition on journal entries.',
    description:
      "This powerful API leverages natural language processing to analyze journal entries, providing insights into sentiment trends, key entities, and emotional patterns. It's built for scalability and easy integration into other applications.",
    image: '/img/journal-analysis.png',
    tags: ['AI/ML', 'Python', 'FastAPI', 'spaCy', 'Docker', 'PostgreSQL', 'NLP'],
    status: 'Coming Soon!',
    category: 'AI/ML',
    completedDate: 'July 2024',
    duration: '',
    liveUrl: 'https://journal-api.example.com',
    githubUrl: null,
    capabilities: [
      'Perform sentiment analysis on text (positive, negative, neutral).',
      'Extract named entities (people, places, organizations).',
      'Track sentiment trends over time for a series of entries.',
      'Provide a confidence score for each analysis result.',
    ],
    futureImprovements: [
      'Add support for more languages.',
      'Implement topic modeling to identify common themes.',
      'Create a dashboard for visualizing analysis results.',
    ],
    technicalDetails:
      'A lightweight FastAPI application serves the NLP models. The spaCy library is used for all natural language processing tasks. A PostgreSQL database stores journal entries and their analysis results, allowing for historical data queries.',
  },
  {
    id: 3,
    order: 4,
    title: 'Stock Market Simulator',
    shortDescription:
      'A real-time stock market simulation game for practicing trading strategies without financial risk.',
    description:
      'A gamified, real-time stock market simulator that allows users to practice trading strategies with virtual currency. The platform features live data feeds, portfolio tracking, and a competitive leaderboard.',
    image: '/img/stock-simulator.png',
    tags: ['Web Application', 'Vue.js', 'Node.js', 'WebSocket', 'MongoDB', 'Chart.js', 'FinTech'],
    status: 'Coming Soon!',
    category: 'Web Application',
    completedDate: 'May 2024',
    duration: '',
    liveUrl: 'https://stock-sim.example.com',
    githubUrl: null,
    capabilities: [
      'Trade stocks with real-time market data using virtual money.',
      'Track portfolio performance and history.',
      'Compete with other users on a global leaderboard.',
      'View historical stock charts and data.',
    ],
    futureImprovements: [
      'Add support for more asset classes (e.g., crypto, options).',
      'Implement social features like user profiles and friend lists.',
      'Create educational content and tutorials for new traders.',
    ],
    technicalDetails:
      'The frontend is a responsive Vue.js single-page application. The Node.js backend uses WebSockets to push real-time stock price updates to clients. MongoDB is used to store user portfolios and trading history. Chart.js is used for interactive stock charts.',
  },
  {
    id: 4,
    order: 5,
    title: 'Data Processing API',
    shortDescription:
      'A high-performance API for cleaning, transforming, and processing large datasets efficiently.',
    description:
      'Built for performance, this API provides a suite of tools for cleaning, transforming, and processing large datasets. It uses asynchronous task queues to handle heavy workloads without blocking, ensuring fast and reliable data operations.',
    image: '/img/data-processing.png',
    tags: [
      'Data Visualization',
      'Python',
      'Pandas',
      'FastAPI',
      'Celery',
      'Redis',
      'Data Engineering',
    ],
    status: 'Coming Soon!',
    category: 'Data Visualization',
    completedDate: 'February 2024',
    duration: '',
    liveUrl: null,
    githubUrl: null,
    capabilities: [
      'Upload and process large CSV or JSON files.',
      'Perform data cleaning operations (e.g., handling missing values).',
      'Apply data transformations and feature engineering.',
      'Handle long-running jobs asynchronously without timeouts.',
    ],
    futureImprovements: [
      'Add a web-based UI for managing processing jobs.',
      'Support more data formats (e.g., Parquet, Excel).',
      'Integrate with cloud storage providers (S3, Google Cloud Storage).',
    ],
    technicalDetails:
      'The API is built with FastAPI. For long-running data processing tasks, it uses Celery as a distributed task queue, with Redis as the message broker. The powerful Pandas library is used for all backend data manipulation.',
  },
  {
    id: 5,
    order: 6,
    title: 'Recipe Creator API',
    shortDescription:
      'An API to generate unique cooking recipes based on available ingredients using a fine-tuned LLM.',
    description:
      "This creative API uses a fine-tuned language model to generate unique cooking recipes from a list of available ingredients. It's a fun and practical application of generative AI that can be integrated into cooking apps or smart home devices.",
    image: '/img/recipe-creator.png',
    tags: ['AI/ML', 'Python', 'FastAPI', 'Transformers', 'Docker', 'Generative AI'],
    status: 'Coming Soon!',
    category: 'AI/ML',
    completedDate: 'December 2023',
    duration: '',
    liveUrl: 'https://recipe-api.example.com',
    githubUrl: null,
    capabilities: [
      'Generate a recipe from a list of ingredients.',
      'Specify dietary restrictions (e.g., vegetarian, gluten-free).',
      'Suggest recipes based on cuisine type.',
      'Control the complexity and cooking time of the generated recipe.',
    ],
    futureImprovements: [
      'Fine-tune the model on a larger, more diverse dataset of recipes.',
      'Add nutritional information to the generated recipes.',
      'Generate images of the final dish using a text-to-image model.',
    ],
    technicalDetails:
      'The core of the API is a fine-tuned language model from the Hugging Face Transformers library. The model is served via a Python FastAPI backend. The entire application is containerized with Docker for easy deployment and scaling.',
  },
  {
    id: 1,
    order: 1,
    title: 'Image Analysis API',
    shortDescription: 'A C# .NET Core API to process image files and extract valuable metadata.',
    description:
      'A robust and efficient service built with C# .NET Core. This API is designed to process image files and extract valuable metadata, providing a programmatic way to analyze various aspects of your images. This project is experimental and is not intended for production use.',
    image: '/img/image-processing-api.png',
    technologies: ['C#', '.NET Core', 'API', 'AI/ML', 'MetadataExtractor'],
    status: 'In Progress',
    category: 'AI/ML',
    completedDate: '',
    duration: '',
    liveUrl: null,
    githubUrl: 'https://github.com/BrandonDecker234/ImageProcessor',
    capabilities: [
      'Retrieve essential metadata (like dimensions, file format, creation date, camera model, etc.) from uploaded image files.',
      'Identify subjects (people, place, animals, etc.) using AI.',
    ],
    futureImprovements: [
      'Expanded Image Format Support: Add support for more image formats like HEIC, WebP, and SVG.',
      'Color palette extraction.',
      'Object detection and recognition.',
      'Facial recognition and analysis.',
      'Cloud Storage Integration: Allow processing images directly from cloud storage providers like AWS S3, Azure Blob Storage, or Google Cloud Storage.',
      'Add user authentication and authorization to secure the API endpoints.',
      'Allow users to upload and process multiple images in a single request.',
    ],
    technicalDetails:
      'The core of the API is built with C# and the .NET Core framework, using ASP.NET Core for the web API endpoints. It utilizes the MetadataExtractor library for reading metadata from various image file formats.',
  },
];
