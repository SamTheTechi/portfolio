export const aboutLines = [
  'I design and build fast, clean products with a bias toward shipping.',
  'I like turning messy ideas into sharp interfaces and dependable systems.',
  'When the build is done, I obsess over the tiny details that make it feel alive.',
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
    label: 'devops & tooling',
    items: ['Docker', 'AWS', 'Cloudflare', 'Linux (Arch/Debian)', 'Neovim', 'Git/GitHub'],
  },
];
