import '../styles.css';
import Game from './Game.js';
import HammerCursor from './HammerCursor.js';

document.addEventListener('DOMContentLoaded', () => {
  const hammerCursor = new HammerCursor();

  const game = new Game();

  game.start();

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !game.isActive) {
      game.restart();
    }
  });
});
