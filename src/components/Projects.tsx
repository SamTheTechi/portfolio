import React from 'react';

const Projects: React.FC = () => (
  <>
    <li className="relative pl-6 mb-2">projects</li>
    <ul className="list-none pl-8">
      <li className="relative pl-6 mb-2">web/mobile</li>
      <ul className="list-none pl-8">
        <li className="relative pl-6 mb-2">BlipAI (Remote)</li>
        <ul className="list-none pl-8">
          <li className="relative pl-6 mb-2">A production-ready app and AI agent used by 10K+ users. Developed core FastAPI backend services and a React Native (Expo) app.</li>
        </ul>
        <li className="relative pl-6 mb-2">Verdant Market (E-commerce Platform)</li>
        <ul className="list-none pl-8">
          <li className="relative pl-6 mb-2">A full-stack e-commerce platform with React, Express, MongoDB, Redis, and Docker. Implemented JWT-based auth, secure session handling, and integrated Razorpay.</li>
        </ul>
        <li className="relative pl-6 mb-2">ChisaiUrl (Scalable URL Shortener)</li>
        <ul className="list-none pl-8">
          <li className="relative pl-6 mb-2">A distributed, high-throughput, stateless URL shortening service using Node.js, MongoDB, and Redis. Containerized with Docker for horizontal scaling.</li>
        </ul>
      </ul>
      <li className="relative pl-6 mb-2">low-level</li>
      <ul className="list-none pl-8">
        <li className="relative pl-6 mb-2">Kayori (AI Agent)</li>
        <ul className="list-none pl-8">
          <li className="relative pl-6 mb-2">A multi-agent AI companion with emotion-driven behavior. Implemented a RAG pipeline using Pinecone, a proactive scheduler, and a stateless FastAPI backend deployed on AWS ECS/ECR using Docker.</li>
        </ul>
      </ul>
      <li className="relative pl-6 mb-2">miscellaneous/fun</li>
      <ul className="list-none pl-8">
        <li className="relative pl-6 mb-2">Technical Head, College Fest (Enigms XII)</li>
        <ul className="list-none pl-8">
          <li className="relative pl-6 mb-2">Led technical operations, managed A/V setup, and designed registration forms.</li>
        </ul>
        <li className="relative pl-6 mb-2">Top 1% Finisher, Bug Hunt Contest</li>
        <ul className="list-none pl-8">
          <li className="relative pl-6 mb-2">Placed 3rd out of 250+ participants, demonstrating strong debugging and problem-solving skills.</li>
        </ul>
      </ul>
    </ul>
  </>
);

export default Projects;
