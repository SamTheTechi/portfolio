export type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  highlights: string[];
  link?: string;
};

export const experienceItems: ExperienceItem[] = [
  {
    role: 'software engineer intern',
    company: 'Blip AI',
    dates: 'Aug 2025 - Nov 2025',
    link: 'https://blipai.app',
    highlights: [
      'Designed and implemented FastAPI backend services powering core product features used by 2K+ users.',
      'Built the React Native mobile app from the ground up and integrated backend APIs into production workflows.',
    ],
  },
];
