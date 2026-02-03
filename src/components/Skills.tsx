import React from 'react';

const Skills: React.FC = () => (
  <>
    <li className="relative pl-6 mb-2">skills</li>
    <ul className="list-none pl-8">
      <li className="relative pl-6 mb-2">languages</li>
      <ul className="list-none pl-8">
        <li className="relative pl-6 mb-2">Python, JavaScript, TypeScript, Rust, SQL, Bash, HTML/CSS</li>
      </ul>
      <li className="relative pl-6 mb-2">frontend</li>
      <ul className="list-none pl-8">
        <li className="relative pl-6 mb-2">React, React-Native, Tailwind CSS, Framer Motion, shadcn/ui</li>
      </ul>
      <li className="relative pl-6 mb-2">backend</li>
      <ul className="list-none pl-8">
        <li className="relative pl-6 mb-2">Node.js, Express, FastAPI, gRPC, Langchain, MongoDB, Redis, Postgres, Pinecone</li>
      </ul>
      <li className="relative pl-6 mb-2">devops</li>
      <ul className="list-none pl-8">
        <li className="relative pl-6 mb-2">Docker, Amazon Web Services (AWS), Cloudflare, Vercel</li>
      </ul>
      <li className="relative pl-6 mb-2">developer tools</li>
      <ul className="list-none pl-8">
        <li className="relative pl-6 mb-2">Linux (Arch/Debian), Neovim, VSCode, Tmux, Git/Github</li>
      </ul>
    </ul>
  </>
);

export default Skills;
