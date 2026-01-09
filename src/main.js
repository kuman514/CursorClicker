import './style.css';
import { spawnBadgeAt } from './badgeSpawner.js';

function handleClick(event) {
  spawnBadgeAt(event.clientX, event.clientY);
}

document.body.addEventListener('click', handleClick);
