export type FunItem = {
  label: string;
  value: string;
  href?: string;
  note?: string;
};

export type FunGroup = {
  label: string;
  items: FunItem[];
};

export const funGroups: FunGroup[] = [
  {
    label: 'Spotify playlists',
    items: [
      {
        label: 'Bestest of All Times',
        value: 'Spotify playlist',
        href: 'https://open.spotify.com/playlist/2XP6t9K3d7MgfsdwMqEd7y?si=8a942f9b4e154c0b',
        note: 'Click to open the link.',
      },
    ],
  },
  {
    label: 'anime',
    items: [
      {
        label: 'favorites',
        value: 'Steins;Gate, Vinland Saga, 86, Mob Psycho 100',
      },
      {
        label: 'rewatch',
        value: 'Cowboy Bebop, Samurai Champloo',
      },
    ],
  }
];
