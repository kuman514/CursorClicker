export const badges = [
  {
    name: 'cursor',
    weight: 90,
    sizeRange: [0.8, 1.25],
    image: new URL('/assets/icons/cursor.png', import.meta.url),
    sound: new URL('/assets/sounds/cursor.m4a', import.meta.url),
  },
  {
    name: 'koishi',
    weight: 5,
    sizeRange: [0.9, 1.15],
    image: new URL('/assets/icons/koishi.png', import.meta.url),
    sound: new URL('/assets/sounds/koishi.m4a', import.meta.url),
  },
  {
    name: 'hoshino',
    weight: 5,
    sizeRange: [0.9, 1.15],
    image: new URL('/assets/icons/hoshino.png', import.meta.url),
    sound: new URL('/assets/sounds/hoshino.m4a', import.meta.url),
  },
];

export const totalWeight = badges.reduce((sum, badge) => sum + badge.weight, 0);
