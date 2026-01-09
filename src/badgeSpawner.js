import { pickBadge } from './badgePicker.js';
import { randomInRange } from './utils.js';

export function spawnBadgeAt(x, y) {
  const badge = pickBadge();
  const scale = randomInRange(badge.sizeRange[0], badge.sizeRange[1]);

  const icon = document.createElement('img');
  icon.src = badge.image;
  icon.alt = `${badge.name} badge`;
  icon.className = 'badge';
  icon.style.left = `${x}px`;
  icon.style.top = `${y}px`;
  icon.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`;

  document.body.appendChild(icon);

  const audio = new Audio(badge.sound);
  audio.play().catch(() => {
    // Ignore play errors (e.g., blocked autoplay before user gesture).
  });
}
