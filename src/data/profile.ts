export const aboutLines = [
  'B.Tech in Computer Science Engineering at United College of Engineering and Research (AKTU), 2023-Present.',
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Rust', 'SQL', 'Bash', 'HTML/CSS'],
  },
  {
    label: 'frontend',
    items: ['React', 'React Native', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
  },
  {
    label: 'backend',
    items: ['Node.js', 'Express', 'FastAPI', 'gRPC', 'LangChain', 'MongoDB', 'Redis', 'Postgres', 'Pinecone'],
  },
  {
    label: 'devops',
    items: ['Docker', 'AWS', 'Cloudflare', 'Vercel'],
  },
  {
    label: 'developer tools',
    items: ['Linux (Arch/Debian)', 'Neovim', 'VSCode', 'Tmux', 'Git/GitHub'],
  },
];
