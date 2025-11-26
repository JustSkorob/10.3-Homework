import GoblinSpawner from './GoblinSpawner.js';
import ScoreBoard from './ScoreBoard.js';

export default class Game {
  constructor() {
    this.isActive = false;
    this.cells = null;
    this.scoreBoard = null;
    this.goblinSpawner = null;

    this.initField();
  }

  initField() {
    const field = document.getElementById('game-field');
    field.innerHTML = '';
    this.cells = [];

    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.cells.push(cell);
    }

    field.append(...this.cells);
  }

  start() {
    if (this.isActive) return;

    this.scoreBoard = new ScoreBoard();
    this.goblinSpawner = new GoblinSpawner(this.cells, this.scoreBoard, this);

    this.isActive = true;

    this.startTimeout = setTimeout(() => {
      this.goblinSpawner.showGoblin();
    }, 800);
  }

  stop() {
    this.isActive = false;
    if (this.startTimeout) {
      clearTimeout(this.startTimeout);
      this.startTimeout = null;
    }
    if (this.goblinSpawner) {
      this.goblinSpawner.reset();
    }
  }

  restart() {
    this.stop();
    if (this.scoreBoard) {
      this.scoreBoard.reset();
    }
    setTimeout(() => this.start(), 500);
  }
}
