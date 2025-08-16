export const projects = [
  {
    project_name: 'AI-Powered Knowledge Hub',
    slug: 'ai-content-hub',
    project_description:
      "A full-stack web application that allows users to generate, edit, summarize, and publish AI-assisted articles using OpenAI's API and Langchain. Built with a responsive UI, state management, and editor-rich UX.",
    tech_stack: {
      frontend: [
        'Next.js 14 (App Router)',
        'Tailwind CSS',
        'ShadCN UI',
        'Tiptap Editor',
        'Zustand',
      ],
      backend: ['Node.js', 'Next.js API Routes', 'Prisma ORM', 'SQLite'],
      database: ['SQLite'],
      ai_integration: ['OpenAI API', 'Langchain'],
    },
    github_url: 'https://github.com/Rohit2697/ai-content-hub.git',
    liveDemo_url: 'https://ai-content-hub-ruddy.vercel.app',
  },
  {
    project_name: 'Task Manager',
    slug: 'taskmanager',
    project_description:
      'The Task Manager Dashboard is developed using Vue.js, Express.js, and MongoDB, offering a user-friendly interface for efficient task management. Users can seamlessly create, edit, and delete tasks, set due dates, and track progress.',
    tech_stack: {
      frontend: ['vuejs', 'Bootstrap5'],
      backend: ['Express JS'],
      database: ['mongo db'],
    },
    github_url: 'https://github.com/Rohit2697/task-manager-api.git',
  },
  {
    project_name: 'Weather App',
    slug: 'weatherapp',
    project_description:
      'Developed a Weather App that retrieves weather data from the Weather Stack API and creates custom REST APIs for data delivery.',
    tech_stack: {
      frontend: ['HTML5', 'CSS', 'JavaScript'],
      backend: ['Nodejs', 'Express server', 'REST APIs'],
    },
    github_url: 'https://github.com/Rohit2697/node-weather-project.git',
  },
  {
    project_name: 'News Hub',
    slug: 'news_hub',
    project_description:
      "A dynamic news platform that leverages the power of the News API and Google's Gemini Flash LLM model to deliver fine-tuned, relevant news to users.",
    tech_stack: {
      frontend: ['Nextjs', 'Shadcn UI'],
      backend: ['Express JS', 'Google Gemini Flash'],
      database: ['mongo db'],
    },
    github_url: 'https://github.com/Rohit2697/news_hub_frontend',
    liveDemo_url: 'https://news-hub-frontend-neon.vercel.app/login',
  },
  {
    project_name: 'Chat App',
    slug: 'chatapp',
    project_description:
      'The Chat App is a modern communication platform developed using cutting-edge technologies. This project offers a seamless and interactive chat experience, bringing users together in real-time conversations.',
    tech_stack: {
      frontend: ['React JS', 'redux', 'Bootstrap5'],
      backend: ['Express JS', 'rest API', 'Socket IO server'],
    },
    github_url: 'https://github.com/Rohit2697/ChatApp.git',
  },
  {
    project_name: 'Automated Gmail Cleanup',
    slug: 'gmail_cleanup',
    project_description:
      'A Node.js-based automation tool that connects to Gmail via Google APIs and deletes unwanted emails in bulk using custom queries. The solution supports pagination, batch deletion (up to 1000 emails per API call), and environment-based configuration. It can also be scheduled to run automatically using Windows Task Scheduler or cron jobs.',
    tech_stack: {
      backend: ['Node.js', 'TypeScript', 'Google APIs', 'dotenv'],
    },
    github_url: 'https://github.com/Rohit2697/deleteEmail.git',
  },
];

export const projectImages = [
  '/projects/ai-content-hub.jpeg',
  '/projects/taskmanager.jpeg',
  '/projects/weatherapp.jpeg',
  '/projects/news_hub.jpeg',
  '/projects/chatapp.jpeg',
  '/projects/gmail_cleanup.jpeg',
];
