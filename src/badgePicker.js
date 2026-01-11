import { badges, totalWeight } from '^/badges.js';

export function pickBadge() {
  let roll = Math.random() * totalWeight;
  for (const badge of badges) {
    roll -= badge.weight;
    if (roll <= 0) return badge;
  }
  return badges[badges.length - 1];
}
