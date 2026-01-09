import './style.css';

const badges = [
  {
    name: 'cursor',
    weight: 90,
    sizeRange: [0.8, 1.25],
    image: new URL('../assets/icons/cursor.png', import.meta.url).href,
    sound: new URL('../assets/sounds/cursor.m4a', import.meta.url).href,
  },
  {
    name: 'koishi',
    weight: 5,
    sizeRange: [0.9, 1.15],
    image: new URL('../assets/icons/koishi.png', import.meta.url).href,
    sound: new URL('../assets/sounds/koishi.m4a', import.meta.url).href,
  },
  {
    name: 'hoshino',
    weight: 5,
    sizeRange: [0.9, 1.15],
    image: new URL('../assets/icons/hoshino.png', import.meta.url).href,
    sound: new URL('../assets/sounds/hoshino.m4a', import.meta.url).href,
  },
];

function pickBadge() {
  const total = badges.reduce((sum, badge) => sum + badge.weight, 0);
  let roll = Math.random() * total;
  for (const badge of badges) {
    roll -= badge.weight;
    if (roll <= 0) return badge;
  }
  return badges[badges.length - 1];
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function spawnBadgeAt(x, y) {
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

function handleClick(event) {
  spawnBadgeAt(event.clientX, event.clientY);
}

document.body.addEventListener('click', handleClick);
