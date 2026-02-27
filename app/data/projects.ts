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
  // {
  //   id: 3,
  //   order: 4,
  //   title: 'Stock Market Simulator',
  //   shortDescription:
  //     'A real-time stock market simulation game for practicing trading strategies without financial risk.',
  //   description:
  //     'A gamified, real-time stock market simulator that allows users to practice trading strategies with virtual currency. The platform features live data feeds, portfolio tracking, and a competitive leaderboard.',
  //   image: '/img/stock-simulator.png',
  //   tags: ['Web Application', 'Vue.js', 'Node.js', 'WebSocket', 'MongoDB', 'Chart.js', 'FinTech'],
  //   status: 'Coming Soon!',
  //   category: 'Web Application',
  //   completedDate: 'May 2024',
  //   duration: '',
  //   liveUrl: null,
  //   githubUrl: null,
  //   capabilities: [
  //     'Trade stocks with real-time market data using virtual money.',
  //     'Track portfolio performance and history.',
  //     'Compete with other users on a global leaderboard.',
  //     'View historical stock charts and data.',
  //   ],
  //   futureImprovements: [
  //     'Add support for more asset classes (e.g., crypto, options).',
  //     'Implement social features like user profiles and friend lists.',
  //     'Create educational content and tutorials for new traders.',
  //   ],
  //   technicalDetails:
  //     'The frontend is a responsive Vue.js single-page application. The Node.js backend uses WebSockets to push real-time stock price updates to clients. MongoDB is used to store user portfolios and trading history. Chart.js is used for interactive stock charts.',
  // },
  // {
  //   id: 5,
  //   order: 6,
  //   title: 'Recipe Creator API',
  //   shortDescription:
  //     'An API to generate unique cooking recipes based on available ingredients using a fine-tuned LLM.',
  //   description:
  //     "This creative API uses a fine-tuned language model to generate unique cooking recipes from a list of available ingredients. It's a fun and practical application of generative AI that can be integrated into cooking apps or smart home devices.",
  //   image: '/img/recipe-creator.png',
  //   tags: ['AI/ML', 'Python', 'FastAPI', 'Transformers', 'Docker', 'Generative AI'],
  //   status: 'Coming Soon!',
  //   category: 'AI/ML',
  //   completedDate: 'December 2023',
  //   duration: '',
  //   liveUrl: null,
  //   githubUrl: null,
  //   capabilities: [
  //     'Generate a recipe from a list of ingredients.',
  //     'Specify dietary restrictions (e.g., vegetarian, gluten-free).',
  //     'Suggest recipes based on cuisine type.',
  //     'Control the complexity and cooking time of the generated recipe.',
  //   ],
  //   futureImprovements: [
  //     'Fine-tune the model on a larger, more diverse dataset of recipes.',
  //     'Add nutritional information to the generated recipes.',
  //     'Generate images of the final dish using a text-to-image model.',
  //   ],
  //   technicalDetails:
  //     'The core of the API is a fine-tuned language model from the Hugging Face Transformers library. The model is served via a Python FastAPI backend. The entire application is containerized with Docker for easy deployment and scaling.',
  // },
  {
    id: 1,
    order: 2,
    title: 'AI Task Processor API',
    shortDescription: 'A modular NestJS API that executes predefined, multi-modal AI tasks.',
    description:
      'A structured orchestration engine built with NestJS. Unlike generic chatbots, this API executes discrete cognitive tasks—such as demographic analysis on images or fact-checking textual content. It uses a modular Strategy Pattern architecture to route inputs to specific AI processors (Gemini and Ollama), ensuring reliable and deterministic outputs.',
    image: '/img/image-processing-api.png',
    technologies: ['NestJS', 'TypeScript', 'LangChain'],
    status: 'In Progress',
    category: 'AI/ML',
    completedDate: '',
    duration: '',
    liveUrl: null,
    githubUrl: 'https://github.com/gooddogdevelopment-sys/snow-leopard',
    capabilities: [
      'Visual Analysis: Upload images to estimate subject demographics (e.g., Age Guessing) using Vision models.',
      'Content Verification: Process articles to automatically detect factual inaccuracies or logical inconsistencies.',
      'Strict Input Validation: Uses DTOs to ensure the LLM receives structured, valid data for every request.',
    ],
    futureImprovements: [
      'Queue System: Implement a queue to handle long-running text analysis tasks asynchronously.',
      'Document Parsing: Add support for PDF and DOCX ingestion and summarization.',
      'Frontend Application: Develop a dedicated web interface (Vue/Nuxt) to visualize task inputs and render structured AI results.',
    ],
    technicalDetails:
      'The core is built on NestJS using the Strategy Pattern to isolate task logic. It utilizes LangChain to orchestrate interactions with various LLMs (such as Gemini and Ollama), enabling a hybrid architecture that leverages both cloud-based and local inference.',
  },
  {
    id: 2,
    order: 1,
    title: 'News Letter Generator',
    shortDescription: 'A daily newsletter generator that uses Gemini to create short coding tips and code snippets.',
    description:
      'A daily newsletter generator that uses Gemini to create short coding tips and code snippets.',
    image: '/img/newsletter.png',
    technologies: ['C#', 'Gemini', 'GitHub Actions', 'PostgreSQL'],
    status: 'In Progress',
    category: 'AI/ML',
    completedDate: '',
    duration: '',
    liveUrl: null,
    githubUrl: 'https://github.com/gooddogdevelopment-sys/NewsLetter',
    capabilities: [
    ],
    futureImprovements: [
    ],
    technicalDetails:
      'The backend is built with C# and uses the Gemini API to generate content. GitHub Actions is used to schedule daily newsletter generation and distribution.',
  },
];
