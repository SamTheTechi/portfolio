export type Project = {
  title: string;
  description: string;
  image?: string;
  github: string;
  link?: string;
};

export type ProjectCategory = {
  label: string;
  projects: Project[];
};

export const projectCategories: ProjectCategory[] = [
  {
    label: 'web',
    projects: [
      {
        title: 'Verdent',
        description: 'It is a full-stack Plant selling website with payment integration and custome auth',
        image: '/projects/verdent.webp',
        github: 'https://github.com/SamTheTechi/verdant',
        link: 'https://verdant.samthetechi.com'
      },
      {
        title: 'ChisaiURL',
        description: 'Scaleable and Distributed url shortner with metrics and logging.',
        image: '/projects/url.webp',
        github: 'https://github.com/SamTheTechi/ChisaiURL',
        link: 'https://url.samthetechi.com'
      },
    ],
  },
  {
    label: 'low-level',
    projects: [
      {
        title: 'miniRedis',
        description: 'It is a asynchronous Redis compatible in-memory key value DB built with Rust and Tokio.',
        github: 'https://github.com/example/driftos',
        link: 'https://miniredis.samthetechi.com'
      },
      {
        title: 'kayori_V2',
        description: 'An intelligent, multi-platform AI companion with emotional awareness and long-term memory.',
        image: '/projects/kayori.webp',
        github: 'https://github.com/example/signalforge',
        link: 'https://kayori.samthetechi.com'
      },
    ],
  },
  {
    label: 'miscellaneous-fun',
    projects: [
      {
        title: 'Magica',
        description: 'It is a 2D RPG adventure game built from scratch using vanilla JavaScript and HTML5 Canvas.',
        image: '/projects/magica.webp',
        github: 'https://github.com/SamTheTechi/Magica',
        link: 'https://magica.samthetechi.com'
      },
      {
        title: 'Whispefy',
        description: 'It is a lightweight Linux voice-dictation app for Hyprland. It works like a Whisperflow',
        image: '/projects/whispefy.webp',
        github: 'https://github.com/SamTheTechi/whispefy',
        link: 'https://whispefy.samthetechi.com'
      },
    ],
  },
];
