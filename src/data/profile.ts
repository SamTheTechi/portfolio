export const aboutLines = [
  "I'm a CS undergrad who experiments and builds random things at 2AM",
  "I speak Typescripe, Python and somehow even Rust",
  "These days, the hardest part is booting windows"
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Rust', 'Bash'],
  },
  {
    label: 'frontend',
    items: ['Nextjs', 'Expo', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
  },
  {
    label: 'backend',
    items: ['Express', 'FastAPI', 'Axum', 'webRTC', 'gRPC', 'Redis', 'MongoDB', 'Postgres', 'rabbitMQ'],
  },
  {
    label: 'genAI',
    items: ['LangChain', 'Langgraph', 'RAG', 'Ollama', 'redisVL', 'Pinecone', 'Langfuse'],
  },
  {
    label: 'devops & tooling',
    items: ['Docker', 'AWS', 'Cloudflare', 'Linux (Arch/Debian)', 'Neovim', 'Git/GitHub'],
  },
];
