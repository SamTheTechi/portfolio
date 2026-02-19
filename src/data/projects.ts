export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
};

export type ProjectCategory = {
  label: string;
  projects: Project[];
};

export const projectCategories: ProjectCategory[] = [
  {
    label: 'web/mobile',
    projects: [
      {
        title: 'AtlasUI',
        description: 'A performance-first design system with tokenized themes and rapid prototyping.',
        image: '/projects/placeholder-web.svg',
        github: 'https://github.com/example/atlas-ui',
      },
      {
        title: 'PulseCart',
        description: 'A realtime storefront with headless checkout and an analytics dashboard.',
        image: '/projects/placeholder-web.svg',
        github: 'https://github.com/example/pulsecart',
      },
      {
        title: 'OrbitDesk',
        description: 'A personal workspace hub with shortcuts, widgets, and live status tiles.',
        image: '/projects/placeholder-web.svg',
        github: 'https://github.com/example/orbitdesk',
      },
    ],
  },
  {
    label: 'low-level',
    projects: [
      {
        title: 'DriftOS',
        description: 'A toy kernel with a cooperative scheduler, paging, and a serial console.',
        image: '/projects/placeholder-low.svg',
        github: 'https://github.com/example/driftos',
      },
      {
        title: 'SignalForge',
        description: 'A Rust DSP toolkit with SIMD filters and a minimal audio graph.',
        image: '/projects/placeholder-low.svg',
        github: 'https://github.com/example/signalforge',
      },
      {
        title: 'ByteShuttle',
        description: 'A lightweight IPC experiment with shared-memory channels and tracing.',
        image: '/projects/placeholder-low.svg',
        github: 'https://github.com/example/byteshuttle',
      },
    ],
  },
  {
    label: 'miscellaneous/fun',
    projects: [
      {
        title: 'Neon Arcade',
        description: 'A glitchy pixel runner built in three weekends with procedural levels.',
        image: '/projects/placeholder-fun.svg',
        github: 'https://github.com/example/neon-arcade',
      },
      {
        title: 'StudioOps',
        description: 'A lightweight booking tool for student labs with QR check-in.',
        image: '/projects/placeholder-fun.svg',
        github: 'https://github.com/example/studioops',
      },
      {
        title: 'GlitchGarden',
        description: 'A generative pixel garden with daily seeds and neon palettes.',
        image: '/projects/placeholder-fun.svg',
        github: 'https://github.com/example/glitchgarden',
      },
    ],
  },
];
